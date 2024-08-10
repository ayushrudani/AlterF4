import React, { useState } from "react";
import "../../Styles/Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import OTP from "../../components/OTP/Otp";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const viewPassword = () => {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordInput.focus();
      setPasswordShown(true);
    } else {
      passwordInput.type = "password";
      passwordInput.focus();

      setPasswordShown(false);
    }
  };
  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p className="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
      </div>
      <div className="flex w-full xl:w-1/2 justify-center py-10 items-center bg-white">
         <OTP/>
      </div>
    </div>
  );
};

export default Register;
