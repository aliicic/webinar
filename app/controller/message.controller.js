const Controller = require("./../controller");
const { ConversationModel } = require("../models/conversation");
class MessageController extends Controller { }
const { StatusCodes: HttpStatus } = require("http-status-code");

module.exports = {
  MessageController: new MessageController(),
};
