<template>
  <div>
    <div class="container-fluid" style="direction: rtl">
      <div class="row webinar-live">
        <div class="col-lg-1 webinar-live__tab" :class="{ hidden: chatStatus }">
          <div class="webinar-live__logo">
            <img src="~/static/icon.png" alt="" />
          </div>
          <div class="webinar-live__tabs-box">
            <div class="webinar-live__tabs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-hand-index-thumb-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                <path
                  d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"
                  id="mainIconPathAttribute"
                  stroke-width="0"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div @click="fullScreen()" class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrows-fullscreen"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
                  fill="#9fa6ae"
                ></path>
              </svg>
              <!-- <svg
                v-if="fullScreenFlag"
                style="color: #9fa6ae"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-fullscreen-exit"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"
                  fill="#9fa6ae"
                ></path>
              </svg> -->
            </div>
            <div @click="isMute = !isMute" class="webinar-live__tabs">
              <svg
                v-if="!isMute"
                style="height: 20px; width: 20px; color: rgb(159, 166, 174)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-mic-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
                  fill="#9fa6ae"
                ></path>
              </svg>
              <svg
                v-if="isMute"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-mic-mute-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                <path
                  d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"
                  id="mainIconPathAttribute"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"
                  id="mainIconPathAttribute"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs" @click="handleCamera()">
              <svg
                v-if="!cameraOff"
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
              <svg
                v-if="cameraOff"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-camera-video-off-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z"
                  id="mainIconPathAttribute"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs" @click="handleVolume()">
              <svg
                v-if="VolumeCounter > 0"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-volume-up-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                <path
                  v-if="VolumeCounter == 3"
                  d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
                  id="mainIconPathAttribute"
                  fill="#9fa6ae"
                ></path>
                <path
                  v-if="VolumeCounter > 1"
                  d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
                  id="mainIconPathAttribute"
                  fill="#9fa6ae"
                ></path>
                <path
                  v-if="VolumeCounter > 0"
                  d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
                  id="mainIconPathAttribute"
                  fill="#9fa6ae"
                ></path>
              </svg>
              <svg
                v-if="VolumeCounter == 0"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-volume-mute-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                <path
                  d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"
                  id="mainIconPathAttribute"
                  fill="#9fa6ae"
                  stroke-width="0"
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
              <div class="videos-inner">
                <div
                  v-for="(item, index) in videos"
                  :key="index"
                  :id="`user_${item.id}`"
                  class="videoWrap"
                >
                  <div class="display_name">{{ item.id }}</div>
                  <video
                    :srcObject.prop="item.src"
                    autoplay
                    muted
                    :id="`remote_${item.id}`"
                  ></video>
                </div>
              </div>
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
    cameraOff: false,
    VolumeCounter: 0,
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
    remoteContainer: null,
    videos: [],
  }),
  methods: {
    handleVolume() {
      this.VolumeCounter++;
      if (this.VolumeCounter > 3) this.VolumeCounter = 0;
    },
    handleCamera() {
      this.cameraOff = !this.cameraOff;
    },
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
            width: { min: 320, ideal: 640, max: 1920 },
            height: { min: 180, ideal: 400 },
            aspectRatio: 1.777777778,
            frameRate: { max: 30 },
            facingMode: { exact: "user" },
          },
        };
        let stream = await navigator.mediaDevices.getUserMedia(constraint);
        this.handleRemoteTrack(stream, this.userName);
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
      // socket.on("disconnect", (e) => {
      //   console.log("socket desconnected");
      //   this.handleClose;
      // });
      // this.socket.on("message", (e) => {
      //   console.log("socket message");
      //   this.handleMessage(e);
      // });
    },
    // recalculateLayout() {
    //   let container = this.remoteContainer;
    //   let videoContainer = document.querySelector(".videos-inner");
    //   let videoCount = container.querySelectorAll(".videoWrap").length;

    //   if (videoCount >= 3) {
    //     videoContainer.style.setProperty("--grow", 0 + "");
    //   } else {
    //     videoContainer.style.setProperty("--grow", 1 + "");
    //   }
    // },

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
        // let video = document.createElement("video");
        // video.id = `remote_${username}`;
        // video.style.width="100%"
        // video.srcObject = stream;
        // video.autoplay = true;
        // video.muted = username == this.userName;

        let video = { id: username, src: stream };
        this.videos.push(video);

        // let div = document.createElement("div");
        // div.id = `user_${username}`;
        // div.classList.add("videoWrap");
        // div.style.width="100%"
        // let nameContainer = document.createElement("div");
        // nameContainer.classList.add("display_name");
        // let textNode = document.createTextNode(username);
        // nameContainer.appendChild(textNode);
        // div.appendChild(nameContainer);
        // div.appendChild(video);
        // document.querySelector(".videos-inner").appendChild(div);
      }

      //this.recalculateLayout();
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

        //this.recalculateLayout();
      }
    },

    async connect() {
      //Produce media
      if (this.userName == "ali") {
        let constraint = {
          audio: true,
          video: {
            width: { min: 320, ideal: 640, max: 1920 },
            height: { min: 180, ideal: 400 },
            aspectRatio: 1.777777778,
            frameRate: { max: 30 },
            facingMode: { exact: "user" },
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
    this.socket.on("disconnect", (e) => {
      console.log("socket desconnected");
      this.handleClose;
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
    cursor: pointer;
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

#remote_videos {
  width: 100%;
  height: 100%;
  // margin: 20px auto;
}

.videos-inner {
  width: 100%;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
}

.videos-inner .videoWrap {
  width: 100% !important;
  border-radius: 20px;
  position: relative;
}

.videos-inner .videoWrap video {
  width: 100% !important;
  // height: 100%;
  border-radius: 20px !important;
}
.videos-inner .display_name {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 0.8rem 1.5rem;
  color: white;
  font-weight: bold;
  font-family: Arial;
  border-radius: 20px;
  max-width: 98%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  font-size: 0.95rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
}


</style>