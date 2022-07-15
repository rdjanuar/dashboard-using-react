import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Chart = () => {
  const data = [
    {
      name: 1,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 2,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 3,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 4,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 5,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 6,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 7,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 8,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 9,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 10,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 11,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 12,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 13,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 14,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 15,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 16,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 17,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 18,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 19,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 20,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 21,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 22,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <main className="bg-white w-128 h-3/5 rounded-lg border border-aenjay mx-24 mt-8 ">
      <div className="mx-auto container">
        <div className="flex flex-col mx-10 mt-10">
          <h1 className="text-priceColor font-bold">Today`s trends</h1>
          <p className="text-dashboardColor">as of 25 May 2019, 09:41 PM</p>
        </div>
        <div className="flex items-center mt-6">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              width={350}
              height={350}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
};
