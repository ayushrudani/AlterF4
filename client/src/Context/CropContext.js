import React, { createContext, useContext, useState } from "react";
import { BashURL } from "../Constant/BashURL";
import { useNavigate } from "react-router-dom";

const CropContext = createContext();

export function CropProvider({ children }) {
  const [information, setInformation] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [cropDetail, setCropDetail] = useState(null);
  const [cropLoading, setCropLoading] = useState(true);
  const [cropDetailLoading, setCropDetailLoading] = useState(true);
  const navigate = useNavigate();

  const getInformation = async () => {
    const response = await fetch(`${BashURL}/crop/getAllCorp/` + currentPage, {
      method: "GET",
    });
    const data = await response.json();
    setInformation(data.data.crop);
    setCropLoading(false);
  };

  const getDetail = async (cropId) => {
    setCropDetailLoading(true);
    const response = await fetch(`${BashURL}/crop/getCropById/` + cropId, {
      method: "GET",
    });
    const data = await response.json();
    setCropDetail(data.data);
    setCropDetailLoading(false);
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
        cropDetailLoading,
      }}
    >
      {children}
    </CropContext.Provider>
  );
}

export function useCrop() {
  return useContext(CropContext);
}
