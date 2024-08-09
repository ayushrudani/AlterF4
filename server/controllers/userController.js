const User =  require("../models/UserSchema.js");
const bcrypt = require( "bcrypt");
const jwt = require("jsonwebtoken");

const {ApiErrorResponse , ApiSucceessResponse} = require("../utils/ApiResponse");
// const asyncHandler = require("../utils/asyncHandler");
const sendMail = require("../utils/sendEmail.js");
const sendSMS = require("../utils/sendSMS.js");

//server BASE_URL
const  {BASE_URL} = require("../utils/constent.js");

// login function
const login = async (req, res) => {
        const { phone ,email, password } = req.body;

        //verify user
        let user = null;
        if(phone != null){
          user = await User.findOne({ phone: phone});
        }else{
          user = await User.findOne({ email: email});
        }
        if (!user) {
          return res.json(new  ApiErrorResponse(404, `${email != null ? "Invalid email" : "Invalid phone number"}`));
        }

        //verify password
       let isValidPassword = await bcrypt.compare(password, user.password);
       if (!isValidPassword) {
       return res.json(new  ApiErrorResponse(500, "Invalid password"));
      }

      //token generation
     let  token = jwt.sign({_id: user._id}, process.env.JWT_SECRET_KEY);
    //  let  token = jwt.sign({email: existingAdmin.email }, process.env.JWT_SECRET_KEY,{ expiresIn: "1h" });

     //password remove
     user.password = undefined;
     user.token = token;

     let data = {user , token}
       res.json(new ApiSucceessResponse(200, data, "Login successful" , token));
  };

//Regeter function
const register = async (req, res) => {
       try{
        let {name , password , email , phone , state , city , acre,water_level} = req.body;  

        //validation
        if (!name  || !phone ||!state || !city || !acre || !water_level  || !password) {
           return res.json(new  ApiErrorResponse(400 , "All fields are required"));
        }

        //check user already exist
        let user = null;
        if(email != null){
          user = await User.findOne({ email: email});
        }else{
          user = await User.findOne({ phone: phone});
        }
        if (user) {
            return res.json(new  ApiErrorResponse(404 , "User already exit")); 
        }

        //hash password
        let hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = new User({name: name,email: email,password: hashedPassword , phone: phone, state: state, city: city, acre: acre, water_level: water_level});

        //save user in database
        await newUser.save();

        return res.json(new ApiSucceessResponse(200 , null ,"User Register successfully"  ))
       }catch(error){
        return res.json(new  ApiErrorResponse(500 , error.message)); 
       }
    };

const sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;
     
    //generate otp
    const otp = Math.floor(100000 + Math.random() * 900000);

    //send otp
  let result =   sendSMS(phone, `Your OTP is ${otp}`);

  console.log(result);

   if(result){
    return res.json(new ApiSucceessResponse(200 , {otp : otp} ,"OTP sent successfully"  ))
   }else{
    return res.json(new  ApiErrorResponse(500 , "Something went wrong"));
   }


  }catch (error) {
    return res.json(new  ApiErrorResponse(500 , error.message));
  }
}

// //forget password function
// const forgetPassword = asyncHandler(async(req , res)=>{
//    const {email} = req.body;

//    //verify user
//    let user = await User.findOne({ email: email});
//    if (!user) {
//     return res.json(new  ApiErrorResponse(404, "Invalid email"));
//    }
//   //create secret key
//    const secretKey =process.env.JWT_SECRET_KEY + user.password;
   
//    //genreate token
//    const token = jwt.sign({id: user._id }, secretKey);

//    try{
//     await sendMail(user.email , `${BASE_URL}/api/user/resetPassword/${user._id}/${token}`);
//    }catch(error){
    
//    }
     
//    res.json(new ApiSucceessResponse(200 , null ,"Reset password link sent to your email"  ));
// })

// //reset password function
// const resetPassword =   asyncHandler(async (req, res) => {
//   const { id, token } = req.params;
//   const { password } = req.body;

//   //verfy user
//   const user = await User.findOne({ _id: id });
//   if (!user) {
//     return res.json(new ApiErrorResponse(404, "User not found"));
//   }

//   const secret = process.env.JWT_SECRET_KEY + user.password;
//   try {
//     const verify = jwt.verify(token, secret);
//     const encryptedPassword = await bcrypt.hash(password, 10);
//     await User.updateOne(
//       {
//         _id: id,
//       },
//       {
//         $set: {
//           password: encryptedPassword,
//         },
//       }
//     );

//     return res.json(new ApiSucceessResponse(200 , null ,"password reset successfully"  ))

//   } catch (error) {
//     return res.json(new  ApiErrorResponse(500 , "Fail to password reset")); 
//   }
// });

// const verifyResetPasswordToken = asyncHandler(async (req, res) => {
//   const { id, token } = req.params;
//   const user = await User.findOne({ _id: id });
//   if (!user) {
//     return res.json({ status: "User Not Exists!!" });
//   }
//   const secret = process.env.JWT_SECRET_KEY + user.password;
//   try {
//     const verify = jwt.verify(token, secret);
//     res.render("index", { email: verify.email, status: "Verified" });
//   } catch (error) {
//     res.send("Not Verified");
//   }
// });

// module.exports =  { login , register  , forgetPassword , resetPassword,verifyResetPasswordToken};   
module.exports =  { login , register , sendOTP};   