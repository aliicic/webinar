const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === "production";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { AllRoutes } = require("./router/router");
const { initialSocket } = require("./utils/initSocket");
const { socketHandler } = require("./socket.io");

 const http = require("http");
const app = require("express")();
const server = http.createServer(app);
const io = require("socket.io")(server);


const { Nuxt, Builder } = require("nuxt");
// We instantiate Nuxt with the options
const config = require("../nuxt.config.js");
config.dev = !isProd;

const nuxt = new Nuxt(config);
// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}
app.use(nuxt.render);


io.on('connection', () => {
  console.log('user comming')
})


server.listen(port, "0.0.0.0");
console.log("Server listening on localhost:" + port);
