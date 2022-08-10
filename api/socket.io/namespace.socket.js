const {
    ConversationModel
} = require("../models/conversation");
const fs = require("fs");
const path = require("path");
module.exports = class NamespaceSocketHandler {
    #io;
    constructor(io) {
        this.#io = io
    }
    initConnection() {
        this.#io.on("connection", async socket => {
            const namespaces = await ConversationModel.find({}, {
                title: 1,
                endpoint: 1,
                rooms: 1
            }).sort({
                _id: -1
            })
            // console.log('hey it works')
            socket.emit("namespacesList", namespaces)
        })
    }
    async createNamespacesConnection() {
        const namespaces = await ConversationModel.find({}, {
            title: 1,
            endpoint: 1,
            rooms: 1
        }).sort({
            _id: -1
        })
       // for (const namespace of namespaces) {
        //? this is a static namespace , because we need one name space 
        let namespace = {
          name: "webinars",
          endpoint: "webinars",
        };
            this.#io.of(`/${namespace.name}`).on("connection", async (socket) => {
              const conversation = await ConversationModel.findOne(
                { endpoint: namespace.endpoint },
                { endpoint: 1, rooms: 1 }
              ).sort({ _id: -1 });
              socket.emit("roomList", conversation.rooms);
              socket.on("joinRoom", async (roomName) => {
                const lastRoom = Array.from(socket.rooms)[1];
                if (lastRoom) {
                  socket.leave(lastRoom);
                  await this.getCountOfOnlineUsers(
                    namespace.endpoint,
                    roomName
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
                  await this.getCountOfOnlineUsers(
                    namespace.endpoint,
                    roomName
                  );
                });
              });
            });
        //}
    }
    async getCountOfOnlineUsers(endpoint, roomName) {
        const onlineUsers = await this.#io.of(`/${endpoint}`).in(roomName).allSockets()
        this.#io.of(`/${endpoint}`).in(roomName).emit("countOfOnlineUsers", Array.from(onlineUsers).length)
    }
    getNewMessage(socket){
        socket.on("newMessage", async data => {
          //console.log(data);
          const { message, roomName, endpoint , sender } = data
                console.log(message);
                console.log(roomName);
                console.log(endpoint);
          console.log(sender);
          let today = new Date();
          // let date =today.getFullYear() +"-" +(today.getMonth() + 1) + "-" +today.getDate();
          let time = today.getHours() + ":" + today.getMinutes();
            await ConversationModel.updateOne(
              { endpoint, "rooms.name": roomName },
              {
                $push: {
                  "rooms.$.messages": {
                    name: sender,
                    message,
                    dateTime: time,
                  },
                },
              }
            );
            this.#io.of(`/${endpoint}`).in(roomName).emit("confirmMessage", data)
        })
    }

}