import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { Grid, Paper } from "@mui/material";
import Chart from "./Chart";
import Summary from "../Summary";
import UsageChart from "../UsageChart";
import {ResponsiveContainer } from 'recharts';

function DashboardContent() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: 350,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: 350,
                        }}
                    >
                        <Summary />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper
                        sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                        <UsageChart />
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
