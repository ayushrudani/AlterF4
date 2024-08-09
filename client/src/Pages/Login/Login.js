import React, { useState } from "react";
import "../../Styles/Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
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
        <form className="bg-white w-[50%]">
          <div className=" flex items-center flex-col">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
          </div>
          <div className="input-field relative mb-4">
            <input
              className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
              type="text"
              placeholder="Enter Name"
            />
            <label
              className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none
              transition-all duration-300 
            "
            >
              Enter Name
            </label>
          </div>
          <div className="input-field relative mb-4">
            <input
              className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
              type="text"
              placeholder="Enter Username"
            />
            <label
              className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none
              transition-all duration-300 
            "
            >
              Enter Username
            </label>
          </div>

          <div className="input-field relative mb-4">
            <input
              className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
              type="text"
              placeholder="Enter Phone"
            />
            <label
              className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none
              transition-all duration-300 
            "
            >
              Enter Phone
            </label>
          </div>
          <div className="input-field relative mb-4">
            <input
              className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
              type="password"
              id="password"
              placeholder="Enter Password"
            />
            {/* Eye Icon */}
            {passwordShown ? (
              <FaEyeSlash
                className="absolute top-[50%] translate-y-[-50%] right-[15px]"
                style={{
                  transform: "0 -50%",
                }}
                onClick={viewPassword}
              />
            ) : (
              <FaEye
                className="absolute top-[50%] translate-y-[-50%] right-[15px] "
                style={{
                  transform: "0 -50%",
                }}
                onClick={viewPassword}
              />
            )}

            <label
              className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none
              transition-all duration-300 
            "
              id="passwordlbl"
            >
              Enter Password
            </label>
          </div>

          <button
            type="submit"
            className="block w-full bg-[#47a11d] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
