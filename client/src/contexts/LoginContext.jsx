// LoginContext.jsx
import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState(null); // Initialize token as null

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        userData
      );
      console.log(response.data);
      setToken(response.data.token);
      toast.success("Logged in successfully");
    } catch (error) {
      console.log("error encountered", error.response.data);
      toast.error("Invalid Credentials");
    }
  };

  return (
    <LoginContext.Provider value={{ userData, setUserData, token, loginUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
