import React, {useEffect} from 'react'
import styled from 'styled-components'
import { fetchData } from '../../../Reactkart.service'
import dataReducer, { initialState, fetchTypes } from '../../../reducers/ProductsReducer'
import {DATA_FETCH_FAILURE, DATA_FETCH_SUCCESS, DATA_FETCH_PENDING} from '../../../reducers/ActionTypes'

const CategoryItem = styled.div`
    font-size: 14px;
    width: 100px;
    cursor: pointer;
    border: 2.5px solid black;
    padding: 5px;
    border-radius: 5px;
    text-align: center;

    :hover{
        border: 2.5px solid white;
        color: whitesmoke
    }
`

const Categories = () => {

    const [state, dispatch] = React.useReducer(dataReducer, initialState)

    const categories = state.data;

    const fetchCategories = async () => {
        dispatch({type: DATA_FETCH_PENDING});
        const data = await fetchData("categories");
        if(data === null)
            dispatch({type: DATA_FETCH_FAILURE})
        else
            dispatch({
                type: DATA_FETCH_SUCCESS,
                payload: {
                    data
                } 
            })
    }

    useEffect(fetchCategories, [])

    const categoreisStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: '100%',
        height: 50,
        backgroundColor: '#98aaf5'
    }

    
    if(state.fetching === fetchTypes.pending){
        return <div style={categoreisStyle}>
              {/* <Skeleton animation="wave" variant="rect" width={250} height={450}/>
              <Skeleton animation="wave" variant="rect" width={250} height={450}/>
              <Skeleton animation="wave" variant="rect" width={250} height={450}/>
              <Skeleton animation="wave" variant="rect" width={250} height={450}/> */}
              Loading...
            </div>
    }

    if(state.fetching === fetchTypes.rejected)
        return <h2 style={{textAlign: 'center'}}>{state.error}</h2>


    return (
        <div style={categoreisStyle}>
            {categories && categories.length !== 0 && categories.map(category => <CategoryItem key={category.id}>{category.name}</CategoryItem>)}
        </div>
    )
}

export default Categories
