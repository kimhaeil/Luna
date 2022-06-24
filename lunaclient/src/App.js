import "./App.css";
import React, { useState } from "react";
import {
    Link as RouteLink,
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
//#region  MUI
import { Box, Switch } from "@material-ui/core";
import { Container, Grid, Toolbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
//#endregion

//Component
import Chart from "./components/Chart";
import RealErrorList from "./components/RealErrorList";
import FailedMedicineChart from "./components/BarChart";
import Dashboard from "./components/Dashboard";
import ToVerifyMdList from "./components/ToVerifyMdList";
import PeriodConditions from "./components/PeriodConditions";


function App() {

    const [isShown, setIsShow] = useState(false);

    const Click_DashBorad = (event) => {
        console.log("Click Dashboard");
        setIsShow((current) => !current);
    };

    return (
        <React.Fragment>
            <BrowserRouter>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <Drawer variant="permanent">
                        <List component="nav">
                            <React.Fragment>
                                <PeriodConditions />
                                <ListItemButton
                                    component={RouteLink}
                                    to="/Chart"
                                >
                                    <ListItemIcon>
                                        <DashboardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                                <ListItemButton
                                    component={RouteLink}
                                    to="/ErrList"
                                >
                                    <ListItemIcon>
                                        <FormatListBulletedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Medicine List" />
                                </ListItemButton>
                                <ListItemButton
                                    component={RouteLink}
                                    to="/BarChart"
                                >
                                    <ListItemIcon>
                                        <AlignVerticalTopIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Rear Error Medicine List" />
                                </ListItemButton>
                                <ListItemButton
                                    component={RouteLink}
                                    to="/Home"
                                >
                                    <ListItemIcon>
                                        <BarChartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Etc1" />
                                </ListItemButton>
                                <ListItemButton
                                    component={RouteLink}
                                    to="/ToVerifyMdList"
                                >
                                    <ListItemIcon>
                                        <LayersIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Etc2" />
                                </ListItemButton>
                            </React.Fragment>
                        </List>
                    </Drawer>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Toolbar />

                        <Container max="lg">
                            
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Paper>
                                        <Routes>
                                            <Route
                                                exact
                                                path="/Chart"
                                                element={<Chart />}
                                            />
                                            <Route
                                                exact
                                                path="/ErrList"
                                                element={<RealErrorList />}
                                            />
                                            <Route
                                                exact
                                                path="/BarChart"
                                                element={
                                                    <FailedMedicineChart />
                                                }
                                            />
                                            <Route
                                                exact
                                                path="/Home"
                                                element={<Dashboard />}
                                            />
                                            <Route
                                                exact
                                                path="/ToVerifyMdList"
                                                element={<ToVerifyMdList />}
                                            />
                                        </Routes>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </BrowserRouter>
        </React.Fragment>
    );
}
export default App;
