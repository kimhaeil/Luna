import { Box, Button, TextField } from '@mui/material';
import { Axios } from 'axios';
import React, {useState, useEffect, useInsertionEffect, useReducer}from 'react';


const useInput = (initialValue, validator) =>{
    const [value, setValue] = useState(initialValue);
    const onChange = event =>{
        const{
            target:{value}
        } = event;
        let willUpdate = true;
        
        if(typeof validator === 'function'){
            willUpdate = validator(value);
        }
        
        if(willUpdate){
            setValue(value);
        }
        
    }
    return {value, onChange};
}

export default function Login(){
    const maxLength = value => value.length < 10;
    
    const name = useInput("ID:", maxLength);

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
            <input placeholder='ID' {...name}/>
            <label>PW:</label>
            <input type='password' name='input_pw'/>

            <Box>
                <button type='button' >Login</button>
            </Box>
           </Box>
        
        </React.Fragment>
    )
}