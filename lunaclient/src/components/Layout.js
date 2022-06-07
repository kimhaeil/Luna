import { AppBar } from '@mui/material';
import {  Drawer, Typography, Divider } from "@material-ui/core";
import * as React from 'react';


export default function Layout(){
    return (
      <React.Fragment>
        <AppBar></AppBar>
        <Drawer>
          <Typography variant="h5">
            왼쪾메뉴
          </Typography>
          <Divider />
        </Drawer>
      </React.Fragment>
    );
    
}