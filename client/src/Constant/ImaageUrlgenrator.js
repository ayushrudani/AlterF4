import { imageDb } from "./Config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const IMGBB_API_KEY = process.env.IMGBB_API_KEY;

export const imgToUrl = async (e) => {
  try {
    let img = e.target.files[0];
    let imgUrl = "";

    if (img !== null) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      await uploadBytes(imgRef, img).then((value) => {
        console.log(value);
        return getDownloadURL(value.ref).then((url) => {
          console.log(url);
          imgUrl = url;
        });
      });
    }

    return imgUrl;
  } catch (error) {
    return "";
  }
};
