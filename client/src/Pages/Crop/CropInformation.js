import React, { useEffect } from "react";
import { useCrop } from "../../Context/CropContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../Constant/Loader";

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
        <Loader />
      ) : (
        <div className="flex flex-col gap-y-[30px] h-full">
          {/* Title */}
          <h5 className="text-xl font-bold">Crop Information</h5>
          {/* Fillters */}
          <div className="flex space-x-4">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full h-10 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search"
                onChange={(e) => {
                  // search using javascript
                  let search = e.target.value;
                  let searchResult = information.filter((info) =>
                    info.Common_Name.toLowerCase().includes(
                      search.toLowerCase()
                    )
                  );
                  console.log(searchResult);
                }}
              />
            </div>
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
                          navigate(`/crop/information/detail/${info.cropId}`);
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
                          navigate(`/crop/information/detail/${info.cropId}`);
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
