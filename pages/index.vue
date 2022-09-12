<template>
  <div class="login-frame">
    <div class="form">
      <h5>نام خود را وارد کنید</h5>
      <input type="text" name="" id="" v-model="loginInfo" />
      <Transition>
        <input
          v-if="loginInfo == 'admin'"
          type="text"
          name=""
          id=""
          v-model="password"
        />
      </Transition>
      <button @click="login">ورود به وبینار</button>
      <!-- <ul>
      <li v-for="(item, index) in items" :key="index" class="fa-is">
        <nuxt-link :to="{ name: 'webinar-room', params: { room: item.name } }">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data: () => ({
    loginInfo: "",
    items: [],
    username: "login first",
    password: "",
  }),

  methods: {
    login() {
      fetch("http://localhost:3000/api/login", {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify({
          mobile: this.loginInfo,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
          if (this.loginInfo == "") return;
          if (this.loginInfo == "admin" && this.password != "qwerty") return;
          localStorage.setItem("name", this.loginInfo);
          // this.username = json.username;
          this.$router.push({
            name: "webinar-room",
            params: { room: "room1" },
          });
        });
    },

    async getRooms() {
      await this.socket.on("roomList", (data) => {
        console.log(data, "this is data");
        this.items = data;
      });
    },
  },
  mounted() {
    this.socket = this.$nuxtSocket({});
    this.getRooms();
  },
};
</script>
<style lang="scss" scoped>
.login-frame {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ededed;
}
li {
  list-style: none;
  background: greenyellow;
  padding: 10px;
  display: inline-block;
  margin: 20px;
}
h5 {
  text-align: center;
}
input {
  display: block !important;
  width: 100% !important;
  padding: 0.6rem 0.75rem !important;
  font-size: 1rem !important;
  font-weight: 300 !important;
  line-height: 1.5 !important;
  color: #44476a !important;
  background-color: #e6e7ee !important;
  background-clip: padding-box !important;
  border: 0.0625rem solid #d1d9e6 !important;
  border-radius: 0.55rem !important;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff !important;
  transition: all 0.3s ease-in-out !important;
  appearance: none;
  outline: none;
  direction: rtl;
  margin-bottom: 10px;
}
button {
  position: relative;
  transition: all 0.2s ease;
  letter-spacing: 0.025em;
  font-size: 1rem;
  border-color: #d1d9e6;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  text-align: center;
  display: block;
  width: 100px;
  border: 0.0625rem solid transparent;
  padding: 5px 10px;
  transition: 0.4s all;
  text-decoration: none;
  color: black;
  margin-top: 20px;
  line-height: 1.5;
  border-radius: 0.55rem;
  width: 100%;
  cursor: pointer;
}
button:hover {
  color: #31344b;
  background-color: #e6e7ee;
  border-color: #e6e7ee;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  text-decoration: none;
}
.form {
  width: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 20px;
  border-radius: 20px;
  background: #e6e7ee;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>