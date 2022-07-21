import { LoginForm } from "../components/form/auth.form.component";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { storeData, storeToken } from "../utils/helper";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const HandlingClick = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/v1/auth/login",
        {
          username,
          password,
        },
        {
          headers: "application/json",
        }
      );
      if (res) {
        const token = res.data.data.token;
        const data = res.data.data.findUser;
        storeData(data);
        storeToken(token);
        alert("Login Berhasil");
        navigate("/");
      }
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
    <LoginForm
      header={"Log in to your Account"}
      paragraf={" Welcome back, please enter your details."}
      forgot={"Forgot Password?"}
      remeber={"Remember me"}
      href={"/register"}
      word={"Sign Up"}
      account={"Don’t have an account?"}
      auth={"Log In"}
      handlerClick={HandlingClick}
      handlerChange={HandlingChange}
      validatorText={errorMessage}
    />
  );
};
