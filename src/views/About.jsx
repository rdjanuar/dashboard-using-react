import React, { useState, useEffect } from "react";
import { Header } from "../components/header/hearder.component";
import { Dashboard } from "../components/dashboard/dashboard.component";

import axios from "axios";

export const About = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [sortBooks, setSortBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:8080/book");
      setBooks(res.data.result.books);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  };

  const searchBooks = (event) => {
    return setSearch(String(event.target.value).toLocaleLowerCase());
  };

  const filterBooks = books.filter(({ name }) => {
    return name.toLocaleLowerCase().includes(search);
  });

  // Sorting Array
  const handlerClick = () => {
    const sorted = books.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setSortBooks(sorted);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Header header="Buku" alt="avatar" />
      {loading ? (
        <div className="text-4xl text-red-700 text-center">Loading....</div>
      ) : (
        <Dashboard
          books={filterBooks || sortBooks}
          search={searchBooks}
          sortBooks={handlerClick}
        />
      )}
    </div>
  );
};
