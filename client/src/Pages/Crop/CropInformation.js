import React, { useEffect } from "react";
import { useCrop } from "../../Context/CropContext";
import { useNavigate } from "react-router-dom";

const CropInformation = () => {
  const {
    cropLoading,
    getInformation,
    information,
    currentPage,
    setCurrentPage,
  } = useCrop();
  useEffect(() => {
    getInformation();
  }, [currentPage]);

  const navigate = useNavigate();
  return (
    <>
      {cropLoading ? (
        <div
          role="status"
          className=" fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center"
        >
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
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="flex flex-col gap-y-[30px] h-full">
          {/* Title */}
          <h5 className="text-xl font-bold">Crop Information</h5>
          {/* Fillters */}
          <div className="flex space-x-4">
            <button className="border border-slate-400 px-[18px] py-[8px] rounded-[12px]">
              Crop
            </button>
            <button className="border border-slate-400 px-[18px] py-[8px] rounded-[12px]">
              Crop
            </button>
            <button className="border border-slate-400 px-[18px] py-[8px] rounded-[12px]">
              Crop
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-y-[15px]">
            <div className="flex flex-row w-full justify-center gap-x-[32px]">
              <div className="w-1/2 flex flex-col gap-y-[15px]">
                {information.map(
                  (info, index) =>
                    index < 5 && (
                      <div
                        className="w-full h-[130px] bg-white border border-gray-200 rounded-lg shadow flex flex-row gap-x-[20px] cursor-pointer"
                        onClick={() => {
                          navigate(`/crop/information/detail/${info._id}`);
                        }}
                      >
                        <div className="w-[170px] h-full">
                          <img
                            className="object-cover w-full rounded-l-lg h-full"
                            src={info.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col p-4 ">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {info.Common_Name}
                          </h5>
                          <p className="mb-3 font-normal text-gray-700 ">
                            {info.Geographic_Distribution}
                          </p>
                        </div>
                      </div>
                    )
                )}
              </div>
              <div className="w-1/2 flex flex-col gap-y-[15px]">
                {information.map(
                  (info, index) =>
                    index > 4 && (
                      <div
                        className="w-full h-[130px] bg-white border border-gray-200 rounded-lg shadow flex flex-row gap-x-[20px]"
                        onClick={() => {
                          navigate(`/crop/information/detail/${info._id}`);
                        }}
                      >
                        <div className="w-[170px] h-full">
                          <img
                            className="object-cover w-full rounded-l-lg h-full"
                            src={info.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col p-4 ">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {info.Common_Name}
                          </h5>
                          <p className="mb-3 font-normal text-gray-700 ">
                            {info.Geographic_Distribution}
                          </p>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-between">
            <span className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ">
              {currentPage + 1} of 10
            </span>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === 0}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="px-8"></div>
              <button
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
                disabled={currentPage === 15}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default CropInformation;
