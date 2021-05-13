import React from 'react'
import styled from 'styled-components'

const StyledImageContainer =  styled.div`
    padding: 20px;
    margin: 20px;
    height: 500px;
    width: 400px;
`

const ProductImage = () => {
    return (
        <StyledImageContainer>
            <img src="https://picsum.photos/400/500" alt=""/>
        </StyledImageContainer>
    )
}

export default ProductImage
