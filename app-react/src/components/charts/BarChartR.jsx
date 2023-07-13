import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useProductsValuexWarehouses } from "../../utils/useProductsValuexWarehouses";

function BarChartR({ data, param1, param2 }) {
  
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
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
        <Bar dataKey={param1} stackId="a" fill="#8884d8" />
        <Bar dataKey={param2} fill="#ffc658" />
      </BarChart>
      </div>
    </>
  );
}
export default BarChartR