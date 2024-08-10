const mongoose =  require("mongoose");

const cropSchema = new mongoose.Schema({
  cropId : {
    type: String,
  },
    Scientific_Name : {
    type: String,
  },
  Common_Name : {
    type: String,
  },
  Family : {
    type: String,
  },
  Habitat : {
    type: String,
  },
  Nutrients : {
    type: String,
  },
  Air : {
    type: String,
  },
  Temperature : {
    type: String,
  },
  pH_Level_of_Soil : {
    type: String,
  },
  Fertilization : {
    type: String,
  },
  Amount_of_NPK : {
    type: String,
  },
  Season : {
    type: String,
  },
  Growth_Conditions : {
    type: String,
  },
  Uses : {
    type: String,
  },
  Geographic_Distribution : {
    type: String,
  },
  image : {
    type: String,
  },
 
});
module.exports =  mongoose.model("Crops", cropSchema);