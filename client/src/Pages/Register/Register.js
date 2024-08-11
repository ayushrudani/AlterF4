import React, { useState } from "react";
import "../../Styles/Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { useUser } from "../../Context/UserContext";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
    state: "",
    city: "",
    acre: "",
    water_level: "",
  });
  const navigate = useNavigate();
  const { RegisterUser } = useUser();
  const [step, setStep] = useState(1);
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
        <form className="bg-white w-[50%] flex flex-col gap-y-[20px]">
          <div className=" flex items-center flex-col">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
          </div>
          {step === 1 && (
            <div className="flex flex-col gap-y-[20px]">
              <div className="input-field relative">
                <input
                  className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                />
                <label
                  className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none
            transition-all duration-300 
          "
                >
                  Enter Name
                </label>
              </div>
              <div className="input-field relative">
                <input
                  className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    })
                  }
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
              <div className="input-field relative">
                <input
                  className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
                  type="password"
                  placeholder="Confirm Password"
                  // onChange={(e) =>
                  //   setUserDetails({
                  //     ...userDetails,
                  //     confirmPassword: e.target.value,
                  //   })
                  // }
                />

                <label
                  className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none
            transition-all duration-300 
          "
                  id="passwordlbl"
                >
                  Confirm Password
                </label>
              </div>
              <button
                onClick={() => {
                  setStep(2);
                }}
                className="block w-full bg-[#47a11d] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Send OTP
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-y-[20px]">
              <div className="input-field relative">
                <input
                  className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
                  type="text"
                  placeholder="State"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      state: e.target.value,
                    })
                  }
                />
                <label
                  className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none
            transition-all duration-300 
          "
                >
                  State
                </label>
              </div>
              <div className="input-field relative">
                <input
                  className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
                  type="text"
                  placeholder="City"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      city: e.target.value,
                    })
                  }
                />
                <label className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none transition-all duration-300">
                  City
                </label>
              </div>
              <div className="input-field relative">
                <input
                  className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
                  type="text"
                  placeholder="Acre"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      acre: e.target.value,
                    })
                  }
                />
                <label className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none transition-all duration-300">
                  Acre
                </label>
              </div>

              <div className="input-field relative">
                <select
                  className="w-full h-[49px] rounded-[16px] text-[15px] px-[15px] border-[2px] border-gray-200 bg-transparent outline-none focus:border-[#47a11d] transition-all duration-300"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      water_level: e.target.value,
                    })
                  }
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <label className="absolute opacity-0 left-[15px] translate-y-[-50%] text-gray-400 pointer-events-none transition-all duration-300">
                  Water Level
                </label>
              </div>

              <button
                onClick={() => {
                  console.log(userDetails);
                  RegisterUser(userDetails);
                  navigate("/login");
                }}
                className="block w-full bg-[#47a11d] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Register
              </button>
            </div>
          )}
          <span className="text-sm ml-2  cursor-pointer">
            Have an account?{" "}
            <Link to={"/login"} className="hover:text-slate-400 text-bold">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
