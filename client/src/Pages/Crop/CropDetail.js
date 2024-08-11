import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCrop } from "../../Context/CropContext";
import Loader from "../../Constant/Loader";

const CropDetail = () => {
  const { id } = useParams();
  const { getDetail, cropDetail, cropDetailLoading } = useCrop();

  useEffect(() => {
    getDetail(id);
    // console.log("Hello");
  }, []);
  return (
    <>
      {cropDetailLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-y-[20px] w-full h-full">
          {/* Title */}
          <div className="flex flex-col gap-y-[18px] justify-between w-full">
            <div
              className="flex flex-row gap-x-[50px] bg-white p-4 rounded-[24px] justify-between mt-10"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Image */}
              <div className="w-1/3 h-auto">
                <img
                  src={cropDetail.image}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-y-[15px] w-2/3 rounded-[25px]">
                {/* Table */}
                <div className="flex flex-col gap-y-2 rounded-[25px]">
                  <table className="border border-neutral-200  text-sm font-light text-start rounded-[25px]">
                    <tbody>
                      <tr className="border-b border-neutral-200 ">
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium ">
                          Common Name
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 ">
                          {cropDetail.Common_Name}
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium  ">
                          Family
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {cropDetail.Family}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-200 ">
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium ">
                          Scientific Name
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 ">
                          {cropDetail.Scientific_Name}
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium  ">
                          Nutrients
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {cropDetail.Nutrients}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-200 ">
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium ">
                          Season
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 ">
                          {cropDetail.Season}
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium">
                          Temperature
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {cropDetail.Temperature}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-200 ">
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium ">
                          Fertilization
                        </td>
                        <td
                          colSpan={3}
                          className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 "
                        >
                          {cropDetail.Fertilization}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-200 ">
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium ">
                          Geographic Distribution
                        </td>
                        <td
                          colSpan={3}
                          className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 "
                        >
                          {cropDetail.Geographic_Distribution}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-200 ">
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium ">
                          Growth Conditions
                        </td>
                        <td
                          colSpan={3}
                          className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 "
                        >
                          {cropDetail.Growth_Conditions}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-200 ">
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium ">
                          Habitat
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 ">
                          {cropDetail.Habitat}
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium">
                          Uses
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {cropDetail.Uses}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CropDetail;
