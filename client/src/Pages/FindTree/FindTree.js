import React, { useState } from "react";
import axiox from "axios";

import { BashURL, findTreeModelAPI } from "../../Constant/BashURL";
import { imgToUrl } from "../../Constant/ImaageUrlgenrator";

export default function FindTree() {
  const [imagUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const handleFind = async () => {
    setLoading(true);

    console.log(imagUrl);

    if (name.length == 0 && imagUrl.length == 0) {
      alert("Please enter the name of the tree or the image of the tree");
      return;
    }

    if (imagUrl.length != 0) {
      const res = await axiox.post(`${findTreeModelAPI}`, {
        image: imagUrl,
      });

      setName(res.data);
    }

    try {
      let response = await axiox.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDuq-ZCT9oPgUwMSBqYDfp8JBqeTQPExv4`,
        {
          contents: [{ parts: [{ text: name }] }],
        }
      );

      setOutput(response.data.candidates[0].content.parts[0].text);
    } catch (error) {}

    setLoading(false);
  };

  const handleSelectImage = async (e) => {
    setImageLoading(true);
    let url = await imgToUrl(e);
    console.log(url);
    setImageLoading(false);
    setImageUrl(url);
  };

  return (
    <div className="mt-0">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Select Image or Name Any Tree
        </h1>

        <div className="flex flex-col items-center">
          <input
            type="file"
            onChange={(e) => handleSelectImage(e)}
            className="mb-4 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />

          <p className="text-gray-600 my-2">OR</p>

          <input
            type="text"
            placeholder="Enter tree name"
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleFind}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            disabled={imageLoading}
          >
            {loading ? "Finding..." : "Find"}
          </button>
        </div>

        <h1 className="text-lg font-medium text-gray-800 mt-6">
          Name or Keyword: <span className="font-semibold">{name}</span>
        </h1>
        <p className="text-gray-700 mt-2">{output}</p>
      </div>
    </div>

    // <div>
    //   <h1 className='text-center'>Select image Or name any tree</h1>

    //   <input type='file' onChange={(e)=>handleSelectImage(e)} ></input>
    //   <p>OR</p>
    //   <input type='text' placeholder='Enter tree name' onChange={(e)=>setName(e.target.value)}></input>
    //   <button onClick={handleFind}>{loading ? "Finding..." : "Find"}</button>

    //   <h1>Name Or KeyWord : {name}</h1>
    //   <p>{output}</p>
    // </div>
  );
}
