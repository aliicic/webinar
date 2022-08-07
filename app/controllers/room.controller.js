const Controller = require("../controller");
const { ConversationModel } = require("../models/conversation");
class RoomController extends Controller {
  async addRoom(req, res, next) {
    try {
      const { name, description, filename, fileUploadPath ,namespace } = req.body;
      await this.findRoomWithName(name);
      const image = path.join(fileUploadPath, filename).replace(/\\/g, "/");
      const room = { name, description, image };
      const conversation = await ConversationModel.updateOne({ endpoint: namespace }, {
        $push : {rooms :room}
      })
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
      const conversation = await ConversationModel.find({}, { rooms: 1 });
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          rooms: conversation.rooms,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async findRoomWithName(name) {
    const conversation = await ConversationModel.findOne({
      "rooms.name": name,
    });
    if (conversation)
      throw createHttpError.BadRequest("این اسم قبلا انتخاب شده ");
  }
}
const { StatusCodes: HttpStatus } = require("http-status-code");
module.exports = {
  RoomController: new RoomController(),
};
