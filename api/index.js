const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { AllRoutes } = require("./router/router");

const { initialSocket } = require("./utils/initSocket");
const { socketHandler } = require("./socket.io");


mongoose.connect("mongodb://localhost:27017/storeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const io = initialSocket(3001);
socketHandler(io);

app.use(cookieParser());
app.use(
  cors({
    credential: true,
    origin: ["http://localhost:3000","http://localhost:3001"],
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
