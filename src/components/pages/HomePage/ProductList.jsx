import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import commerce from '../../../lib/commerce'

const StyledProductList = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
`

const ProductList = () => {

    const [products, setProducts] = React.useState([]);

    const fetchData = () => {
        commerce.products.list().then((productsResult) => {
        
            console.log(productsResult.data)
            const productsData = productsResult.data.map((product) => (
                {
                    id: product.id,
                    name: product.name,
                    price: product.price.formatted_with_symbol,
                    imageUrl: product.media.source
                }
            ) )

            setProducts(productsData);
        })
    }

    React.useEffect(() => {fetchData()}, [])

    return (
        <StyledProductList>
            {products.map(product => <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl}/>)}
        </StyledProductList>
    )
}

export default ProductList
