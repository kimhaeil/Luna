import React, { PureComponent } from "react";
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
import Title from "../Title";


const data = [
  {
    name: "08-03",
    Total: 100,
    Error: 18,
    amt: 2400,
  },
  {
    name: "08-04",
    Total: 120,
    Error: 9,
    amt: 2210,
  },
  {
    name: "08-05",
    Total: 127,
    Error: 11,
    amt: 2290,
  },
  {
    name: "08-06",
    Total: 126,
    Error: 15,
    amt: 2000,
  },
  {
    name: "08-07",
    Total: 116,
    Error: 31,
    amt: 2181,
  },
  {
    name: "08-08",
    Total: 125,
    Error: 16,
    amt: 2500,
  },
  {
    name: "08-09",
    Total: 110,
    Error: 23,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <React.Fragment>
        <Title>Inspection trend of date</Title>
        <ResponsiveContainer height={400}>
          <LineChart
            width={500}
            height={300}
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
              dataKey="Error"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
