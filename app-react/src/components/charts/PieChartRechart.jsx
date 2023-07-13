import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PieChartRechart({ data, filter }) {

  return (
    <>
      {data ? (
        <div className="d-flex justify-content-center align-items-center">
          <PieChart
            className="d-flex justify-content-center align-items-center"
            width={300}
            height={300}
          >
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
              className="text-center"
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
        </div>
      ) : (
        <p>No se ha cargado correctamente la gráfica</p>
      )}
    </>
  );
}

export default PieChartRechart;
