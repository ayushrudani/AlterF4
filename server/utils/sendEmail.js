const nodemailer = require("nodemailer");
require("dotenv").config({});



const sendMail  = async(email , url) => {
    try{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Password Reset",
        text: url,
      };

      // Send mail and await the promise
      let info = await transporter.sendMail(mailOptions);
     
    }catch(error){
      
    }
}


module.exports = sendMail;