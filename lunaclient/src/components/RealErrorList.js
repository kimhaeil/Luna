import * as React from 'react';
import Title from '../Title';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function createSampleData(Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9, Col10 ){
    return{Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9, Col10};
}

const datas = [
    createSampleData(1,'06_210629193445154',	'2021-06-29 21:52:01',	50180,	'-',	6,	4,	413,	21,	5.08),
    createSampleData(2,'02_210629200107772',	'2021-06-29 21:49:02',	50138,	'-',	2,	1,	400,	21,	5.25),
    createSampleData(3,'04_210629193043733',	'2021-06-29 21:48:10',	50138,	'-',	4,	2,	477,33,	6.92),
    createSampleData(4,'01_210629193810838',	'2021-06-29 21:47:17',	40045,	'-',	1,	3,	420,	39,	9.29),
    createSampleData(5,'07_210629171412423',	'2021-06-29 21:45:38',	31762,	'-',	7,	3,	57,	6,	10.53),
    createSampleData(6,'12_210629194851907',	'2021-06-29 21:41:52',	50108,	'-',	12,	4,	415,	19,	4.58),
    createSampleData(7,'10_210629214126903',	'2021-06-29 21:41:46',	30976,	'-',	10,10,	65,	0,	7.69),
    createSampleData(8,'09_210629195721539',	'2021-06-29 21:40:18',	50142,	'-',	9,	1,	416,	32,	8.70),
    createSampleData(9,'10_210629191040742',	'2021-06-29 21:37:10',	31568,	'-',	10,	3,	414,	36,9.25),
    createSampleData(10,'08_210629191136092',	'2021-06-29 21:36:07',	31679,	'-',	8,2,	400,	37,	7.71),
    createSampleData(11,'11_210629195919553',	'2021-06-29 21:33:31',	50141,	'-',	11,	4,	402,	31,	1.47),
    createSampleData(12,'12_210629213037022',	'2021-06-29 21:30:52',	31567,	'-',	12,	12,	8,	0,	18.60),
    createSampleData(13,'02_210629193431765',	'2021-06-29 21:30:24',	40048,	'-',	2,	1,	407,	6,	6.06),
    createSampleData(14,'08_210629212624905',	'2021-06-29 21:26:41',	31802,	'-',	8,	8,	98,	0,	9.48),
    createSampleData(15,'09_210629193418384',	'2021-06-29 21:26:19',	50142,	'-',	9,	3,	404,	35,4.65),
    createSampleData(16,'07_210629212537572',	'2021-06-29 21:25:54',	30887,	'-',	7,	7,	73,	0,	7.52),
    createSampleData(17,'05_210629190726354',	'2021-06-29 21:25:11',	32011,	'-',	5,	4,	441,	43,	9.48),
    createSampleData(18,'12_210629175051258',	'2021-06-29 21:25:09',	50182,	'-',	12,	3,	43,	8,	7.11),
    createSampleData(19,'07_210629175835939',	'2021-06-29 21:24:04',	31955,	'-',	7,	3,	29,	2,	5.09),
    createSampleData(20,'11_210629184004564',	'2021-06-29 21:23:52',	50141,	'-',	11,	2,	429,	26,	4.21),
    createSampleData(21,'09_210629212211901',	'2021-06-29 21:22:16',	30965,	'-',	9,	9,	3,	0,	6.12),
    createSampleData(22,'07_210629184806363',	'2021-06-29 21:22:00',	50220,	'-',	7,	1,	422,	40,	5.20),
    ];

export default function RealErrorList() {
    return (
        <React.Fragment>
            <Title>Inspection result of batch</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>no.</TableCell>
                        <TableCell align='center'>Batch ID</TableCell>
                        <TableCell align='center'>Date</TableCell>
                        <TableCell align='center'>Hospital</TableCell>
                        <TableCell align='center'>Location</TableCell>
                        <TableCell align='center'>ATDPS ID</TableCell>
                        <TableCell align='center'>VIZEN ID</TableCell>
                        <TableCell align='center'>Total</TableCell>
                        <TableCell align='center'>Validated</TableCell>
                        <TableCell align='center'>ToVerify(%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((row) => (
                        <TableRow key={row.Col1}>
                            <TableCell align='center'>{row.Col1}</TableCell>
                            <TableCell align='center'>{row.Col2}</TableCell>
                            <TableCell align='center'>{row.Col3}</TableCell>
                            <TableCell align='center'>{row.Col4}</TableCell>
                            <TableCell align='center'>{row.Col5}</TableCell>
                            <TableCell align='center'>{row.Col6}</TableCell>
                            <TableCell align='center'>{row.Col7}</TableCell>
                            <TableCell align='center'>{row.Col8}</TableCell>
                            <TableCell align='center'>{row.Col9}</TableCell>
                            <TableCell align='center'>{row.Col10}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}