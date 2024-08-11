const {
  ApiErrorResponse,
  ApiSucceessResponse,
} = require("../utils/ApiResponse.js");

//models
const Post = require("../models/PostSchema.js");
const Comment = require("../models/commentSchema.js");
const Like = require("../models/LikeSchema.js");
const User = require("../models/UserSchema.js");

const createPost = async (req, res) => {
  try {
    const { problem, userId, imageURL } = req.body;
    //verify data
    if (problem == null || userId == null) {
      return res.json(new ApiErrorResponse(400, "All fields are required"));
    }

    //create post
    const newPost = new Post({
      problem: problem,
      userId: userId,
      imageURL: imageURL,
    });
    await newPost.save();
    return res.json(
      new ApiSucceessResponse(200, null, "Post created successfully")
    );
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};
const getAllPost = async (req, res) => {
  try {
    const pageNo = parseInt(req.query.pageNo) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const data = await Post.find()
      .skip(pageSize * (pageNo - 1))
      .limit(pageSize);

    if (data == null) {
      return res.json(
        new ApiErrorResponse(400, "No post found", (success = false))
      );
    } else {
      return res.json(
        new ApiSucceessResponse(
          200,
          data,
          "Post found successfully",
          (success = true)
        )
      );
    }
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    //post id verification
    if (postId == null || postId.trim().length == 0) {
      return res.json(new ApiErrorResponse(400, "Post id is required"));
    }

    //get post
    let post = await Post.findOne({
      _id: postId,
    });
    if (post == null) {
      return res.json(new ApiErrorResponse(400, "Invalid post id"));
    } else {
      return res.json(
        new ApiSucceessResponse(
          200,
          post,
          "Post found successfully",
          (success = true)
        )
      );
    }
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};

//   const editPost = async (req, res) => {
//     try{
//         const { postId } = req.prams;

//         //post id verification
//         if(postId == null || postId.trim().length == 0){
//             return res.json(new  ApiErrorResponse(400 , "Post id is required"));
//         }
//         //edit post
//         let post = await Post.findOne({_id: postId});
//         if(post == null){
//             return res.json(new  ApiErrorResponse(400 , "Invalid post id"));
//         }

//         //edit post

//         //verify data
//         if(problem == null || userId == null || imageURL == null){
//             return res.json(new  ApiErrorResponse(400 , "All fields are required"));
//         }

//         //create post
//         const newPost = new Post({problem: problem, userId: userId, imageURL: imageURL});
//         await newPost.save();
//         return res.json(new ApiSucceessResponse(200 , null ,"Post created successfully"  ))
//     }catch(error){
//         return res.json(new  ApiErrorResponse(500 , error.message));
//     }
//   };
const deletePost = async (req, res) => {
  try {
    const { problem, userId, imageURL } = req.body;

    console.log(req.body);

    //verify data
    if (problem == null || userId == null || imageURL == null) {
      return res.json(new ApiErrorResponse(400, "All fields are required"));
    }

    //create post
    const newPost = new Post({
      problem: problem,
      userId: userId,
      imageURL: imageURL,
    });
    await newPost.save();
    return res.json(
      new ApiSucceessResponse(200, null, "Post created successfully")
    );
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};

const addComment = async (req, res) => {
  try {
    const { userId, postId, commentMsg } = req.body;

    console.log(req.body);

    //verify data
    if (
      userId == null ||
      userId.trim().length == 0 ||
      postId == null ||
      postId.trim().length == 0 ||
      commentMsg == null ||
      commentMsg.trim().length == 0
    ) {
      return res.json(new ApiErrorResponse(400, "All fields are required"));
    }

    //create Commit
    const addComment = new Comment({
      userId: userId,
      postId: postId,
      commentMsg: commentMsg,
    });
    await addComment.save();

    //add commentid to post
    await Post.updateOne(
      { _id: postId },
      { $addToSet: { comment: addComment._id } }
    );

    return res.json(
      new ApiSucceessResponse(200, null, "Add comment successfully")
    );
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};

const addLikeInComment = async (req, res) => {
  try {
    const { userId, commentId } = req.body;
    //verify data
    if (
      userId == null ||
      userId.trim().length == 0 ||
      commentId == null ||
      commentId.trim().length == 0
    ) {
      return res.json(new ApiErrorResponse(400, "All fields are required"));
    }

    //verify comment id
    const comment = await Comment.findOne({ _id: commentId });
    if (comment == null) {
      return res.json(new ApiErrorResponse(400, "Invalid comment id"));
    }

    //verify userId
    const user = await User.findOne({ userId: userId });
    if (user == null) {
      return res.json(new ApiErrorResponse(400, "Invalid user id"));
    }

    //verify like
    // const like = await Like.findOne({userId: userId , commentId: commentId});
    // if(like != null){
    //     return res.json(new  ApiErrorResponse(400 , "You already like this comment"));
    // }
    //create Like
    const addLike = new Like({ userId: userId, commentId: commentId });
    await addLike.save();

    //add Like id to comment
    await Comment.updateOne(
      { _id: commentId },
      { $addToSet: { like: addLike._id } }
    );

    return res.json(
      new ApiSucceessResponse(200, null, "Add Like in comment successfully")
    );
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};

const getAllComments = async (req, res) => {
  try {
    const { postId } = req.params;

    let comments = await Comment.find({ postId: postId });

    // sort by count of like highest to lowest
    comments = comments.sort((a, b) => b.like.length - a.like.length);
    return res.json(new ApiSucceessResponse(200, comments, "Comments found"));
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};

module.exports = {
  createPost,
  addComment,
  addLikeInComment,
  getAllPost,
  getPostById,
  getAllComments,
};
