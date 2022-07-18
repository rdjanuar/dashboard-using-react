import React from "react";

export const Formdata = ({
  handlerChange,
  HandlerClick,
  name,
  year,
  author,
  summary,
  publisher,
  pageCount,
  readCount,
}) => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        className=" bg-formColor w-3/6 h-4/6 rounded-formBorder"
        onSubmit={HandlerClick}
        method="POST"
        action="http://127.0.0.1:8080/book"
      >
        <div className="flex flex-wrap">
          <input
            type="text"
            placeholder="name"
            value={name}
            name="name"
            onChange={handlerChange}
            className="p-3 mt-10 w-3/12 rounded-lg mx-20"
          ></input>
          <input
            type="number"
            placeholder="year"
            value={year}
            name="year"
            onChange={handlerChange}
            className="p-3 mt-10 w-3/12 rounded-lg mx-20"
          ></input>
          <input
            type="text"
            placeholder="author"
            value={author}
            name="author"
            onChange={handlerChange}
            className="p-3 mt-10 w-3/12 rounded-lg mx-20"
          ></input>
          <input
            type="text"
            placeholder="summary"
            value={summary}
            name="summary"
            onChange={handlerChange}
            className="p-3 mt-10 w-3/12 rounded-lg mx-20"
          ></input>
          <input
            type="text"
            placeholder="publisher"
            value={publisher}
            name="publisher"
            onChange={handlerChange}
            className="p-3 mt-10 w-3/12 rounded-lg mx-20"
          ></input>
          <input
            type="number"
            placeholder="pageCount"
            value={pageCount}
            name="pageCount"
            onChange={handlerChange}
            className="p-3 mt-10 w-3/12 rounded-lg mx-20"
          ></input>
          <input
            type="number"
            placeholder="readCount"
            value={readCount}
            name="readCount"
            onChange={handlerChange}
            className="p-3 mt-10 w-3/12 rounded-lg mx-20"
          ></input>
        </div>
        <button
          type="submit"
          className=" p-3 mt-10 w-3/12 rounded-lg mx-64 bg-red-500"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};
