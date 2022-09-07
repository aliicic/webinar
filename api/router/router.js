
const { SupportSectionRouter } = require("./support.router");
const router = require("express").Router();

router.use("/", SupportSectionRouter);

module.exports = {
  AllRoutes: router,
};
