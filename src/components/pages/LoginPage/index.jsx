import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'

const StyledLoginContainer =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginPage = () => {

    const history = useHistory()
    const { currentUser, signIn } = useAuth()

    const handleLogin = () => {
        signIn()
    }

    useEffect(() => {
        if(currentUser !== null)
            history.push("/")
    }, [currentUser])

    return (
        <StyledLoginContainer>
            <button type onClick={handleLogin}>
                Login with Google
            </button>
        </StyledLoginContainer>
    )
}

export default LoginPage
