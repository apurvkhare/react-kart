import React from 'react'
import styled from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'
import Product from './Product'
import { fetchProducts } from '../../../Reactkart.service'
import productsReducer, {initialProductState, fetchTypes} from '../../../reducers/ProductsReducer'
import {PRODUCTS_FETCH_FAILURE, PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_PENDING} from '../../../reducers/ActionTypes'

const StyledProductList = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
`

const ProductList = () => {

    const [state, dispatch] = React.useReducer(productsReducer, initialProductState)

    const fetchData = async () => {
        dispatch({type: PRODUCTS_FETCH_PENDING});
        const products = await fetchProducts();
        if(products === null)
            dispatch({type: PRODUCTS_FETCH_FAILURE})
        else
            dispatch({
                type: PRODUCTS_FETCH_SUCCESS,
                payload: {
                    products
                } 
            })
    }

    React.useEffect(fetchData, [])

    console.log("initial State: ", state);

    if(state.fetching === fetchTypes.pending){
        return <div style={{display: 'flex', gap: 100, flexWrap: 'wrap', padding: 30, justifyContent: "center", alignItems: 'center'}}>
              <Skeleton animation="wave" variant="rect" width={250} height={450}/>
              <Skeleton animation="wave" variant="rect" width={250} height={450}/>
              <Skeleton animation="wave" variant="rect" width={250} height={450}/>
              <Skeleton animation="wave" variant="rect" width={250} height={450}/>
            </div>
    }

    if(state.fetching === fetchTypes.rejected)
        return <h2 style={{textAlign: 'center'}}>{state.error}</h2>

    return (
        <StyledProductList>
            {state.products && state.products.length !==0 && state.products.map(product => <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl}/>)}
        </StyledProductList>
    )
}

export default ProductList
