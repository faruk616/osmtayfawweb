const express = require('express');
const router = express.Router();
const registerController = require("../controller/registerController.js");

router.route("/").get(registerController.getRegister) ;
router.post("/" ).post(registerController.postRegister);

module.exports = router ;
