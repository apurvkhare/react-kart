import {DATA_FETCH_FAILURE, DATA_FETCH_SUCCESS, DATA_FETCH_PENDING} from './ActionTypes'

export const fetchTypes = {
    idle: 'idle',
    pending: 'pending',
    resolved: 'resolved',
    rejected: 'rejected'
}

export const initialState = {
    data: [],
    fetching: fetchTypes.idle,
    error: null
}

const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case DATA_FETCH_PENDING: 
            return{
                ...state,
                fetching: fetchTypes.pending
            }

        case DATA_FETCH_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const { data } = action.payload
            return{
                ...state,
                data,
                fetching: fetchTypes.resolved
            }

        case DATA_FETCH_FAILURE:
            return{
                ...state,
                fetching: fetchTypes.rejected,
                error: "Error Fetching Data"
            }

        default:
            return state
    }
}

export default dataReducer