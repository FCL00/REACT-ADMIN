import React from "react";
import { ResponsiveContainer, BarChart, Tooltip, Bar } from "recharts";
const BarChartBox = ({ title, color, dataKey, chartData }) => {
  return (
    <div className="barChartBox space-y-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="chart ">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
