import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import palette from '../../lib/styles/palette';


const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
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

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
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

const ButtonWithMaringTop = styled(Button)`margin-top :5rem;`;

const textMap = {
  login: 'Log in',
  register: 'Sign in'
}

const AuthForm = ({type}) =>{
    console.log(type)
    const text = textMap[type];
    return(
        <AuthFormBlock>
            <h3>Log</h3>
            <form>
                <StyledInput autoComplete="userid" name="username" placeholder="id"/>
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="pw"
                    type="password"
                />
                {type === 'register' && (
                  <StyledInput
                    autoComplete="new-password"
                    name="passwordConfirm"
                    placeholder="비밀번호 확인"
                    type="password"
                  />
                )}
                <ButtonWithMaringTop cyan fullWidth>{text}</ButtonWithMaringTop>
            </form>
            <Footer>
                {type === 'login' ?(
                  <Link to="/register">Sing in</Link>
                ) : (
                  <Link to="/login">Log in</Link>
                )}
            </Footer>
        </AuthFormBlock>
    )
}


export default AuthForm;