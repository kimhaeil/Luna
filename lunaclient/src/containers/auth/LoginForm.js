import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () =>{
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) =>({
        form:auth.login
    }));

    const onChange = e =>{
        const {value,name} =e.target;
        
    }
}

export default LoginForm;