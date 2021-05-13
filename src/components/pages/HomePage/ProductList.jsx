import React from 'react'
import styled from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'
import Product from './Product'
// import { fetchData } from '../../../Reactkart.service'
import {fetchTypes} from '../../../reducers/ProductsReducer'
import {ProductContext} from '../../../context/ProductContext'
// import {DATA_FETCH_FAILURE, DATA_FETCH_SUCCESS, DATA_FETCH_PENDING} from '../../../reducers/ActionTypes'

const StyledProductList = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
`

const ProductList = () => {

    // const [state, dispatch] = React.useReducer(dataReducer, initialState)

    // const products = state.data;

    // const fetchProducts = async () => {
    //     dispatch({type: DATA_FETCH_PENDING});
    //     const data = await fetchData("products");
    //     if(data === null)
    //         dispatch({type: DATA_FETCH_FAILURE})
    //     else
    //         dispatch({
    //             type: DATA_FETCH_SUCCESS,
    //             payload: {
    //                 data
    //             } 
    //         })
    // }

    // React.useEffect(fetchProducts, [])

    // console.log("initial State: ", state);

    const { state } = React.useContext(ProductContext)

    const products = state.data;

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
            {products && products.length !==0 && products.map(product => <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl}/>)}
        </StyledProductList>
    )
}

export default ProductList
