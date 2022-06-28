import React, { useState } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
    palette: {
        background: {
            paper: "#e1f5fe",
        },
        text: {
            primary: "#173A5E",
            secondary: "#46505A",
        },
        action: {
            active: "#001E3C",
        },
        success: {
            dark: "#009688",
        },
    },
});

export default function CountOfSummary({title, rate, value, total}){
    return(
        <ThemeProvider theme={theme}>
        <Box
            sx={{
                bgcolor: "background.paper",
                boxShadow: 4,
                borderRadius: 4,
                p: 1,
                width: 210,
            }}
        >
            <Box sx={{ color: "text.secondary" }}>{title}</Box>
            <Box
                sx={{
                    color: "text.primary",
                    fontSize: 34,
                    fontWeight: "medium",
                }}
            >
                {rate}
            </Box>
            <Box
                sx={{
                    color: "success.dark",
                    display: "inline",
                    mx: 0.5,
                    fontSize: 12,
                }}
            >
               {value}/{total}
            </Box>
        </Box>
    </ThemeProvider>
    );
}