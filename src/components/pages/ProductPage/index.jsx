import React from 'react'
import styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductDetails from './ProductDetails'

const StyledProductPage = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ProductPage = () => {
    return (
        <StyledProductPage>
            <ProductImage/>
            <ProductDetails/>
        </StyledProductPage>
    )
}

export default ProductPage
