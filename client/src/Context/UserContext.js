import React, { createContext, useContext, useState } from "react";
import { BashURL } from "../Constant/BashURL";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const navigate = useNavigate();

  const SendOTP = async (phonenumber) => {
    // const response = await fetch(`${BashURL}/user/sendOTP`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ phone: phonenumber }),
    // });
    // const data = await response.json();
    // console.log(data);
    // sessionStorage.setItem("OTP", data.data.otp);
  };

  const RegisterUser = async (user) => {
    const response = await fetch(`${BashURL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    sessionStorage.setItem("token", data.token);
  };

  const LoginUser = async (user) => {
    const response = await fetch(`${BashURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    sessionStorage.setItem("token", data.token);
    navigate("/");
  };

  const getUserByToken = async () => {
    const response = await fetch(`${BashURL}/user/getUserByToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: sessionStorage.getItem("token") }),
    });
    const data = await response.json();
    console.log(data);
    setUser(data.data);
    setUserLoading(false);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userLoading,
        setUserLoading,
        SendOTP,
        LoginUser,
        RegisterUser,
        getUserByToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
