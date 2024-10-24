const express = require('express');
const router = express.Router();
const registerController = require("../controller/registerController.js");

router.get("/" , registerController.getRegister);
router.post("/" , registerController.postRegister);

module.exports = router ;
