import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCrop } from "../../Context/CropContext";

const CropDetail = () => {
  const { id } = useParams();
  const { getDetail, cropDetail, cropLoading } = useCrop();

  useEffect(() => {
    getDetail(id);
  }, [id]);
  return (
    <>
      {cropLoading ? (
        <p>Loading..</p>
      ) : (
        <div className="flex flex-col gap-y-[20px] w-full h-full">
          {/* Title */}
          <div className="flex flex-row justify-between w-full">
            <h1 className="text-3xl font-bold text-gray-900">Crop Detail</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default CropDetail;
