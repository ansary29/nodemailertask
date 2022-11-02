const asyncHandler = require('express-async-handler');
const nodemailer = require("nodemailer");


const sendMail = asyncHandler(async (mailPayload) => { 
    console.log(mailPayload , "hi")
 try {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL, // gmail user
          pass: process.env.PASSWORD, // generated gmail password
        },  
      });
    
      let info = await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: mailPayload.to, // list of receivers
        subject:mailPayload.subject, // Subject line
        text: mailPayload.text, // plain text body
      });

      let responseMessage = ""
      if(mailPayload.subject === "New Password Generated"){
        responseMessage = "New password sent"
     }else {
       responseMessage = "Message sent Succesfully"
     }
      if (info.messageId){
        return responseMessage
     }   
 } catch (error) {
    return error;
 }
})

module.exports = {sendMail};
