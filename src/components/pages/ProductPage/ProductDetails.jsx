import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const StyledProductDetails = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const ProductDetails = (props) => {

    // {name, price, description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat itaque expedita facere harum, necessitatibus aliquid saepe deleniti at incidunt sed vitae temporibus dolorum odio, impedit aspernatur ducimus excepturi quidem voluptatem.", qty = 10}

     const { productName } = props.location.state

    console.log("Product name: ", productName)

    return (
        <StyledProductDetails>
            {/* <h2>{name}</h2>
            <h5>{price}</h5>
            <p>{description}</p>
            <p>4.5/5</p>
            <h4>Quantity: {qty}</h4> */}
            <p>Refund Policy:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam aperiam fugit atque expedita voluptatem, laborum, numquam libero quia, deleniti hic illo quae ad. Debitis iusto laudantium consequuntur modi quibusdam.</p>
            <p>Seller Name: Apple</p>
        </StyledProductDetails>
    )
}

export default ProductDetails
