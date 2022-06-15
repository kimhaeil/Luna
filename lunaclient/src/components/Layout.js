import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

import {ContentDashBoard} from "./Content";

export default function Layout() {
    
    //const [isShown, setIsShow] = useState(false);
    const [content, setContent] = useState();

    const click_Search = (event) => {
        //setIsShow((current) => !current);
    };

    function click_dashboard(){
        console.log("Click Dashboard Btn");
        setContent(ContentDashBoard());
    }

    const buttons = [
        <Button key="one" onClick={click_dashboard}>Dashboard</Button>,
        <Button key="two">Amout of work done</Button>,
        <Button key="three">M List</Button>,
    ];

    return (
        <React.Fragment>
                <Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Stack component="form" noValidate spacing={3}>
                                <TextField
                                    id="datefrom"
                                    label="from"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{ width: 308 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="dateto"
                                    label="to"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{ width: 308 }}
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
                                <Button
                                    variant="outlined"
                                    onClick={click_Search}
                                >
                                    Search
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={10}>
                            {content}
                        </Grid>
                    </Grid>
                </Grid>
        </React.Fragment>
    );
}
