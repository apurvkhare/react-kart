import React from 'react';
import { useCustomer } from '../../../context/CustomerContext';

const CartPage = () => {
  const { state } = useCustomer();

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
            <h1>item name: {item.name}</h1>
            <p>item qty: {item.qty}</p>
          </div>
        ))}
    </div>
  );
};

export default CartPage;
