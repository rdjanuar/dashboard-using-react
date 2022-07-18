import React, { useState, useEffect, useMemo } from "react";
import { Header } from "../components/header/hearder.component";
import { Dashboard } from "../components/dashboard/dashboard.component";
import { Navbar } from "../components/navbar/navbar.component";

import axios from "axios";

export const PaginatedBooks = ({ itemsPerPage = 4 }) => {
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
      const res = await axios.get(`http://127.0.0.1:8080/book?name=${search}`);
      setBooks(res.data.result.books);
    } catch (error) {
      console.log(error.message);
    }
  };

  const searchBooks = (event) => {
    return setSearch(event.target.value);
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;

    setBooksOffset(newOffset);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full">
        <Header header="Buku" alt="avatar" />
        <Dashboard
          books={currentBooks || paginate}
          search={searchBooks}
          onPageChange={handlePageClick}
          pageCount={pageCount}
        />
      </div>
    </>
  );
};
