import { RegisterForm } from "../components/form/register.component";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { storeData } from "../utils/helper";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const HandlingClick = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/v1/auth/register",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userData = res.data.data.users;
      console.log(userData);
      storeData(userData);
      alert("Data Berhasil Di buat");
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const HandlingChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <RegisterForm
        usernameExist={errorMessage}
        handlerChange={HandlingChange}
        handlerClick={HandlingClick}
      />
    </>
  );
};
