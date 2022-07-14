import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
    positino: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: colum;
    justify-content: center;
    aligh-items: center;
`;

const WhiteBox = styled.div``;

const AuthTemplate = ({children}) =>{
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className=''>
                    <Link to="/">to go</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    )
}

export default AuthTemplate;