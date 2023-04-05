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

const DashBoard = () => {
  const data = [
    {
      name: "Site A",
      view: 4000,
      click: 2400,
      earn: 0,
    },
    {
      name: "Site B",
      view: 3000,
      click: 1398,
      earn: 2210,
    },
    {
      name: "Site C",
      view: 2000,
      click: 1800,
      earn: 2290,
    },
    {
      name: "Site D",
      view: 2780,
      click: 3908,
      earn: 2000,
    },
    {
      name: "Site E",
      view: 1890,
      click: 4800,
      earn: 2181,
    },
    {
      name: "Site F",
      view: 2390,
      click: 3800,
      earn: 2500,
    },
    {
      name: "Site G",
      view: 3490,
      click: 4300,
      earn: 2100,
    },
    {
      name: "Site H",
      view: 3290,
      click: 2600,
      earn: 1100,
    },
    {
      name: "Site I",
      view: 2190,
      click: 1200,
      earn: 3500,
    },
    {
      name: "Site J",
      view: 3990,
      click: 4300,
      earn: 1500,
    },
    {
      name: "Site K",
      view: 3540,
      click: 2300,
      earn: 4000,
    },
    {
      name: "Site L",
      view: 1410,
      click: 1200,
      earn: 3200,
    },
    {
      name: "Site M",
      view: 2590,
      click: 2000,
      earn: 4200,
    },
  ];

  return (
    <div>
      <LineChart width={1000} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="view"></Line>
        <Line type="monotone" dataKey="click"></Line>
        <Line type="monotone" dataKey="earn"></Line>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </LineChart>
    </div>
  );
};

export default DashBoard;
