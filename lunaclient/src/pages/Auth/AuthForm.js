import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const AuthFormBlock = styled.div`
    h3{
        margin:0;
        margin-bottom: 1rem;
    }    
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none
    border-bottom: 1px solid
    padding-bottom: 0.5rem;
    outline: none;
    width:100%;
    &:focus{
        color: $oc-teal-7;
        border-bottom: 1px solid
    }
    &+&{
        margin-top: 1rem;
    }
`;

const AuthForm = () =>{
    return(
        <AuthFormBlock>
            <form>
                <StyledInput autoComplete="userid" name="username" placeholder="id"/>
                <StyledInput
                    autoComplete="newpassword"
                    name="password"
                    placeholder="pw"
                    type="password"
                />
                <Button>Login</Button>
            </form>
        </AuthFormBlock>
    )
}


export default AuthForm;