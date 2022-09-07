const createHttpError = require("http-errors");
const { UserModel } = require("../models/users");
 const { SignAccessToken } = require("../utils/functions");
// const Controller = require("../controller");

class SupportController {
  async login(req, res, next) {
    try {
      const { mobile } = req.body;
      const user = await UserModel.findOne({ mobile });
      if (!user) {
        return res.json( {
          error: "نام کاربری صحیح نمیباشد",
        });
      }
      const userloggedin = user.first_name;
      res.json({
        username: userloggedin
      });
    } catch (error) {
      next(error);
    }
  }
  // renderChatRoom(req, res, next) {
  //   try {
  //     return res.render("chat.ejs");
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
module.exports = {
  SupportController: new SupportController(),
};
