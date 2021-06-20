import React from 'react';
import {useHistory} from 'react-router-dom'
import { useCustomer } from '../../../context/CustomerContext';

const CartPage = () => {
  const { state } = useCustomer();
  const history = useHistory();

  const handlePlaceOrder = () => {
    history.push('/checkout')
  }

  return (
    <div>
      <h1>Cart Page</h1>
      <h3>Customer Id: {state.customerId}</h3>
      <h3>Customer Name: {state.customerName}</h3>
      <h3>Cart Item:</h3>
      {state.cart &&
        state.cart.length !== 0 &&
        state.cart.map((item) => (
          <div key={item.id}>
            <h3>item name: {item.name}</h3>
            <p>item qty: {item.qty}</p>
            <p>item price: {item.price}</p>
          </div>
        ))}
      <button type onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CartPage;
