import React from 'react'
import styled from 'styled-components'

const StyledLoginContainer =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginPage = () => {
    return (
        <StyledLoginContainer>
            <button type>
                Login with Google
            </button>
        </StyledLoginContainer>
    )
}

export default LoginPage
