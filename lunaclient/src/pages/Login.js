import { Box, Button, TextField } from '@mui/material';
import React, {useState, useEffect}from 'react';


export default function Login(){
    
    const [inputId, setinputId] = useState('')
    const [inputPw, setinputPw] = useState('')
    
    const handleInputID = (arg) =>{
        console.log(arg.target.value)
        setinputId(arg.target.value)
    }

    const handleInputPW = (arg) =>{
        console.log(arg.target.value)
        setinputPw(arg.target.value)
    }

    const onClickLogin = () =>{
        console.log('Clicked Login')
    }

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
            <label>ID:</label>
            <input type='text' name='input_id' value={inputId} onChange={handleInputID}/>
            <label>PW:</label>
            <input type='password' name='input_pw' value={inputPw} onChange={handleInputPW}/>
            <Box>
                <button type='button' onClick={onClickLogin}>Login</button>
            </Box>
           </Box>
        
        </React.Fragment>
    )
}