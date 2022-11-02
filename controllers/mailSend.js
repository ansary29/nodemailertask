const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const mailService = require("../services/mailservice");

const mailSend = asyncHandler(async (req, res) => {
  const mailPayload = {
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
  };
  const response = await mailService.sendMail(mailPayload);
  if (response) {
    res.send(response);
  }
});

module.exports = { mailSend };
