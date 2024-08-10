import React, { createContext, useContext, useState } from "react";
import { BashURL } from "../Constant/BashURL";
import { useNavigate } from "react-router-dom";

const CropContext = createContext();

export function CropProvider({ children }) {
  const [information, setInformation] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [cropDetail, setCropDetail] = useState(null);

  const [cropLoading, setCropLoading] = useState(true);
  const navigate = useNavigate();

  const getInformation = async () => {
    const response = await fetch(`${BashURL}/crop/getAllCorp/` + currentPage, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setInformation(data.data.crop);
    setCropLoading(false);
  };

  const getDetail = async (cropId) => {
    console.log(cropId);
    setCropLoading(true);
    const response = await fetch(`${BashURL}/crop/getCropById/` + cropId, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setCropDetail(data.data);
    setCropLoading(false);
  };
  return (
    <CropContext.Provider
      value={{
        cropLoading,
        setCropLoading,
        getInformation,
        information,
        currentPage,
        setCurrentPage,
        getDetail,
        cropDetail,
      }}
    >
      {children}
    </CropContext.Provider>
  );
}

export function useCrop() {
  return useContext(CropContext);
}
