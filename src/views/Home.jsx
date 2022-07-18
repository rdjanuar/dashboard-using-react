import { Header } from "../components/header/hearder.component";
import { Chart } from "../components/chart/chart";
import { Task } from "../components/task/task";
import { Navbar } from "../components/navbar/navbar.component";

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

export const Home = () => {
  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState([]);
  const [unfinished, setUnfinished] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:8080/book");
      setTotalData(res.data);
      setFinished(res.data.result.books);
      setUnfinished(res.data.result.books);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  };

  // filter finished books length
  const filterFinished = useMemo(() => {
    const filter = finished.filter(({ finished }) => {
      return finished === true;
    });
    return filter.length;
  }, [finished]);

  // Filter Unifinsed Books length
  const filterUnFinished = useMemo(() => {
    const filter = unfinished.filter(({ reading }) => {
      return reading === true;
    });
    return filter.length;
  }, [unfinished]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-anjay w-full">
        <Header header="Overview" />
        {loading ? (
          <div className="text-center text-red-500 text-3xl">
            Loading Data...{" "}
          </div>
        ) : (
          <Task
            isDone={filterFinished}
            books={totalData}
            isReading={filterUnFinished}
          />
        )}
        <Chart />
      </div>
    </>
  );
};
