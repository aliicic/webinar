// const { SupportController } = require("../controllers/support.controller");
const { SupportController } = require("../controllers/support.controller");
const { ApiNamespaceRouter } = require("./namespace.router");
const { ApiRoomRouter } = require("./room.router");
const router = require("express").Router();


router.use("/namespace", ApiNamespaceRouter);
router.use("/room", ApiRoomRouter);
router.post("/login", SupportController.login);
router.get("/", (req, res, next) => {
  
  res.json({
    data : 'hello its work'
  })

 });

module.exports = {
  SupportSectionRouter: router,
};
