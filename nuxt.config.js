import path from 'path'
import fs from 'fs'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

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
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    ["vue-scrollto/nuxt", { duration: 300 }],
    ["nuxt-socket-io"],
  ],

  io: {
    sockets: [
      // Required
      {
        // At least one entry is required
        name: "home",
        url: "http://localhost:3001/webinars",
        default: true,
        // vuex: {
        //   /* see section below */
        // },
        // namespaces:"webinars",
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true,
  },
  // proxy: {
  //   "/api": { target: "http://127.0.0.1:4000" },
  // },
  server: {
    host: "0.0.0.0",
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(__dirname + '/api/path/', 'mykey.key')),
      cert: fs.readFileSync(path.resolve(__dirname+ '/api/path/', 'mycert.pem'))
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
  },
  serverMiddleware: {
    "/api": "~/api",
  },
};
