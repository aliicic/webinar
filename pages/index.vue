<template>
  <div>
    {{ username }}
    <input type="text" name="" id="" v-model="loginInfo" />
    <button @click="login">send</button>
    <ul>
      <li v-for="(item, index) in items" :key="index" class="fa-is">
        <nuxt-link :to="{ name: 'webinar-room', params: { room: item.name } }">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data: () => ({
    loginInfo: "",
    items: [],
    username: "login first",
  }),

  methods: {
    login() {
      fetch("http://localhost:4000/support/login", {
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
          localStorage.setItem("name", json.username);
          this.username = json.username;
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
li {
  list-style: none;
  background: greenyellow;
  padding: 10px;
  display: inline-block;
  margin: 20px;
}
</style>
