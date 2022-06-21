import * as React from 'react';

//MUI Lib
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//MUI 

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(no, medicineCode, MedicineName, Dose,  Total, ToVerify, RealError, FalsePositive, RealErrorRate){
    return {no, medicineCode, MedicineName,Dose, Total, ToVerify, RealError, FalsePositive, RealErrorRate};
}

const rows = [
    createData(1, '051110', 'Lithionit dp 42mg', 1,  177, 12, 0, '98.6%', '0.00%'),
    createData(2, '011019', 'Enalapril Krka 5mg', 1,  1274, 32, 0, '98.6%', '0.00%'),
    createData(3, '005923', 'Lisinopril Ratio 10mg', 1,  133, 23, 0, '98.6%', '0.00%'),
    createData(4, '023738', 'Trental dp 400mg',  1, 346,  43, 0, '98.6%', '0.00%'),
    createData(5, '006144', 'Glibenclamid Ratio 3,5mg', 1,  55, 12, 0, '98.6%', '0.00%'),
    createData(6, '001512', 'Monoket OD dp 50mg', 1,  445, 32, 0, '98.6%', '0.00%'),
    createData(7, '002686', 'Celecoxib MV 200mg', 1,  66, 55, 0, '98.6%', '0.00%'),
    createData(8, '002686', 'Lescol Depot dp 80mg', 1,  667, 21, 0, '98.6%', '0.00%'),
    createData(9, '025629', 'Cipralex 20mg', 1,  317, 774, 1, '98.6%', '0.00%'),
    createData(10, '054282', 'Monoket OD dp 100mg',1,  22, 2, 0, '98.6%', '0.00%'),
    createData(11, '011997', 'Trimetoprim Ori 100mg',1,  334, 44, 0, '98.6%', '0.00%'),
    createData(12, '005944', 'Keppra 500mg',1,  317, 5, 0, '98.6%', '0.00%'),
    createData(13, '025605', 'Cipralex 5mg',1,  317, 23, 0, '98.6%', '0.00%'),
    createData(14, '006981', 'Vimpat 150mg', 1, 317, 56, 0, '98.6%', '0.00%'),
    createData(15, '003112', 'CoAprovel 300mg/25mg',1,  168, 21, 0, '98.6%', '0.00%'),
    createData(16, '005757', 'Cipralex Orif 10mg', 1, 576, 23, 0, '98.6%', '0.00%'),
    createData(17, '026627', 'Lisinopril Ratio 20mg',1,  22, 5, 0, '98.6%', '0.00%'),
    createData(18, '057915', 'Monoket OD dp 25mg',1,  333, 23, 0, '98.6%', '0.00%'),
    createData(19, '014844', 'Concerta dp 54mg', 1, 87, 45, 0, '98.6%', '0.00%'),
    createData(20, '006175', 'Levaxin 150mcg', 1, 90, 55, 0, '98.6%', '0.00%'),
]


export default function ToVerifyMdList(){
    return(
        <React.Fragment>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                    Period:
                </Grid>
                <Grid item xs={8}>
                    2022-06-01(Fri) 00:00:00 ~ 2022-06-30(Thu) 23:59:59
                </Grid>
                <Grid item xs={4}>
                    Sort by:
                </Grid>
                <Grid item xs={8}>
                    False Positive
                </Grid>
                <Grid item xs={4}>
                    Condition:
                </Grid>
                <Grid item xs={8}>
                    Condition 1
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>No.</StyledTableCell>
                            <StyledTableCell align='center'>Medicine Code</StyledTableCell>
                            <StyledTableCell align='center'>Medicine Name</StyledTableCell>
                            <StyledTableCell align='center'>Dose</StyledTableCell>
                            <StyledTableCell align='center'>Total</StyledTableCell>
                            <StyledTableCell align='center'>To Verify(%)</StyledTableCell>
                            <StyledTableCell align='center'>Real Error</StyledTableCell>
                            <StyledTableCell align='center'>False Positive</StyledTableCell>
                            <StyledTableCell align='center'>Read Error(%)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) =>(
                            <StyledTableRow key={row.no}>
                                    <StyledTableCell align='center'>{row.no}</StyledTableCell>
                                    <StyledTableCell align='center' component="th" scope='row'>
                                        {row.medicineCode}
                                    </StyledTableCell>
                                    <StyledTableCell align='center'>{row.MedicineName}</StyledTableCell>
                                    <StyledTableCell align='center'>{row.Dose}</StyledTableCell>
                                    <StyledTableCell align='center'>{row.Total}</StyledTableCell>
                                    <StyledTableCell align='center'>{row.ToVerify}</StyledTableCell>
                                    <StyledTableCell align='center'>{row.RealError}</StyledTableCell>
                                    <StyledTableCell align='center'>{row.FalsePositive}</StyledTableCell>
                                    <StyledTableCell align='center'>{row.RealErrorRate}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}