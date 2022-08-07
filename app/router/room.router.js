const { RoomController } = require("../controllers/room.controller");
const router = require("express").Router();

router.post("/add", RoomController.addRoom);
router.get("/list", RoomController.getListOfRooms);

module.exports = {
  ApiRoomRouter: router,
};
