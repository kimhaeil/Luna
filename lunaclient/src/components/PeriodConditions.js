import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Box from "@mui/material/Box";
import "react-datepicker/dist/react-datepicker.css";
import { Directions } from "@material-ui/icons";
import CssBaseline from "@mui/material/CssBaseline";

export default function PeriodConditions() {
    const [startDate, setStartDate] = useState(new Date("2022/06/22"));
    const [endDate, setEndDate] = useState(new Date("2022/06/23"));

    return (
        <React.Fragment>
            <Box sx={{ 
                display: "flex", 
                flexDirection: { xs: "column" },
                alignItems: 'center',
                p: 2
         }}>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
                <Box>~</Box>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
            </Box>
        </React.Fragment>
    );
}
