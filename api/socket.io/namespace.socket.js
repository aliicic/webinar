const { ConversationModel } = require("../models/conversation");
const { v4: uuidv4 } = require("uuid");
const webrtc = require("wrtc");
const fs = require("fs");
const path = require("path");

const totalUsers = [];
let peers = new Map();
let consumers = new Map();
    let namespace = {
      name: "webinars",
      endpoint: "webinars",
    };
module.exports = class NamespaceSocketHandler {
  #io;
  constructor(io) {
    this.#io = io;
  }
  async createNamespacesConnection() {
    const namespaces = await ConversationModel.find(
      {},
      {
        title: 1,
        endpoint: 1,
        rooms: 1,
      }
    ).sort({
      _id: -1,
    });
    // for (const namespace of namespaces) {
    //? this is a static namespace , because we need one name space
    // let namespace = {
    //   name: "webinars",
    //   endpoint: "webinars",
    // };
    this.#io.of(`/${namespace.name}`).on("connection", async (socket) => {
     
      console.log("socket server is running");
 
      let peerId = uuidv4();
      console.log(peerId ,"peer id");
      const conversation = await ConversationModel.findOne(
        { endpoint: namespace.endpoint },
        { endpoint: 1, rooms: 1 }
      ).sort({ _id: -1 });
      socket.emit("message", { type: "welcome", id: peerId });
      socket.emit("roomList", conversation.rooms);
      socket.on("joinRoom", async (data) => {
        const roomName = data.roomName;
        const userName = data.userName;
      
        totalUsers.push({ name: userName, id: socket.id, roomName: roomName });
        console.log(data);
        const lastRoom = Array.from(socket.rooms)[1];
        if (lastRoom) {
          socket.leave(lastRoom);
          await this.getCountOfOnlineUsers(
            namespace.endpoint,
            roomName,
            userName
          );
        }
        socket.join(roomName);
        await this.getCountOfOnlineUsers(namespace.endpoint, roomName);
        const roomInfo = conversation.rooms.find(
          (item) => item.name == roomName
        );
        socket.emit("roomInfo", roomInfo);
        this.getNewMessage(socket);
        socket.on("disconnect", async () => {
          await this.getCountOfOnlineUsers(namespace.endpoint);
          totalUsers.map((item, index) => {
            if (item.id === socket.id) totalUsers.splice(index, 1);
          });
        });
      });
      socket.on("choose-user", (data) => {
        console.log(data);
        socket.to(data.id).emit("choosed-to-call");
      });
      socket.on("message", async (message) => {
        // this.test();
        const body = message;
      
        switch (body.type) {
          case "connect":
            peers.set(body.uqid, { socket });
            // console.log(x)
            console.log(peers.get(body.uqid), "this is body");
            const peer = this.createPeer();
         
            peers.get(body.uqid).username = body.username;
            peers.get(body.uqid).peer = peer;
            peer.ontrack = (e) => {
              this.handleTrackEvent(e, body.uqid, socket);
            };
            const desc = new webrtc.RTCSessionDescription(body.sdp);
            await peer.setRemoteDescription(desc);
            const answer = await peer.createAnswer();
            await peer.setLocalDescription(answer);

            const payload = {
              type: "answer",
              sdp: peer.localDescription,
            };

            socket.emit("message", payload);
            break;
          case "getPeers":
            let uuid = body.uqid;
            console.log(uuid, "this");
            const list = [];
            peers.forEach((peer, key) => {
              if (key != uuid) {
                const peerInfo = {
                  id: key,
                  username: peer.username,
                };
                list.push(peerInfo);
              }
            });

            const peersPayload = {
              type: "peers",
              peers: list,
            };
            //console.log(peersPayload, "pauload list");
            socket.emit("message", peersPayload);
            break;
          case "ice":
            const user = peers.get(body.uqid);
            if (user.peer)
              user.peer
                .addIceCandidate(new webrtc.RTCIceCandidate(body.ice))
                .catch((e) => console.log(e));
            break;
          case "consume":
            try {
              let { id, sdp, consumerId } = body;
              const remoteUser = peers.get(id);
              const newPeer = this.createPeer();
              consumers.set(consumerId, newPeer);
              const _desc = new webrtc.RTCSessionDescription(sdp);
              await consumers.get(consumerId).setRemoteDescription(_desc);

              remoteUser.stream.getTracks().forEach((track) => {
                consumers.get(consumerId).addTrack(track, remoteUser.stream);
              });
              const _answer = await consumers.get(consumerId).createAnswer();
              await consumers.get(consumerId).setLocalDescription(_answer);

              const _payload = {
                type: "consume",
                sdp: consumers.get(consumerId).localDescription,
                username: remoteUser.username,
                id,
                consumerId,
              };

              socket.emit("message", _payload);
            } catch (error) {
              console.log(error);
            }

            break;
          case "consumer_ice":
            if (consumers.has(body.consumerId)) {
              consumers
                .get(body.consumerId)
                .addIceCandidate(new webrtc.RTCIceCandidate(body.ice))
                .catch((e) => console.log(e));
              console.log(body, "cons_ice_body");
            }
            break;
          default:
            socket.broadcast
              .to("room1")
              .emit(message);
        }
      });
      this.#io.on("error", () => io.terminate());
    });
    //}
  }
  async getCountOfOnlineUsers(endpoint, roomName, userName) {
    const onlineUsers = await this.#io
      .of(`/${endpoint}`)
      .in(roomName)
      .allSockets();
    const total = totalUsers.filter((item) => item.roomName == roomName);
    this.#io.of(`/${endpoint}`).in(roomName).emit("countOfOnlineUsers", total);
  }
  initConnection() {
    this.#io.on("connection", async (socket) => {
      const namespaces = await ConversationModel.find(
        {},
        {
          title: 1,
          endpoint: 1,
          rooms: 1,
        }
      ).sort({
        _id: -1,
      });
      // console.log('hey it works')
      socket.emit("namespacesList", namespaces);
    });
  }
  handleTrackEvent(e, peer, socket) {
    if (e.streams && e.streams[0]) {
      peers.get(peer).stream = e.streams[0];

      const payload = {
        type: "newProducer",
        id: peer,
        username: peers.get(peer).username,
      };
      socket.broadcast
        .to("room1")
        .emit("message", payload);
    }
  }
  createPeer() {
    let peer = new webrtc.RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.stunprotocol.org:3478" },
        { urls: "stun:stun.l.google.com:19302" },
        {
          urls: ["turn:13.250.13.83:3478?transport=udp"],
          username: "YzYNCouZM1mhqhmseWk6",
          credential: "YzYNCouZM1mhqhmseWk6",
        },
      ],
    });

    return peer;
  }
  getNewMessage(socket) {
    socket.on("newMessage", async (data) => {
      //console.log(data);
      const { message, roomName, endpoint, sender } = data;
      console.log(message);
      console.log(roomName);
      console.log(endpoint);
      console.log(sender);
      let today = new Date();
      // let date =today.getFullYear() +"-" +(today.getMonth() + 1) + "-" +today.getDate();
      let time = today.getHours() + ":" + today.getMinutes();
      // await ConversationModel.updateOne(
      //   { endpoint, "rooms.name": roomName },
      //   {
      //     $push: {
      //       "rooms.$.messages": {
      //         name: sender,
      //         message,
      //         dateTime: time,
      //       },
      //     },
      //   }
      // );
      this.#io.of(`/${endpoint}`).in(roomName).emit("confirmMessage", data);
    });
  }
};
