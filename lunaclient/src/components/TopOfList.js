import React, { PureComponent } from "react";
import {
    BarChart,
    Bar,
    Cell,
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
        name: "Tablet A",
        Total: 300,
        Error: 34,
        amt: 2400,
    },
    {
        name: "Lithionit dp 42mg",
        Total: 300,
        Error: 31,
        amt: 2210,
    },
    {
        name: "Enalapril Krka 5mg",
        Total: 200,
        Error: 30,
        amt: 2290,
    },
    {
        name: "Lisinopril Ratio 10mg",
        Total: 278,
        Error: 24,
        amt: 2000,
    },
    {
        name: "Trental dp 400mg",
        Total: 189,
        Error: 16,
        amt: 2181,
    },
    {
        name: "Monoket dp 50mg",
        Total: 239,
        Error: 13,
        amt: 2500,
    },
    {
        name: "Lescol Depot dp 80mg",
        Total: 349,
        Error: 4,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Title>Top of real error medicines</Title>
                <ResponsiveContainer height={400}>
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
                        <XAxis dataKey="name" fontSize={11}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Error" stackId="a" fill="#8884d8" />
                        <Bar dataKey="Total" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </React.Fragment>
        );
    }
}
