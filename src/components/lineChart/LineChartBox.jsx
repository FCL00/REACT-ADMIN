import React, { useState } from "react";
import { Link } from "react-router-dom";
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

// create custom content for tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="rounded shadow">
        <p className="font-bold mb-2">{`${label}`}</p>
        <p className="text-sm">{`${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const LineChartBox = ({
  color,
  title,
  dataKey,
  number,
  percentage,
  icon,
  chartData,
}) => {
  return (
    <div className="h-full flex flex-col justify-between space-y-5 md:relative">
      <div className="space-y-10">
        <div className="flex space-x-2">
          {/* <img src={icon} alt="icon" /> */}
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <h1
          className="text-2xl md:text-4xl lg-text-7xl font-bold"
          style={{ color: color }}
        >
          {number}
        </h1>
      </div>
      <div className="">
        <ResponsiveContainer width={"100%"} height={100}>
          <LineChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              position={{ x: 10, y: 70 }}
            />
            <Line
              dot={false}
              type="monotone"
              dataKey={dataKey}
              stroke={color}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between items-center">
        <Link href="#" className="text-gray-500">
          View All
        </Link>
        <div className="flex flex-col text-end">
          <p style={{ color: color }}>{percentage}%</p>
          <small className="text-gray-500">this month</small>
        </div>
      </div>
    </div>
  );
};

export default LineChartBox;
