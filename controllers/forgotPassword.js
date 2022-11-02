const asyncHandler = require('express-async-handler');
const nodemailer = require("nodemailer");
const generator = require('generate-password');
const mailService = require ("../services/mailservice")

const password = generator.generate({
	length: 10,
	numbers: true
});

const forgetPassword = asyncHandler(async (req, res) => {
    const mailPayload = {
      to: req.body.email,
      subject: "New Password Generated",
      text: `Kindly save the new password ${password} for the future login attempt`,
    };
    const response = await mailService.sendMail(mailPayload);
    if (response) {
      res.send(response);
    }
  });
  
  module.exports = {forgetPassword};