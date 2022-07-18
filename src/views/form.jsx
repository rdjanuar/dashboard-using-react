import { Formdata } from "../components/form/form.component";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState(null);
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pageCount, setPageCount] = useState(null);
  const [readCount, setReadCount] = useState(null);
  const navigate = useNavigate();

  const HandlerClick = async (event) => {
    event.preventDefault();
    const data = {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readCount,
    };
    try {
      await axios.post("http://127.0.0.1:8080/book", data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handlerChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "year":
        setYear(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "summary":
        setSummary(value);
        break;
      case "publisher":
        setPublisher(value);
        break;
      case "pageCount":
        setPageCount(value);
        break;
      case "readCount":
        setReadCount(value);
        break;
      default:
        break;
    }
  };
  return <Formdata handlerChange={handlerChange} HandlerClick={HandlerClick} />;
};
