const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
  userId: {
    type: String,
    unique: true,
    required: true,
  },
});
module.exports = mongoose.model("Users", userSchema);
