import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#FFBB28", "#FF8042", "#0088FE", "#00C49F"];

function PieChartWithPaddingAngle({ data }) {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
      {data ? (
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      ) : (
        <p>No se ha cargado</p>
      )}
      </div>
    </>
  );
}

export default PieChartWithPaddingAngle;
