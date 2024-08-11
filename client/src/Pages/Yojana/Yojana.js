import React, { useState, useEffect } from "react";
import axios from "axios";

import { BashURL } from "../../Constant/BashURL";

export default function Yojnas() {
  const [yojnas, setYojnas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getYojnas();
  }, []);

  //get all yojna
  const getYojnas = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`${BashURL}/yojnas/getAllYojnas`);
      setYojnas(res.data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Yojanas
      </h1>

      {yojnas != null &&
        yojnas.map((y, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <p className="text-xl font-semibold text-gray-700">{`${y.Yojna} (${y.ShortForm})`}</p>
            <a
              href={y.Link}
              target="_blank"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Learn More
            </a>
          </div>
        ))}
    </div>
  );
}
