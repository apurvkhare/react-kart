import {PRODUCTS_FETCH_FAILURE, PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_PENDING} from './ActionTypes'

export const fetchTypes = {
    idle: 'idle',
    pending: 'pending',
    resolved: 'resolved',
    rejected: 'rejected'
}

export const initialProductState = {
    products: [],
    fetching: fetchTypes.idle,
    error: null
}

const productsReducer =  (state = initialProductState, action) => {
    
    switch(action.type){
        case PRODUCTS_FETCH_PENDING: 
            return{
                ...state,
                fetching: fetchTypes.pending
            }

        case PRODUCTS_FETCH_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const { products } = action.payload
            return{
                ...state,
                products,
                fetching: fetchTypes.resolved
            }

        case PRODUCTS_FETCH_FAILURE:
            return{
                ...state,
                fetching: fetchTypes.rejected,
                error: "Error Fetching Products"
            }

        default:
            return state
    }
}

export default productsReducer