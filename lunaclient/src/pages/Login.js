import { Box, Button, TextField } from '@mui/material';
import { Axios } from 'axios';
import React, {useState, useEffect, useInsertionEffect, useReducer}from 'react';

function useInput(defualtValue){
    const [value, setValue] = useState(defualtValue)

    const onChange = e =>{
        const {
            target: {value}
        } = e;
        setValue(value);
    };

    return {value, onChange};
}

function useFetch(url){
    const [payload, setPalyload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const callUrl = async() =>{
        try{
            const {data} = await Axios.get(url);
            setPalyload(data);
        }catch{
            setError("Error!")
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        callUrl()
    }, []);

    return {payload, loading, error};
}


export default function Login(){
    
    const name = useInput("")
    const {payload, loading, error} = useFetch("https://img.hankyung.com/photo/202203/AA.28408913.1.jpg")
    console.log(name)

    const [inputId, setinputId] = useState('')
    const [inputPw, setinputPw] = useState('')
    
    const handleInputID = (arg) =>{
        setinputId(arg.target.value)
    }

    const handleInputPW = (arg) =>{
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
            <input {...name} />
            <label>PW:</label>
            <input type='password' name='input_pw' value={inputPw} onChange={handleInputPW}/>
            {loading && <span>load tesla</span>}
            {!loading && error && <span>{error}</span>}

            <Box>
                <button type='button' onClick={onClickLogin}>Login</button>
            </Box>
           </Box>
        
        </React.Fragment>
    )
}