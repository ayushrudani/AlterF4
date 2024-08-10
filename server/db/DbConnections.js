const  mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
       console.log("MONGODB connection FAILED ", error);
        // process.exit(1)
  }
};

// const connectDB = async () => {
//   try {
//       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
//       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//   } catch (error) {
//       console.log("MONGODB connection FAILED ", error);
//       process.exit(1)
//   }
// }


module.exports = connectDB;