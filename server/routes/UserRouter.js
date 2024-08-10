const express = require("express");
const userController = require("../controllers/userController.js");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/sendOTP", userController.register);
router.post("/getUserByToken", userController.getUserByToken);

module.exports = router;
