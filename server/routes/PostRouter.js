const   express = require("express");
const postController =  require("../controllers/postController.js");

const router = express.Router();

// router.post("/resetPassword/:id/:token", userController.resetPassword);
router.post("/createPost", postController.createPost);
router.post("/addComment", postController.addComment);
router.post("/addComment", postController.addComment);
router.post("/addLikeInComment", postController.addLikeInComment);
// router.post("/addLikeInComment", postController.addLikeInComment);
// router.post("/removeLikeInComment", postController.addLikeInComment);
// router.post("/addLikeInComment", postController.addLikeInComment);



module.exports =  router;