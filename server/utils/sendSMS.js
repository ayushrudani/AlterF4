require("dotenv").config({});

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);
const sendSMS = async (phone, message) => {
    console.log(process.env.TWILIO_MOBILE_NUMBER);
   try{
   await client.messages
    .create({
        body: message,
        from: process.env.TWILIO_MOBILE_NUMBER,
        to: `+91${phone}`
    })
    .then(message => console.log(message.sid))
    .done();
    return true;
    }catch(error){
        return false;
    }
}

module.exports = sendSMS;