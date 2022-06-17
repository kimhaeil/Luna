import "./App.css";
import React, { useState } from "react";
//#region  MUI
import { Box } from "@material-ui/core";
import { Container, Grid, Toolbar } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
//#endregion

import Chart from "./components/Chart";
import RealErrorList from "./components/RealErrorList";

function App() {
    
    const [isShown, setIsShow] = useState(false);

    const Click_DashBorad = (event) => {
        console.log("Click Dashboard");
        setIsShow((current) => !current);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Drawer variant="permanent">
                <List component="nav">
                    <React.Fragment>
                        <ListItemButton onClick={Click_DashBorad}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Medicine List" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Rear Error Medicine List" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <BarChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Etc1" />
                        </ListItemButton>
                        <ListItemButton>
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
                            {isShown && (
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 300,
                                    }}
                                >
                                    <RealErrorList />
                                </Paper>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
export default App;
