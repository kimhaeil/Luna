import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import DrawChart from './Chart'

const buttons = [
  <Button key="one">Dashboard</Button>,
  <Button key="two">Amout of work done</Button>,
  <Button key="three">M List</Button>,
];

function click_Search(){
  console.log("Click_Search");
}

export default function Layout(){

    return (
      <React.Fragment>
        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
          }}
        >
          <Stack component="form" noVlidate spacing={3}>
            <TextField
              id="datefrom"
              label="from"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
              <TextField
              id="dateto"
              label="to"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="contained"
            >
              {buttons}
            </ButtonGroup>
            <Button variant='outlined' onClick={click_Search}>Search</Button>

          </Stack>
        </Box>
      </React.Fragment>
    );
    
}