const express = require("express");
const fs = require('fs');
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { AllRoutes } = require("./router/router");

const { initialSocket } = require("./utils/initSocket");
const { socketHandler } = require("./socket.io");


// mongoose.connect("mongodb://localhost:27017/storeDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const app = express();

// const io = initialSocket(3001);
// socketHandler(io);

let serverOptions = {
  listenPort: 3001,
  useHttps: true,
  //  httpsCertFile: '/path/',
  //  httpsKeyFile: '/path/',
};

let sslOptions = {};
if (serverOptions.useHttps) {
  sslOptions.key = fs.readFileSync(__dirname + '/path/mykey.key', 'utf8').toString();
  sslOptions.cert = fs.readFileSync(__dirname + '/path/mycert.pem', 'utf8').toString();
}



const http = require("http");
const https = require('https');


let webServer = null;

const server = https.createServer(sslOptions, app);
server.listen('3001', () => {
  console.log("run > http://localhost:" + '3001');
});
const io = initialSocket(server);
socketHandler(io);











app.use(cookieParser());
app.use(
  cors({
    credential: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);
//const users = require("./routes/users");
app.use(express.json());

//app.use("/users", users);

app.use(AllRoutes);


module.exports = app;

// if (require.main === module) {
//   const port = process.env.PORT || 3000;
//   app.listen(port, () => {
//     // eslint-disable-next-line no-console
//     console.log(`API server listening on port ${port}`);
//   });
// }
