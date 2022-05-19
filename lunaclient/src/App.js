import "./App.css";

//#region  MUI
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//#endregion

import Dashboard from "./Dashboard";
import Chart from "./Chart";

function App() {
  return (
    
    <div>
      <Dashboard/>
      <Chart/>
    </div>

  );
}

export default App;
