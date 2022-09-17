const { ConversationModel } = require("../models/conversation");
const { StatusCodes: HttpStatus } = require("http-status-codes")
const createHttpError = require("http-errors");
class NamespaceController {
  async addNamespace(req, res, next) {
    try {
      const { title, endpoint } = req.body;

      await this.findNamespaceWithEndpoint(endpoint);

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

  async getListOfNamespaces(req, res, next) {
    try {
      const namespaces =  [
            {
              "_id": "632163a47b40396287e09ab9",
              "title": "webinars",
              "endpoint": "webinars",
              "__v": 0
            }
          ]
       
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

  async findNamespaceWithEndpoint(endpoint) {
    console.log(endpoint);
    const conversation = await ConversationModel.findOne({ endpoint });
    if (conversation)
      throw createHttpError.BadRequest("این اسم قبلا انتخاب شده است");
  }
}

module.exports = {
  NamespaceController: new NamespaceController(),
};