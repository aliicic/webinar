<template>
  <nuxt></nuxt>
</template>

<script>
export default {
 head() {
    return {
      link: [
      
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        },
        { rel: "stylesheet", href: "/css/stl.css" },
        {
          rel: "stylesheet",
          href: "/css/style.css"
        },
     
        // {
        //   rel: "stylesheet",
        //   href: "/t22/style.css"
        // }
      ],
    };
  }
}
</script>

<style>
  body{
    direction: ltr!important ;
  }
</style>
