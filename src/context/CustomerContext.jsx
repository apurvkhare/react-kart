import React, { useContext, createContext, useReducer, useEffect } from 'react';
import CustomerReducer, { initialState } from '../reducers/CustomerReducer';
import {
  CUSTOMER_ADD_ITEM_TO_CART,
  CUSTOMER_UPDATE_CART_ITEM_QTY,
} from '../reducers/ActionTypes';

const CustomerContext = createContext();

const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
};

const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CustomerReducer, initialState);

  const addToCart = (productData) => {
    if (state.cart.find((item) => item.id === productData.id)) {
      dispatch({
        type: CUSTOMER_UPDATE_CART_ITEM_QTY,
        payload: {
          id: productData.id,
        },
      });
    } else {
      dispatch({
        type: CUSTOMER_ADD_ITEM_TO_CART,
        payload: {
          item: productData,
        },
      });
    }
  };

  const value = {
    state,
    dispatch,
    addToCart,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerProvider, useCustomer };
