import axios from "axios";

export const imgToUrl = async (e) => {
  const image = e.target.files[0];
  const IMGBB_API_KEY = "29b6a4e1d21936f3ce2918076e89d7b4";
  const formData = new FormData();
  formData.set("image", image);

  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      formData
    );
    console.log(response.data.data.display_url);
    return response.data.data.display_url;
  } catch (error) {
    throw new Error("Failed to fetch image");
  }
};
