import "./App.css";

//#region  MUI
import { Box } from "@material-ui/core";
import { Container, Grid } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
//#endregion

import Layout from "./components/Layout";
import Chart from "./components/Chart";
import {mainListItems} from "./components/mainListItems";

function App() {
  return (
  <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <Drawer variant="permanent">
        <List component="nav">
            {mainListItems}
        </List>
    </Drawer>
  </Box>
  )
}
export default App;
