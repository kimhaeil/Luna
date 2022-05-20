import "./App.css";

//#region  MUI
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

//#endregion

import Dashboard from "./Dashboard";
import Chart from "./Chart";
import Summary from "./Summary";

const mdTheme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  return (
  <Container maxWidth="1g" sx={{mt: 4, mb:4}} style={{background: '#f2f6fc'}}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p:2,
            display:'flex',
            flexDirection: 'column',
            height:240
          }}>
            <Chart/>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  );
}
export default App;
