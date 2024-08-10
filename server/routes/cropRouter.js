const  express = require("express");
const cropController =  require("../controllers/corpController.js");

const router = express.Router();

router.get("/getAllCorp/:pageNumber?", cropController.getAllCorp);
router.get("/getCropById/:cropId", cropController.getCorpById);

module.exports =  router;