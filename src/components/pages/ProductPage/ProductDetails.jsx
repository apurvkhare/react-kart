import React, { useState } from 'react';
import styled from 'styled-components';
import LoginPrompt from '../../common/LoginPrompt';

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
`

const ProductDetails = ({ name, price, description, qty = 10 }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => setIsModalOpen(true)

  return (
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
        Refund Policy: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates totam aperiam fugit atque expedita voluptatem, laborum,
        numquam libero quia, deleniti hic illo quae ad. Debitis iusto laudantium
        consequuntur modi quibusdam.
      </p>
      <p>Seller Name: Apple</p>
      <StyledAddToCartBtn onClick={handleClick}>Add To Cart</StyledAddToCartBtn>
      {isModalOpen && <LoginPrompt isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>}
    </StyledProductDetails>
  );
};

export default ProductDetails;
