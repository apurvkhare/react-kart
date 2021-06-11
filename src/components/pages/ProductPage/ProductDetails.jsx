import React, { useState } from 'react';
import styled from 'styled-components';
import MuiAlert from '@material-ui/lab/Alert';
// import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import LoginPrompt from '../../common/LoginPrompt';
import { useAuth } from '../../../context/AuthContext';
import { useCustomer } from '../../../context/CustomerContext'

const StyledProductDetails = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const StyledAddToCartBtn = styled.div`
  padding: 10px;
  background-color: purple;
  color: whitesmoke;
  border-radius: 5px;
  cursor: pointer;
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProductDetails = ({ id, imgUrl, name, price, description, qty = 10 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const { currentUser } = useAuth();
  const { addToCart } = useCustomer();

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleClick = () => {
    if (currentUser === null) {
      setIsModalOpen(true);
    } else {
      const productData = {
        id,
        name,
        imgUrl,
        price,
        qty: 1
      }
      addToCart(productData)
      setSnackbarMessage('Product added to Cart');
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <StyledProductDetails>
        <h2>Product Name: {name}</h2>
        <h5>Price: {price}</h5>
        <p>
          {description ||
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat itaque expedita facere harum, necessitatibus aliquid saepe deleniti at incidunt sed vitae temporibus dolorum odio, impedit aspernatur ducimus excepturi quidem voluptatem.'}
        </p>
        <p>4.5/5</p>
        <h4>Quantity: {qty}</h4>
        <p>
          Refund Policy: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptates totam aperiam fugit atque expedita voluptatem,
          laborum, numquam libero quia, deleniti hic illo quae ad. Debitis iusto
          laudantium consequuntur modi quibusdam.
        </p>
        <p>Seller Name: Apple</p>
        <StyledAddToCartBtn onClick={handleClick}>
          Add To Cart
        </StyledAddToCartBtn>
        {isModalOpen && (
          <LoginPrompt isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </StyledProductDetails>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductDetails;
