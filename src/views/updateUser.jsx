import { Formdata } from "../components/form/form.component";
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const { bookId } = useParams();
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

  const UpdateUser = async (event) => {
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
      await axios.put(`http://127.0.0.1:8080/api/v1/book/${bookId}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  const getUserById = async () => {
    const respose = await axios.get(
      `http://127.0.0.1:8080/api/v1/book/${bookId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    // eslint-disable-next-line array-callback-return
    respose.data.data.map((books) => {
      setFormValues({ name: books.name });
      setFormValues({ year: books.year });
      setFormValues({ author: books.author });
      setFormValues({ summary: books.summary });
      setFormValues({ publisher: books.publisher });
      setFormValues({ pageCount: books.pageCount });
      setFormValues({ readCount: books.readCount });
    });
  };

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  return (
    <Formdata
      handlerChange={handlerChange}
      HandlerClick={UpdateUser}
      name={name}
      year={year}
      author={author}
      summary={summary}
      publisher={publisher}
      pageCount={pageCount}
      readCount={readCount}
    />
  );
};
