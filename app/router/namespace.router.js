const { NamespaceController} = require("../controllers/namespace.controller");
const router = require("express").Router();


router.post("/add", NamespaceController.addNamespace);
router.get("/list", NamespaceController.getListOfNamespaces);

module.exports = {
  SupportSectionRouter: router,
};
