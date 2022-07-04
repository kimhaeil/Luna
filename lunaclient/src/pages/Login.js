import { Box, Button, TextField } from '@mui/material';
import React from 'react';


export default function Login(){
    return (
        <React.Fragment>
           <Box
           component="main"
           sx={{
            alignItems:'center',
            display:'flex',
            flexGrow:1,
            minHeight:'100%'
           }}
           >
            <TextField variant="outlined" label="Id" fullWidth />
            <TextField variant="outlined" label="password" type="password" fullWidth />
            <Box>
                <Button>
                    Login
                </Button>
            </Box>
           </Box>
        
        </React.Fragment>
    )
}