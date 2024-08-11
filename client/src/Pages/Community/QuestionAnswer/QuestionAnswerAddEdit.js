import React, { useState } from "react";
import ReactQuill from "react-quill";
import ImageUploader from "../../../Constant/ImageUploader";
import { imgToUrl } from "../../../Constant/ImaageUrlgenrator";
import { usePost } from "../../../Context/PostContext";
const QuestionAnswerAddEdit = () => {
  const [value, setValue] = useState("");
  const [ImaegUrl, setImaegUrl] = useState("");

  const handleImageToUrl = async (e) => {
    let ImaegUrl = await imgToUrl(e);
    setImaegUrl(ImaegUrl);
  };
  const { createPost, postLoading } = usePost();
  return (
    <>
      <div className="flex flex-col gap-y-[20px] w-full h-full">
        {/* Title */}
        <div className="flex flex-row justify-between w-full h-full">
          <h1 className="text-3xl font-bold text-gray-900">
            Add your Question
          </h1>
        </div>
        {/* Form */}
        <form
          className="flex flex-col gap-y-4 h-full"
          onSubmit={(e) => {
            e.preventDefault();
            createPost({
              problem: value,
              userId: sessionStorage.getItem("token"),
              imageURL: ImaegUrl,
            });
          }}
        >
          {/* Question */}
          <div className="flex flex-col gap-y-2">
            {/* Image upload*/}
            <label htmlFor="image" className="text-lg font-medium">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="mb-4"
              onChange={(e) => {
                e.preventDefault();
                handleImageToUrl(e);
              }}
            />
          </div>
          {/* Answer */}
          <div className="flex flex-col gap-y-2 h-full">
            <label htmlFor="question" className="text-lg font-medium">
              Question
            </label>
            <ReactQuill
              theme="snow"
              value={value}
              style={{ height: "300px" }}
              onChange={setValue}
            />
          </div>
          {/* Button */}
          <button
            className="bg-blue-400 mt-10 text-white rounded-lg p-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default QuestionAnswerAddEdit;
