const {
  ApiSucceessResponse,
  ApiErrorResponse,
} = require("../utils/ApiResponse.js");

//models

const Crop = require("../models/cropSchema.js");

const getAllCorp = async (req, res) => {
  try {
    let { pageNumber } = req.params;

    if (!pageNumber) {
      pageNumber = 1;
    }

    const pageSize = 10;

    const crops = await Crop.find()
      .skip(pageNumber * pageSize)
      .limit(pageSize);

    //count the total number of crops
    const count = await Crop.countDocuments();

    const data = {
      crop: crops,
      count: count,
    };

    return res.json(
      new ApiSucceessResponse(200, data, "All crops fetched successfully")
    );
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};

const getCorpById = async (req, res) => {
  try {
    const { cropId } = req.params;
    if (!cropId) {
      return res.json(new ApiErrorResponse(400, "Crop id is required"));
    }
    const crop = await Crop.findOne({
      cropId: cropId,
    });

    console.log(crop);

    if (!crop) {
      return res.json(new ApiErrorResponse(400, "Crop not found"));
    }

    return res.json(
      new ApiSucceessResponse(200, crop, "Crop fetched successfully")
    );
  } catch (error) {
    return res.json(new ApiErrorResponse(500, error.message));
  }
};

module.exports = {
  getAllCorp,
  getCorpById,
};
