import React from 'react';
import { useCustomer } from '../../../context/CustomerContext';
import { payViaRazorpay } from '../../../Reactkart.service';

const CheckoutPage = () => {
  const { state } = useCustomer();

  const handlePayment = () => {
    const rzp = payViaRazorpay();
    rzp.open();
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      {state.cart &&
        state.cart.length !== 0 &&
        state.cart.map((item) => (
          <div key={item.id}>
            <h3>item name: {item.name}</h3>
            <p>item qty: {item.qty}</p>
            <p>item price: {item.price}</p>
          </div>
        ))}

      <h3>
        Total Price:{' '}
        {state.cart.reduce((acc, item) => {
          acc += item.rawPrice;
          return acc;
        }, 0)}
      </h3>

      <h2>Enter Shipping details</h2>
      <form>
        <label htmlFor="customerName">
          Reciepeint Name:{' '}
          <input
            id="customerName"
            type="text"
            value={state.customerName}
            placeholder="Enter Order Recipient's Name"
          />
        </label>
        <label htmlFor="customerAddress">
          Reciepeint Address:{' '}
          <input
            id="customerAddress"
            type="text"
            value={state.address}
            placeholder="Enter Order Recipient's Address"
          />
        </label>
        <button type onClick={handlePayment}>
          Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
