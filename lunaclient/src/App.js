import "./App.css";

//#region  MUI
import { Box } from "@material-ui/core";
import { Container, Grid, Toolbar } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
//#endregion

import Layout from "./components/Layout";
import Chart from "./components/Chart";
import { mainListItems } from "./components/mainListItems";

function App() {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Drawer variant="permanent">
                <List component="nav">{mainListItems}</List>
            </Drawer>
            <Box component="main"
                sx={{
                    flexGrow: 1,
                }}>
                <Toolbar/>
                <Container max="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <Paper
                            sx={{
                                p:2,
                                display:'flex',
                                flexDirection:'column',
                                height:300,
                            }}>
                                <Chart/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
export default App;
