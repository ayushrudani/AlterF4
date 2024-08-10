const mongoose =  require("mongoose");

const commentSchema = new mongoose.Schema({
  commentMsg: {
    type: String,
    required: true,
  },
  postId : {
    type: String,
    required: true,
  },
  like : [
    {
      type: String,
      required: true,
    }
  ]
},{timestamps:true});
module.exports =  mongoose.model("Comments", commentSchema);