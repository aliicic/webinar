const Controller = require("./../controller");
const { ConversationModel } = require("../models/conversation");
class RoomController extends Controller {

  async addRoom(req, res, next) {
    try {
      const { title, endpoint } = req.body;
      const conversation = await ConversationModel.create({ title, endpoint });
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "فضای مکالمه ایجاد شد ",
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getListOfRooms(req, res, next) {
    try {
      const namespaces = await ConversationModel.find({}, { rooms: 0 });
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          namespaces,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
const { StatusCodes: HttpStatus } = require("http-status-code");
module.exports = {
  RoomController: new RoomController(),
};
