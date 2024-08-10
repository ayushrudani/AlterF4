import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClickOutside from "../../Constant/ClickOutSide";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const [dropdownOpenInfo, setDropdownOpenInfo] = useState(false);
  const [dropdownOpenCommunity, setDropdownOpenCommunity] = useState(false);

  return (
    <>
      <div className="w-full absolute top-5 left-0 px-10 z-10">
        <div className="flex justify-between items-center w-full bg-white h-20 rounded-[24px] px-8 shadow-lg text-black">
          {/* Logo */}
          <h3 className="text-2xl font-bold font-[NohemiBold]">
            F<span className="text-[#47a11d]">Assistance</span>
          </h3>
          {/* Mid */}
          {/* Nav Links */}
          <div
            className={`space-x-8 hidden ${
              isHamburgerOpen || isLoggedIn ? "lg:flex" : " lg:hidden"
            }`}
          >
            <div>
              <a href="/" className="text-black">
                Diseases Detection
              </a>
            </div>
            <ClickOutside
              onClick={() => setDropdownOpenInfo(false)}
              className="relative"
            >
              <Link
                onClick={() => setDropdownOpenInfo(!dropdownOpenInfo)}
                className="flex items-center gap-4"
              >
                <span className="hidden text-right lg:block">
                  <span className="text-black">Crop Information</span>
                </span>
                <svg
                  className="hidden fill-current sm:block"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                    fill=""
                  />
                </svg>
              </Link>

              {/* <!-- Dropdown Start --> */}
              {dropdownOpenInfo && (
                <div
                  className={`absolute left-2 mt-4 flex w-[200px] flex-col border border-stroke bg-white shadow-default
                    rounded-md px-3 py-2`}
                >
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/crop/information"
                      className="flex items-center gap-3.5 text-sm  duration-300 ease-in-out hover:text-primary lg:text-base"
                    >
                      Information
                    </Link>
                    <Link
                      to="/diseases"
                      className="flex items-center gap-3.5 text-sm  duration-300 ease-in-out hover:text-primary lg:text-base"
                    >
                      Crop Recommendation
                    </Link>
                  </div>
                </div>
              )}
              {/* <!-- Dropdown End --> */}
            </ClickOutside>
            <ClickOutside
              onClick={() => setDropdownOpenCommunity(false)}
              className="relative"
            >
              <Link
                onClick={() => setDropdownOpenCommunity(!dropdownOpenCommunity)}
                className="flex items-center gap-4"
              >
                <span className="hidden text-right lg:block">
                  <span className="text-black">Community</span>
                </span>
                <svg
                  className="hidden fill-current sm:block"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                    fill=""
                  />
                </svg>
              </Link>

              {/* <!-- Dropdown Start --> */}
              {dropdownOpenCommunity && (
                <div
                  className={`absolute left-2 mt-4 flex w-[200px] flex-col border border-stroke bg-white shadow-default
                    rounded-md px-3 py-2`}
                >
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/community/QuestionAnswer/post"
                      className="flex items-center gap-3.5 text-sm  duration-300 ease-in-out hover:text-primary lg:text-base"
                    >
                      Question & Answer
                    </Link>
                    <Link
                      to="/diseases"
                      className="flex items-center gap-3.5 text-sm  duration-300 ease-in-out hover:text-primary lg:text-base"
                    >
                      Group Chat
                    </Link>
                  </div>
                </div>
              )}
              {/* <!-- Dropdown End --> */}
            </ClickOutside>
            <a href="/register" className="text-black">
              Yojana
            </a>
          </div>

          {/* Title */}
          <h4
            className={`text-xl font-bold hidden ${
              isLoggedIn ? "hidden" : " lg:block"
            }
                `}
          >
            Next-Generation Farmer Assistance Platform
          </h4>

          {/* End */}
          {/* Profile */}
          <div
            className={`items-center space-x-4 hidden bg-red-400 ${
              isLoggedIn ? "lg:flex" : "hidden"
            }`}
            onClick={() => {
              navigate("/login");
            }}
          >
            <img
              src="https://randomuser.me/api/portraits"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Buttons */}
          <div
            className={`space-x-4 hidden ${
              isLoggedIn ? "lg:hidden" : "lg:flex"
            }`}
          >
            <button className="border border-slate-400 px-[18px] py-[8px] rounded-[12px]">
              Register
            </button>
            <button
              className="bg-[#47a11d] px-[18px] py-[8px] rounded-[12px] text-white cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
          {/* Hamburger Menu */}
          <div className="block lg:hidden">
            <button
              className="text-black"
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
              {isHamburgerOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
