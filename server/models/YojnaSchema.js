const mongoose = require("mongoose");

const yojnaSchema = new mongoose.Schema({
  Yojna: {
    type: String,
    required: true,
  },
  ShortForm: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Yojnas", yojnaSchema);
