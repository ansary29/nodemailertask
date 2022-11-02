const express = require("express");
const { forgotPw, forgetPassword } = require("../controllers/forgotPassword");
const { mailSend } = require("../controllers/mailSend");
const router = express.Router();
const userController = require("../controllers/userController");

const auth = require("../middleware/authMiddleware")

router.route("/signup").post(userController.registerUser);
router.route("/login").post(userController.loginUser);
router.route("/mailsend").post(auth.protect , mailSend);
router.route("/forgetpassword").post(forgetPassword);

module.exports = router;
