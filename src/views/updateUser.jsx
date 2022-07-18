import { Formdata } from "../components/form/form.component";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState(1);
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [readCount, setReadCount] = useState(1);
  const { bookId } = useParams();
  const navigate = useNavigate();

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
      await axios.put(`http://127.0.0.1:8080/book/${bookId}`, data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  const getUserById = async () => {
    const respose = await axios.get(`http://127.0.0.1:8080/book/${bookId}`);
    // eslint-disable-next-line array-callback-return
    respose.data.data.map((books) => {
      setName(books.name);
      setYear(books.year);
      setAuthor(books.author);
      setSummary(books.summary);
      setPublisher(books.publisher);
      setPageCount(books.pageCount);
      setReadCount(books.readCount);
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
