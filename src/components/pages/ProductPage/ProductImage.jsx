import React from 'react';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  padding: 20px;
  margin: 20px;
  height: 500px;
  width: 400px;
`;

const ProductImage = ({ imgUrl = 'https://picsum.photos/400/500' }) => {
  return (
    <StyledImageContainer>
      <img src={imgUrl} alt="" height="500px" width="400px" />
    </StyledImageContainer>
  );
};

export default ProductImage;
