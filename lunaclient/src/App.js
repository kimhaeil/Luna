import "./App.css";

//#region  MUI
import { Container, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box, createTheme, ThemeProvider } from "@material-ui/core";

//#endregion

import Dashboard from "./Dashboard";

import Summary from "./Summary";
import DistributionChart from "./DistributionChart";
import UsageChart from "./UsageChart";
import Store  from "./DataInterface";
import Layout from "./components/Layout";
import Chart from "./components/Chart";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});

function App() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Layout/>
        </Grid>
        <Grid item xs={8}>
          {/* <Chart/> */}
        </Grid>
      </Grid>
    </Box>
  );
}
export default App;
