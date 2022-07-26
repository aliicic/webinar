<template>
  <nuxt></nuxt>
</template>

<script>
export default {
 head() {
    return {
      link: [
        // {
        //   rel: "icon",
        //   type: "image/x-icon",
        //   href: "/favicon.png"
        // },
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
        //   href: "/css/responsive.css"
        // },
        {
          rel: "stylesheet",
          href: "/t22/style.css"
        }
      ],
      // script: [
      //   {
      //     src: "/js/jquery.min.js",
      //     defer: true
      //     // body: true
      //   },
      //   {
      //     src: "/js/bootstrap.min.js",
      //     defer: true,
      //     body: true
      //   },
      //   {
      //     src: "/js/popper.min.js",
      //     defer: true,
      //     body: true
      //   },
      //   {
      //     src: "/js/slick/slick.min.js",
      //     defer: true,
      //     body: true
      //   },
      //   { src: "/js/mml/mml.js", defer: true },
      //   {
      //     src: "/js/main.js",
      //     defer: true,
      //     body: true
      //   }
      // ]
    };
  }
}
</script>

<style>
</style>
