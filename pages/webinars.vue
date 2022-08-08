<template>

 <ul>
    <li v-for="(item , index) in items" :key="index">
    {{ item.title }}
    </li>
 </ul>

</template>

<script>
export default {
  data: () => ({
    items: [],
  }),

  methods: {
    async getitems() {
      let posts = await fetch(
        `http://localhost:4000/support/namespace/list`
      ).then((res) => res.json());
        //   document.write(posts.data.namespaces);
          this.items = (posts.data.namespaces)
          console.log(this.items);
    },
  },
  mounted() {
    this.getitems();
  },
};
</script>

<style></style>

