import "./App.css";

//#region  MUI
import { Container, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

//#endregion

import Dashboard from "./Dashboard";
import Chart from "./Chart";
import Summary from "./Summary";
import DistributionChart from "./DistributionChart";
import UsageChart from "./UsageChart";
import  Store  from "./DataInterface";

function App() {
  return (
    <Container
      maxWidth="1g"
      sx={{ mt: 4, mb: 4 }}
      style={{ background: "#f2f6fc" }}
    >
      <Dashboard />
      {/* #Summary */}
      <Grid container spacing={3}>
        <Grid item xs={2} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Summary />
          </Paper>
        </Grid>
          <Grid item xs={4} md={2} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <DistributionChart />
            </Paper>
          </Grid>
        <Grid item xs='auto' md='auto' lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs='auto' md='auto' lg={9}>
        <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <UsageChart />
          </Paper>
        </Grid>
      </Grid>
      <Store/>
    </Container>
  );
}
export default App;
