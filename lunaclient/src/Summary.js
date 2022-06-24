import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Title from "./Title";

import CountOfSummary from "./components/CountOfSummary";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Summary() {
  return (
    <React.Fragment>
      <Box>
        <Title>Summary</Title>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <CountOfSummary title="To Verify" rate="34.5%" value={12341} total={45234} />
          </Grid>
          <Grid item xs={6}>
            <CountOfSummary title="Real Error" rate="6.7%" value={1235} total={24563} />
          </Grid>
          <Grid item xs={6}>
            <CountOfSummary title="False Positive" rate="3.2%" value={125} total={6654} />
          </Grid>
          <Grid item xs={6}>
            <CountOfSummary title="False Negative" rate="0.2%" value={2} total={5663} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
