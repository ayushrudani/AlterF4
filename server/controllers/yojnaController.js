const {
  ApiSucceessResponse,
  ApiErrorResponse,
} = require("../utils/ApiResponse");

const Yojnas = require("../models/YojnaSchema");

const getAllYojnas = async (req, res) => {
  try {
    const yojna = await Yojnas.find();

    return res.json(
      new ApiSucceessResponse(200, yojna, "successfully fetch all Yojnas")
    );
  } catch (error) {
    res.json(new ApiErrorResponse(500, error.message));
  }
};
module.exports = { getAllYojnas };
