import React, { useState, useEffect, useMemo } from "react";
import { Header } from "../components/header/hearder.component";
import { Dashboard } from "../components/dashboard/dashboard.component";
import { Navbar } from "../components/navbar/navbar.component";
import { userData } from "../utils/helper";

import axios from "axios";

export const PaginatedBooks = ({ itemsPerPage = 10 }) => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [currentBooks, setCurrentBooks] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [booksOffest, setBooksOffset] = useState([]);

  const paginate = useMemo(() => {
    const indexOfLastBook = booksOffest + itemsPerPage;
    setCurrentBooks(books.slice(booksOffest, indexOfLastBook));
    setPageCount(Math.ceil(books.length / itemsPerPage));
  }, [books, booksOffest, itemsPerPage]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8080/api/v1/book?name=${search}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setBooks(res.data.result.books);
    } catch (error) {
      console.log(error.message);
    }
  };

  const searchBooks = (event) => {
    return setSearch(String(event.target.value).toLowerCase());
  };

  const handlerPageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;

    setBooksOffset(newOffset);
  };

  // Delete Book by Id
  const deleteBookById = async (bookId) => {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8080/api/v1/book/${bookId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      getData();
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full">
        <Header header="Buku" alt="avatar" user={userData("username")} />
        <Dashboard
          books={currentBooks || paginate}
          search={searchBooks}
          onPageChange={handlerPageChange}
          pageCount={pageCount}
          onDelete={deleteBookById}
        />
      </div>
    </>
  );
};
