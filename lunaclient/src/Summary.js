import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Title from './Title';
import { Typography } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Summary(){
    return (
        <React.Fragment>
            <Box>
                <Title>Summary</Title>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Item>
                            Total
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            Total Count
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            To Verify
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            To Verify(%)
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            Real Error
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                           Real Error(%)
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}