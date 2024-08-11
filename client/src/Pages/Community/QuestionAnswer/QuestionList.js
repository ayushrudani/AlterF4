import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Loader from "../../../Constant/Loader";
import { GetPosts } from "../../../Constant/GetPosts";
let page = 1;
const QuestionList = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  const [dataOver, setDataOver] = useState(false);
  useEffect(() => {
    if (inView) {
      fetchData();
    }
  }, [inView]);
  const fetchData = async () => {
    let res = await GetPosts(page);

    if (res.length === 0) {
      setDataOver(true);
      return;
    }
    console.log(res);
    setData([...data, ...res.data]);
    page++;
  };
  return (
    <>
      <div className="flex flex-col gap-y-[20px] w-full h-full">
        {/* Title */}
        <div className="flex flex-row justify-between w-full h-full  my-10">
          <h1 className="text-3xl font-bold text-gray-900">Query List</h1>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md"
            onClick={() => {
              navigate("/community/QuestionAnswer/post");
            }}
          >
            Add Query
          </button>
        </div>

        {/* Question List */}
        {/* Content */}
        <div className="flex flex-col gap-y-[15px]">
          <div className="w-full flex flex-col gap-y-[15px]">
            {data.map((item) => (
              <div
                className="w-full h-[130px] bg-white border border-gray-200 rounded-lg shadow flex flex-row gap-x-[20px] cursor-pointer"
                onClick={() => {
                  navigate(`/community/post/${item._id}`);
                }}
              >
                <div className="w-[170px] h-full">
                  <img
                    className="object-cover w-full rounded-l-lg h-full"
                    src={item.imageURL || "/noImageFound.webp"}
                    alt=""
                  />
                </div>
                <div className="flex flex-col p-4 ">
                  {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"></h5> */}
                  <p
                    className="mb-3 font-normal text-gray-700 flex"
                    dangerouslySetInnerHTML={{
                      __html: item.problem.substring(0, 100) + "...",
                    }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center">
            {dataOver ? (
              <p className="text-center text-2xl font-bold mt-10">
                No more data to load
              </p>
            ) : (
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#47a11d]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
          </div>
        </div>
        <div ref={ref}></div>
      </div>
    </>
  );
};

export default QuestionList;
