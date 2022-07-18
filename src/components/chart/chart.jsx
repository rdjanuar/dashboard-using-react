import React from "react";
import data from "../../data/data.json";
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
