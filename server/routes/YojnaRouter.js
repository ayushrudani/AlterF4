const express = require("express");
const yojnaController = require("../controllers/yojnaController.js");

const router = express.Router();

router.get("/getAllYojnas", yojnaController.getAllYojnas);

module.exports = router;
