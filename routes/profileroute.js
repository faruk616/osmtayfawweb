const express = require('express');
const router = express.Router();
const profileController = require("../controller/profileController.js");
const authMiddleware = require("../authMiddleware/authMiddleware.js")
const postController = require("../controller/postController.js");

router.route("/").get(authMiddleware.authenticateToken, profileController.getProfile);
router.route("/:id").get(profileController.getProfileid);
router.route("/").post(postController.createPost);


module.exports = router;