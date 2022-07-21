import { Formdata } from "../components/form/form.component";
import React, { useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    year: null,
    author: "",
    summary: "",
    publisher: "",
    pageCount: null,
    readCount: null,
  };

  const [formValues, setFormValues] = useReducer(
    (curvlas, newVals) => ({ ...curvlas, ...newVals }),
    initialValues
  );
  const { name, year, author, summary, publisher, pageCount, readCount } =
    formValues;

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
      await axios.post("http://127.0.0.1:8080/api/v1/book", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
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
        setFormValues({ [name]: value });
        break;
      case "year":
        setFormValues({ [name]: value });
        break;
      case "author":
        setFormValues({ [name]: value });
        break;
      case "summary":
        setFormValues({ [name]: value });
        break;
      case "publisher":
        setFormValues({ [name]: value });
        break;
      case "pageCount":
        setFormValues({ [name]: value });
        break;
      case "readCount":
        setFormValues({ [name]: value });
        break;
      default:
        break;
    }
  };
  return <Formdata handlerChange={handlerChange} HandlerClick={HandlerClick} />;
};
