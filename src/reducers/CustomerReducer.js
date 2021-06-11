import {
  CUSTOMER_SET_NAME_AND_ID,
  CUSTOMER_CLEAR_DATA,
  CUSTOMER_CLEAR_CART,
  CUSTOMER_ADD_ITEM_TO_CART,
  CUSTOMER_UPDATE_CART_ITEM_QTY,
} from './ActionTypes';

export const initialState = {
  customerId: null,
  customerName: null,
  cart: [],
  wishlist: [],
  address: {},
};

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_SET_NAME_AND_ID: {
      return {
        ...state,
        customerId: action.payload.customerId,
        customerName: action.payload.customerName,
      };
    }

    case CUSTOMER_CLEAR_DATA: {
      return {
        ...state,
        ...initialState,
      };
    }

    case CUSTOMER_ADD_ITEM_TO_CART: {
      const newCart = [...state.cart, action.payload.item];
      localStorage.setItem('cart', JSON.stringify({
        customerId: state.customerId,
        cart: newCart,
      }));

      return {
        ...state,
        cart: newCart,
      };
    }

    case CUSTOMER_UPDATE_CART_ITEM_QTY: {
      const newCart = state.cart.map((item) => {
        if (item.id === action.payload.id) item.qty += 1;
        return item;
      });

      localStorage.setItem('cart', JSON.stringify({
        customerId: state.customerId,
        cart: newCart,
      }));

      return {
        ...state,
        cart: newCart,
      };
    }

    case CUSTOMER_CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};

export default CustomerReducer;
