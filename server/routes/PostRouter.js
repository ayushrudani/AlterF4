const express = require("express");
const postController = require("../controllers/postController.js");

const router = express.Router();

// router.post("/resetPassword/:id/:token", userController.resetPassword);
router.post("/createPost", postController.createPost);
router.post("/addComment", postController.addComment);
router.post("/addComment", postController.addComment);
router.post("/addLikeInComment", postController.addLikeInComment);
router.post("/getAllPost", postController.getAllPost);
router.post("/getPostById/:id", postController.getPostById);
router.post("/getAllComments/:postId", postController.getAllComments);

module.exports = router;
