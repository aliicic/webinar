export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8",
      },
      {
        hid: "viewport",
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui",
      },
      // {
      //   name: "robots",
      //   content: "index,follow"
      // },
      {
        name: "X-UA-Compatible",
        content: "IE=edge",
      },
      {
        name: "Content-Type",
        content: "text/html; charset=UTF-8",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      // {
      //   rel: "icon",
      //   type: "image/x-icon",
      //   href: "/favicon.png"
      // },
      // // {
      // //   rel: "stylesheet",
      // //   href: "/css/bootstrap.min.css"
      // // },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      // },
      // // {
      // //   rel: "stylesheet",
      // //   href: "/css/slick/slick.css"
      // // },
      // // {
      // //   rel: "stylesheet",
      // //   href: "/css/slick/slick-theme.css"
      // // },
      // // {
      // //   rel: "stylesheet",
      // //   href: "/css/vue-slick-carousel.css"
      // // },
      // { rel: "stylesheet", href: "/css/stl.css" },
      // // { rel: "stylesheet", href: "/css/mml/mml.css" },
      // {
      //   rel: "stylesheet",
      //   href: "/css/style.css"
      // },
      // {
      //   rel: "stylesheet",
      //   href: "/css/responsive.css"
      // }
      // {
      //   rel: "stylesheet",
      //   href: "/css/loading.css"
      // },
      // {
      //   rel: "stylesheet",
      //   href: "/css/animate.min.css"
      // },
      // {
      //   rel: "stylesheet",
      //   href: "/css/swiper.css"
      // }
    ],
    script: [
      // {
      //   src: "/js/jquery.min.js",
      //   defer: true
      //   // body: true
      // },
      // {
      //   src: "/js/bootstrap.min.js",
      //   defer: true,
      //   body: true
      // },
      // {
      //   src: "/js/popper.min.js",
      //   defer: true,
      //   body: true
      // },
      // {
      //   src: "/js/slick/slick.min.js",
      //   defer: true,
      //   body: true
      // },
      // { src: "/js/mml/mml.js", defer: true },
      // {
      //   src: "/js/main.js",
      //   defer: true,
      //   body: true
      // }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    ["vue-scrollto/nuxt", { duration: 300 }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
  },
};
