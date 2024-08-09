const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  // password
  password: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  acre: {
    type: Number,
    required: true,
  },
  water_level: {
    type: String,
    required: true,
    enum: ["Low", "Medium", "High"],
  },
});
module.exports =  mongoose.model("Users", userSchema);