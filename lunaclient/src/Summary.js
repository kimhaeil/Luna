import * as React from 'react';
import Box from '@mui/material/Box';
import { width } from '@mui/system';
import { backdropClasses } from '@mui/material';

export default function Summary(){
    return (
        <React.Fragment>
            <Box
                sx={{
                width: 600,
                height:300,
                backgroundColor:'primary.dark'}}/>
        </React.Fragment>
    )
}