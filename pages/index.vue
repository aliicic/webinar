<template>
  <ul>
    <li v-for="(item, index) in items" :key="index" class="fa-is">
     <nuxt-link :to="{ name: 'webinar-room', params: { room: item.name }}">
       {{ item.name }}
     </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  layout: "blank",
  data: () => ({
    items: [],
  }),

  methods: {
    // async getitems() {
    //   let posts = await fetch(
    //     `http://localhost:4000/support/room/list`
    //   ).then((res) => res.json());
    //   //   document.write(posts.data.namespaces);
    //   this.items = posts;
    //    console.log(this.items);
    // },

     async getRooms() {
     await this.socket.on('roomList', (data) => {
          this.items = data;
    })
    },
  },
  mounted() {
    //? get namespace item from the db
   // this.getitems();
    //? socket runner
    this.socket = this.$nuxtSocket({
      // nuxt-socket-io opts:
      // name: "", // Use socket "home"
      // channel: "", // connect to '/index'

      // // socket.io-client opts:
      // reconnection: false,
    });
    //? get ping server
    this.getRooms()
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
