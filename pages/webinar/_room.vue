<template>
  <div>
    <div class="container-fluid">
      <div class="row webinar-live">
        <div class="col-lg-1 webinar-live__tab" :class="{ hidden: chatStatus }">
          <div class="webinar-live__logo">
            <img src="~/static/icon.png" alt="" />
          </div>
          <div class="webinar-live__tabs-box d-none">
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-bar-graph"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  fill="#9fa6ae"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-camera-video-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
          </div>
          <div class="webinar-live__person-pic">
            <img src="~/static/person.jpg" alt="" />
          </div>
        </div>

        <div class="col-lg-7 webinar-live__main">
          <div class="webinar-live__header" :class="{ hidden: chatStatus }">
            <div class="webinar-live__back">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 25.451 25.451"
                xml:space="preserve"
                fill="#000"
                class="arrow"
                style="width: 10px"
              >
                <g>
                  <g id="c185_triangle">
                    <path
                      d="M20.982,0.521v2.006L8.57,12.315c-0.121,0.101-0.195,0.251-0.195,0.41s0.074,0.311,0.195,0.41l12.412,9.79v2.005
			c0,0.199-0.115,0.383-0.297,0.469c-0.178,0.086-0.395,0.064-0.549-0.061L4.664,13.136c-0.122-0.1-0.194-0.251-0.194-0.41
			s0.072-0.31,0.194-0.41L20.136,0.113c0.154-0.126,0.371-0.148,0.549-0.061C20.866,0.139,20.982,0.322,20.982,0.521z"
                    ></path>
                  </g>
                  <g id="Capa_1_58_"></g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
            <h4 class="webinar-live__title">{{ userName }}</h4>
            <span
              @click="connect()"
              class="webinar-live__badge ml-2 webinar-live__badge_purple"
            >
              {{ $nuxt._route.params.room }}
            </span>
          </div>

          <div class="webinar-live__info" :class="{ hidden: chatStatus }">
            <div class="webinar-live__invited">
              <svg
                style="height: 20px; width: 20px; color: rgb(162, 169, 177)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  fill="#a2a9b1"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  fill="#a2a9b1"
                ></path>
                <path
                  d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  fill="#a2a9b1"
                ></path>
              </svg>
              <span>تعداد افراد دعوت شده :</span>
              <span class="webinar-live__badge webinar-live__badge_green f-is"
                >6</span
              >
            </div>
            <div class="webinar-live__absent">
              <svg
                style="height: 20px; width: 20px; color: rgb(162, 169, 177)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-x-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                  fill="#a2a9b1"
                ></path>
              </svg>
              <span>افراد آنلاین : </span>
              <span class="webinar-live__badge webinar-live__badge_red f-is">{{
                onlineCount
              }}</span>
            </div>
            <div class="webinar-live__add-user">
              <span class="badge">
                <svg
                  style="height: 20px; width: 20px; color: rgb(255, 255, 255)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span>اضافه کردن کاربران به وبینار</span>
            </div>
          </div>

          <!-- <div
            id="video-container"
            @mousemove="overLayController(3000)"
            class="webinar-live-player"
          > -->
          <div id="video-container" class="webinar-live-player">
            <div id="remote_videos">
              <div class="videos-inner"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 live-chat" style="flex: auto; overflow-y: auto">
          <LiveChat
            @mobileChatStatus="chatHandler"
            @submit="send"
            :confirmedMessage="confirmedMessage"
            :oldMessages="messages"
            :onlineUsers="onlineUsers"
            :chooseUser="chooseUser"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let peer = null;
export default {
  layout: "blank",

  // components : {
  //   name: 'liveChat'
  // }
  data: () => ({
    localStream: null,
    fullScreenFlag: false,
    idleTimer: null,
    idleState: false,
    isMute: false,
    chatStatus: false,
    onlineCount: 0,
    onlineUsers: [],
    socket: null,
    endpoint: "webinars",
    roomName: "",
    confirmedMessage: null,
    userName: "",
    messages: [],
    //

    configuration: {
      iceServers: [
        { urls: "stun:stun.stunprotocol.org:3478" },
        { urls: "stun:stun.l.google.com:19302" },
        {
          urls: ["turn:13.250.13.83:3478?transport=udp"],
          username: "YzYNCouZM1mhqhmseWk6",
          credential: "YzYNCouZM1mhqhmseWk6",
        },
      ],
    },
    localUUID: null,
    localStream: null,
    connection: null,
    consumers: new Map(),
    clients: new Map(),
    remoteContainer:null
  }),
  methods: {
    async send(message) {
      await this.socket.emit("newMessage", {
        sender: this.userName,
        message,
        roomName: this.roomName,
        endpoint: this.endpoint,
      });
      // await this.socket.on('confirmMessage',  data => {
      //  this.confirmedMessage=data
      //   console.log(this.confirmedMessage, 'confirmed message')
      // })
    },
    chatHandler(status) {
      this.chatStatus = status;
      // if(status){
      //   this.$refs.mobileHeader.style.height = 0
      //   this.$refs.webinarInfo1.style.height = 0
      //   this.$refs.webinarInfo2.style.height = 0
      //   this.$refs.webinarInfo2.style.padding = 0
      //   this.$refs.webinarInfo2.style.padding = 0
      //   this.$refs.webinarInfo2.style.height = 0
      // }
    },
    fullScreen() {
      var element = document.getElementById("video-container");
      //let that = this
      if (!this.fullScreenFlag) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        }
        if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        }
        screen.orientation.lock("landscape-primary");
        this.fullScreenFlag = true;
        return;
      } else if (this.fullScreenFlag) {
        screen.orientation.lock("portrait");
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }

        this.fullScreenFlag = false;
        return;
      }
    },
    // makeLandscape() {
    //   // if (screen.orientation && screen.orientation.lock) {
    //   screen.orientation.lock("landscape-primary");
    //   // }
    // },

    // overLayController(time) {
    //   clearTimeout(this.idleTimer);
    //   if (this.idleState == true) {
    //     // $("#foo").removeClass("inactive");
    //     document.getElementById("over-lay").style.opacity = 1;
    //   }
    //   this.idleState = false;
    //   this.idleTimer = setTimeout(() => {
    //     document.getElementById("over-lay").style.opacity = 0;
    //     this.idleState = true;
    //   }, time);
    // },

    async roomInfo() {
      await this.socket.on("roomInfo", (roomInfo) => {
        this.roomName = roomInfo.name;
        // console.log(roomInfo, 'rooooom')
        this.messages = roomInfo.messages;
        // console.log(this.roomName , 'this is roomname')
      });
      await this.socket.on("countOfOnlineUsers", (count) => {
        console.log(count);
        this.onlineCount = count.length;
        this.onlineUsers = count;
      });
      //? when it was at submit function / client couldn't recive first message befor sending message
      await this.socket.on("confirmMessage", (data) => {
        this.confirmedMessage = data;
        console.log(this.confirmedMessage, "confirmed message");
      });
    },
    async choosedUserToCall() {
      await this.socket.on("choosed-to-call", async (data) => {
        //console.log("heyyyy");
          let constraint = {
            audio: true,
            video: {
              mandatory: {
                width: { min: 320 },
                height: { min: 180 },
              },
              optional: [
                { width: { max: 1280 } },
                { frameRate: 30 },
                { facingMode: "user" },
              ],
            },
          };
          let stream = await navigator.mediaDevices.getUserMedia(constraint);
          this.handleRemoteTrack(stream, username.value);
          this.localStream = stream;

          peer = this.createPeer();
          this.localStream
            .getTracks()
            .forEach((track) => peer.addTrack(track, this.localStream));
          //  await subscribe();
      });
    },

    //? import from advanced webrtc project

    chooseUser(username, id) {
      //alert(id)
      // if (nickname != "admin") return;
      let payload = {
        name: username,
        id: id,
      };
      this.socket.emit("choose-user", payload);
    },

    async init() {
      console.log("window loaded");

      this.socket.on("connect", (e) => {
        console.log("socket connected");
        console.log(socket.id, "socket");
        connectBtn.disabled = false;
      });
      socket.on("disconnect", (e) => {
        console.log("socket desconnected");
        handleClose;
      });
      // this.socket.on("message", (e) => {
      //   console.log("socket message");
      //   this.handleMessage(e);
      // });
    },
    recalculateLayout() {
      let container = this.remoteContainer;
      let videoContainer = document.querySelector(".videos-inner");
      let videoCount = container.querySelectorAll(".videoWrap").length;

      if (videoCount >= 3) {
        videoContainer.style.setProperty("--grow", 0 + "");
      } else {
        videoContainer.style.setProperty("--grow", 1 + "");
      }
    },

    uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },

    findUserVideo(username) {
      return document.querySelector(`#remote_${username}`);
    },

    async handleRemoteTrack(stream, username) {
      let userVideo = this.findUserVideo(username);
      if (userVideo) {
        userVideo.srcObject.addTrack(stream.getTracks()[0]);
      } else {
        let video = document.createElement("video");
        video.id = `remote_${username}`;
        video.srcObject = stream;
        video.autoplay = true;
        video.muted = username == this.userName;

        let div = document.createElement("div");
        div.id = `user_${username}`;
        div.classList.add("videoWrap");

        let nameContainer = document.createElement("div");
        nameContainer.classList.add("display_name");
        let textNode = document.createTextNode(username);
        nameContainer.appendChild(textNode);
        div.appendChild(nameContainer);
        div.appendChild(video);
        document.querySelector(".videos-inner").appendChild(div);
      }

      this.recalculateLayout();
    },

    async handleIceCandidate({ candidate }) {
      if (candidate && candidate.candidate && candidate.candidate.length > 0) {
        let payload = {
          type: "ice",
          ice: candidate,
          uqid: this.localUUID,
        };
        this.socket.emit("message", payload);
      }
    },

    async checkPeerConnection(e) {
      var state = peer.iceConnectionState;
      if (
        state === "failed" ||
        state === "closed" ||
        state === "disconnected"
      ) {
      }
    },

    handleConsumerIceCandidate(e, id, consumerId) {
      let { candidate } = e;
      if (candidate && candidate.candidate && candidate.candidate.length > 0) {
        let payload = {
          type: "consumer_ice",
          ice: candidate,
          uqid: id,
          consumerId,
        };
        this.socket.emit("message", payload);
      }
    },

    handleConsume({ sdp, id, consumerId }) {
      let desc = new RTCSessionDescription(sdp);
      this.consumers
        .get(consumerId)
        .setRemoteDescription(desc)
        .catch((e) => console.log(e));
    },

    async createConsumeTransport(peer) {
      let consumerId = this.uuidv4();
      console.log(peer.id, "peer id");
      console.log(consumerId, "peer id");
      let consumerTransport = new RTCPeerConnection(this.configuration);
      this.clients.get(peer.id).consumerId = consumerId;
      consumerTransport.id = consumerId;
      consumerTransport.peer = peer;
      this.consumers.set(consumerId, consumerTransport);
      this.consumers
        .get(consumerId)
        .addTransceiver("video", { direction: "recvonly" });
      this.consumers
        .get(consumerId)
        .addTransceiver("audio", { direction: "recvonly" });
      let offer = await this.consumers.get(consumerId).createOffer();
      await this.consumers.get(consumerId).setLocalDescription(offer);

      this.consumers.get(consumerId).onicecandidate = (e) =>
        this.handleConsumerIceCandidate(e, peer.id, consumerId);

      this.consumers.get(consumerId).ontrack = (e) => {
        this.handleRemoteTrack(e.streams[0], peer.username);
      };

      return consumerTransport;
    },

    async consumeOnce(peer) {
      let transport = await this.createConsumeTransport(peer);
      let payload = {
        type: "consume",
        id: peer.id,
        consumerId: transport.id,
        sdp: await transport.localDescription,
      };

      this.socket.emit("message", payload);
    },

    async handlePeers({ peers }) {
      if (peers.length > 0) {
        for (let peer in peers) {
          this.clients.set(peers[peer].id, peers[peer]);
          console.log("are ejra mishe");
          await this.consumeOnce(peers[peer]);
        }
      }
    },

    handleAnswer({ sdp }) {
      let desc = new RTCSessionDescription(sdp);
      peer.setRemoteDescription(desc).catch((e) => console.log(e));
    },

    async handleNewProducer({ id, username }) {
      if (id === this.localUUID) return;

      console.log("consuming", id);
      this.clients.set(id, { id, username });

      await this.consumeOnce({ id, username });
    },

    handleMessage(data) {
      let message = data;
      //console.log(message);
      switch (message.type) {
        case "welcome":
          this.localUUID = message.id;
          break;
        case "answer":
          this.handleAnswer(message);
          break;
        case "peers":
          this.handlePeers(message);
          break;
        case "consume":
          this.handleConsume(message);
          break;
        case "newProducer":
          this.handleNewProducer(message);
          break;
        case "user_left":
          this.removeUser(message);
          break;
      }
    },

    removeUser({ id }) {
      if (this.clients.get(id)) {
        console.log(this.clients.get(id));
        let { username, consumerId } = this.clients.get(id);
        this.consumers.delete(consumerId);
        this.clients.delete(id);
        document
          .querySelector(`#remote_${username}`)
          .srcObject.getTracks()
          .forEach((track) => track.stop());
        document.querySelector(`#user_${username}`).remove();

        this.recalculateLayout();
      }
    },

    async connect() {
      //Produce media
      if (this.userName == "ali") {
        let constraint = {
          audio: true,
          video: {
            mandatory: {
              width: { min: 320 },
              height: { min: 180 },
            },
            optional: [
              { width: { max: 1280 } },
              { frameRate: 30 },
              { facingMode: "user" },
            ],
          },
        };
        let stream = await navigator.mediaDevices.getUserMedia(constraint);
        this.handleRemoteTrack(stream, this.userName);
        this.localStream = stream;

        peer = this.createPeer();
        this.localStream
          .getTracks()
          .forEach((track) => peer.addTrack(track, this.localStream));
        await this.subscribe();
      } else {
        //createPeer();
        await this.subscribe();
      }
      console.log(this.clients);
      console.log(this.consumers);
    },

    handleClose() {
      this.connection = null;
      this.localStream.getTracks().forEach((track) => track.stop());
      this.clients = null;
      this.consumers = null;
    },

    createPeer() {
      peer = new RTCPeerConnection(this.configuration);
      console.log(peer);
      peer.onicecandidate = this.handleIceCandidate;

      peer.onnegotiationneeded = () => this.handleNegotiation(peer);
      return peer;
    },

    async handleNegotiation(peer, type) {
      console.log("*** negoitating ***");
      let offer = await peer.createOffer();
      await peer.setLocalDescription(offer);

      this.socket.emit("message", {
        type: "connect",
        sdp: peer.localDescription,
        uqid: this.localUUID,
        username: this.userName,
      });
    },

    async subscribe() {
      // Consume media
      await this.consumeAll();
    },

    async consumeAll() {
      // console.log(this.localUUID, 'peeeeerssss')
      let payload = {
        type: "getPeers",
        uqid: this.localUUID,
      };

      this.socket.emit("message", payload);
    },
  },
  beforeMount() {
    this.userName = localStorage.getItem("name");
    console.log(this.userName);
    this.socket = this.$nuxtSocket({});
    this.socket.on("connect", () => {
      this.socket.emit("joinRoom", {
        roomName: this.$nuxt._route.params.room,
        userName: this.userName,
      });
    });
  },
  mounted() {
    this.remoteContainer = document.querySelector("#remote_videos");
    // try {
    //   navigator.getUserMedia(
    //   { video: { width: 320, height: 180, facingMode: "user" }, audio: false },
    //   (stream) => {
    //     //const localVideo = document.getElementById('local-video')
    //     // if (localVideo) {
    //     //console.log(localVideo)
    //     this.localStream = stream;
    //     //  }
    //   },
    //   (error) => {
    //     console.log(error.message);
    //   }
    // );
    // } catch (e) {
    //        console.log(e)
    // }

    //?---------------------------------------------

    // this.joinRoom();
    this.roomInfo();
    this.choosedUserToCall();
    this.socket.on("message", (e) => {
      console.log("socket message");
      this.handleMessage(e);
    });
    // this.overLayController(3000); //? time to disappear over-lay first time

    //? for calc urlbar and navigator in mobile & tablet devices
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  },
};
</script>

<style scoped lang="scss">
body {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
  overflow: hidden;
}

.webinar-live {
  * {
    color: black;
  }
  //height: calc(100vh - 30px);
  height: 100vh;
  // min-height: -webkit-fill-available;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap !important;
  @media (min-width: 992px) {
    flex-direction: row !important;
  }
  &__chat {
    background: blue;
  }
  &__main {
    background: white;
    @media (min-width: 992px) {
      border-right: 2px solid rgba(85, 85, 85, 0.192);
      border-radius: 20px;
    }
  }
  &__header {
    padding: 30px 10px;
    border-bottom: 2px solid rgba(85, 85, 85, 0.192);
    display: flex;
    align-items: center;
    transition: 0.4s all;
    @media (max-width: 992px) {
      padding: 5px;
    }
  }
  &__back {
    background: rgba(190, 190, 190, 0.575);
    padding: 5px 10px;
    border-radius: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transform: rotate(180deg);
    }
  }
  &__title {
    margin-bottom: 0;
    font-size: 16px;
    @media (max-width: 992px) {
      font-size: 14px;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    flex-wrap: nowrap;
    overflow-x: scroll;
    transition: 0.4s all;
    @media (max-width: 992px) {
      padding: 10px 10px;
    }
    div {
      font-size: 0.9rem;
      @media (max-width: 992px) {
        min-width: 200px;
        //  span{
        //    font-size:.9rem;
        //  }
      }
    }
  }
  &__info::-webkit-scrollbar {
    display: none;
  }
  &__invited {
    margin-left: 30px;
    display: flex;
    align-items: center;
    * {
      margin: 0 3px;
    }
  }
  &__badge {
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.8rem;
    &_green {
      background: #d1e6e7;
      color: #4fad9f;
    }
    &_red {
      background: #fcf2f1;
      color: #d27178;
    }
    &_purple {
      background: #d3d5e4;
      color: #5b5e87;
    }
  }
  &__absent {
    margin-left: 10px;
    display: flex;
    align-items: center;
    * {
      margin: 0 3px;
    }
  }
  &__add-user {
    margin-right: auto;
    display: flex;
    align-items: center;
    //      *{
    //    margin: 0 3px;
    //  }
    span {
      color: green;
    }
    .badge {
      background: #039e8c;
      padding: 5px;
      border-radius: 10px;
      margin-left: 5px;
    }
  }
  &__tab {
    padding-top: 15px;
    padding-bottom: 15px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s all;
    @media (max-width: 992px) {
      flex-direction: row;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  &__tabs-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
      flex-direction: row;
    }
  }
  &__tabs {
    margin: 5px 0;
    padding: 10px 12px;
    border-radius: 15px;
    transition: background 0.4s;
    svg path {
      transition: background 0.4s;
    }
    &:hover {
      background: #dff3f1;
      svg path {
        fill: #05a28d !important;
      }
    }
  }
  &__person-pic {
    width: 80%;
    @media (max-width: 992px) {
      width: 10%;
      text-align: left;
    }
    img {
      width: 30px;
      border-radius: 100%;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  }
  &__logo {
    width: 80%;
    width: 80%;
    @media (max-width: 992px) {
      width: 10%;
    }
    img {
      width: 30px;
    }
  }
}
.webinar-live-player {
  position: relative;
  overflow: hidden;
  &__overlay {
    height: 100%;
    width: 100%;
    border-radius: 15px;
    position: absolute;
    // background: rgba(0, 0, 0, 0.369);
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.33239233193277307) 0%,
      rgba(255, 255, 255, 0) 73%
    );
    z-index: 1;
    // opacity: 0;
    transition: 0.3s opacity;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
      //justify-content: start;
    }
    &:hover {
      opacity: 1;
    }
  }
  &__video {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    &[poster] {
      //  height: 100%;
      object-fit: cover;
    }
  }
  &__header {
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    //align-items: center;
  }
  &__publisher {
    @media (max-width: 992px) {
      display: none;
    }
    width: 200px;
    display: flex;
    align-items: center;
    .img-frame {
      width: 40%;
      margin-left: 20px;
      background: white;
      border-radius: 20px;
      // overflow: hidden;
      img {
        width: 100%;
        border-radius: 20px;
        border: 2px solid white;
      }
    }
    .content {
      // width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      span {
        font-size: 0.8rem;
        line-height: 2.3rem;
        color: white;
      }
      h5 {
        color: white;
        font-size: 0.9rem;
      }
    }
  }
  &__timer {
    span {
      background: rgba(0, 0, 0, 0.644);
      border-radius: 10px;
      padding: 5px;
      color: white;
    }
  }
  &__footer {
    text-align: center;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 992px) {
      margin-bottom: 0;
      justify-content: center;
    }
  }
  &__controlbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    span {
      padding: 10px 12px;
      border-radius: 100% !important;
      background-color: rgba(162, 162, 162, 0.73) !important;
      backdrop-filter: blur(5px);
      margin: 15px;
      transition: all 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 992px) {
        margin: 7px;
        padding: 9px 11px;
      }
      @media (min-width: 992px) {
        &:hover {
          transform: translateY(-8px);
          cursor: pointer;
        }
      }
    }
    span:nth-child(3) {
      background: #ff5956 !important;
      padding: 24px 26px;
      //border-radius: 24px !important;
      @media (max-width: 992px) {
        padding: 18px;
      }
    }
  }
  &__valume-control {
    @media (max-width: 992px) {
      display: none;
    }
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: rgba(202, 202, 202, 0.493) !important;
    padding: 23px 0px;
    border-radius: 200px !important;
    height: 0;
    width: 147px;
    justify-content: space-evenly;
    transform: rotate(90deg);

    // span {

    //   // position: absolute;
    //   top: -34px;
    //   // width: 41px;
    //   // height: 134px;
    //   left: 50px;
    // }
    svg {
      // position: absolute;
      // bottom: 10px;
      // left: 11px;
      transform: rotate(-90deg);
    }
    input {
      //  -webkit-appearance: none;
      margin: 18px 0;
      width: 60%;
      height: 4px;
      z-index: 2;
      // transform: rotate(90deg);
      position: relative;
      left: 6px;
      background: #fff;
      accent-color: #039e8c;
      border-radius: 5px;
      background: #d3d3d3;
      outline: none;
      //opacity: 0.7;
    }
    input:focus {
      background: #ffffff !important;
      accent-color: #039e8c !important;
      cursor: grab;
    }
    input:hover {
      background: #d3d3d3 !important;
      accent-color: #039e8c !important;
      cursor: pointer;
    }
    input::-webkit-slider-thumb {
      -webkit-appearance: none !important;
      // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      // border: 1px solid #000000;
      height: 16px;
      width: 16px;
      border-radius: 100%;
      background: black !important;
      cursor: pointer;
    }
    input::-ms-fill-upper {
      background: #039e8c !important;
      //border-radius: 2.6px;
    }
  }
}
@media (min-width: 992px) {
  .col-lg-1 {
    flex: 0 0 4.333333%;
    max-width: 4.333333%;
  }
  .col-lg-7 {
    flex: 0 0 62.333333%;
    max-width: 62.333333%;
  }
}
@media (max-width: 992px) {
  .col-lg-1,
  .col-lg-7,
  .col-lg-4 {
    padding: 5px !important;
  }
}
@media screen and (orientation: landscape) and (max-width: 768px) {
  .live-chat,
  .webinar-live__tab,
  .webinar-live__info,
  .webinar-live__header {
    display: none;
  }
  .webinar-live__main {
    padding: 0 !important;
    height: 100vh;
    max-width: 100% !important;
    flex: 0 0 100%;
  }
  .webinar-live-player {
    height: 100%;
  }
}

.hidden {
  overflow: hidden !important;
  padding: 0 !important;
  height: 0px !important;
  opacity: 0 !important;
  transition: 0.4s all;
}
</style>