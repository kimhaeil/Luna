import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import palette from '../../lib/styles/palette';

const AuthFormBlock = styled.div`
    h3{
        margin:0;
        margin-bottom: 1rem;
        color: ${palette.gray[8]};
    }    
`;

const StyledInput = styled.input`
        font-size: 1rem;
        border: none;
        border-bottom: 1px solid ${palette.gray[5]};
        padding-bottom: 0.5rem;
        outline: none;
        width: 100%;
        &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
        }
        & + & {
        margin-top: 1rem;
        }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;


const AuthForm = () =>{
    return(
        <AuthFormBlock>
            <h3>Log</h3>
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
            <Footer>
                <Link to="/register">Sing in</Link>
            </Footer>
        </AuthFormBlock>
    )
}


export default AuthForm;