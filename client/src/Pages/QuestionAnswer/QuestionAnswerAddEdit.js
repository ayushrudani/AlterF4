import React, { useState } from "react";
import ReactQuill from "react-quill";
import ImageUploader from "../../Constant/ImageUploader";
import { imgToUrl } from "../../Constant/ImaageUrlgenrator";
const QuestionAnswerAddEdit = () => {
  const [value, setValue] = useState("");
  const [ImaegUrl, setImaegUrl] = useState("");

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
            console.log(value + " submitted");
            console.log(ImaegUrl + " submitted");
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
                let ImaegUrl = imgToUrl(e);
                setImaegUrl(ImaegUrl);
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
            className="bg-blue-400 mt-6 text-white rounded-lg p-2"
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
