import React from 'react';
import { fetchData } from '../Reactkart.service';
import dataReducer, { initialState } from '../reducers/ProductsReducer';
import {
  DATA_FETCH_FAILURE,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_PENDING,
} from '../reducers/ActionTypes';

export const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(dataReducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: DATA_FETCH_PENDING });
    const data = await fetchData('products');
    if (data === null) dispatch({ type: DATA_FETCH_FAILURE });
    else
      dispatch({
        type: DATA_FETCH_SUCCESS,
        payload: {
          data,
        },
      });
  };

  React.useEffect(fetchProducts, []);

  const value = {
    state,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
