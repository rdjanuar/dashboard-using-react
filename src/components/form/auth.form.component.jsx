import React from "react";
import { Link } from "react-router-dom";

export const LoginForm = ({
  header,
  paragraf,
  account,
  href,
  word,
  auth,
  handlerClick,
  handlerChange,
  validatorText,
}) => {
  return (
    <div className="flex justify-center h-screen w-full items-center">
      <form
        className="bg-loginColor w-1/4 h-3/4 flex flex-col"
        onSubmit={handlerClick}
      >
        <div className="mt-20">
          <h1 className="text-red-500 text-center">{validatorText}</h1>
          <h1 className="text-center font-bold text-xl">{header}</h1>
          <p className="text-welcomeColor mt-2 text-center">{paragraf}</p>
        </div>
        <div className="flex flex-col mx-10 mt-20">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoComplete="current-username"
            onChange={handlerChange}
            className="w-full p-4 bg-loginColor border-2 rounded-md"
          ></input>
        </div>
        <div className="flex flex-col mx-10 mt-6">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            onChange={handlerChange}
            className="w-full p-4 bg-loginColor border-2 rounded-md relative"
          ></input>
        </div>

        <button
          type="submit"
          className="mt-6 bg-submitColor p-6 mx-10 rounded-3xl text-white font-bold text-1xl drop-shadow-2xl"
        >
          {auth}
        </button>
        <p className="text-center mt-4">
          {account}
          <Link to={href} className="font-bold mx-2">
            {word}
          </Link>
        </p>
      </form>
    </div>
  );
};
