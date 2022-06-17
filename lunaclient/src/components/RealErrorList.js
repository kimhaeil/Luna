import * as React from 'react';
import Title from '../Title';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function createSampleData(Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,col10 ){
    return{Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,col10};
}

const datas = [
    createSampleData(
        1,2,3,4,5,6,7,8,9,0
    ),
    createSampleData(
        2,20,30,40,50,60,70,80,90,100
    ),createSampleData(
        3,200,300,400,500,600,700,800,900,1000
    ),createSampleData(
        4,2000,3000,4000,5000,6000,7000,8000,9000,10000
    ),
    ];

export default function RealErrorList() {
    return (
        <React.Fragment>
            <Title>real error list</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Col1</TableCell>
                        <TableCell>Col2</TableCell>
                        <TableCell>Col3</TableCell>
                        <TableCell>Col4</TableCell>
                        <TableCell>Col5</TableCell>
                        <TableCell>Col6</TableCell>
                        <TableCell>Col7</TableCell>
                        <TableCell>Col8</TableCell>
                        <TableCell>Col9</TableCell>
                        <TableCell>Col10</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((row) => (
                        <TableRow key={row.Col1}>
                            <TableCell>{row.Col2}</TableCell>
                            <TableCell>{row.Col3}</TableCell>
                            <TableCell>{row.Col4}</TableCell>
                            <TableCell>{row.Col5}</TableCell>
                            <TableCell>{row.Col6}</TableCell>
                            <TableCell>{row.Col7}</TableCell>
                            <TableCell>{row.Col8}</TableCell>
                            <TableCell>{row.Col9}</TableCell>
                            <TableCell>{row.Col10}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}