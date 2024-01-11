import React from "react";
import "./Home.css";
import TopBox from "src/components/topBox/TopBox";
import LineChart from "src/components/lineChart/LineChartBox";
import PieChart from "src/components/pieChart/PieChartBox";
import BarChart from "src/components/barChart/BarChartBox";
import BigChartBox from "src/components/bigChartBox/BigBoxChart";
import {
  LineChartTotalUser,
  LineChartTotalRevenue,
  LineChartTotalProducts,
  LineChartTotalRatio,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "src/data/data";
const home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <LineChart {...LineChartTotalUser} />
      </div>
      <div className="box box3">
        <LineChart {...LineChartTotalRevenue} />
      </div>
      <div className="box box4">
        <PieChart />
      </div>
      <div className="box box5">
        <LineChart {...LineChartTotalProducts} />
      </div>
      <div className="box box6">
        <LineChart {...LineChartTotalRatio} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChart {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChart {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default home;
