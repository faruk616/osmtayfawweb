const express = require('express');
const router = express.Router();
const loginController = require("../controller/loginController.js")

router.route("/").get(loginController.getLogin);
router.route("/").post(loginController.postLogin);

module.exports = router ;
