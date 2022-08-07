const { RoomController } = require("../controller/room.controller");
const router = require("express").Router();

router.post("/add", RoomController.addRoom);
router.get("/list", RoomController.getListOfRooms);

module.exports = {
  WebinarSectionRouter: router,
};
