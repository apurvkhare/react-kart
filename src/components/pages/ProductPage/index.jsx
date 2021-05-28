/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import { getProductDetails } from '../../../Reactkart.service';
import { fetchTypes } from '../../../reducers/ProductsReducer';
import { useFetchData } from '../../../utils/Utility';

const StyledProductPage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProductPage = () => {
  const { productId } = useParams();

  const state = useFetchData(getProductDetails, productId);

  const { imageUrl, ...productData } = state.data;

  console.log('state: ', productData);

  if (state.fetching === fetchTypes.pending) {
    return (
      <div style={{ textAlign: 'center' }}>
        {/* <Skeleton animation="wave" variant="rect" width={250} height={450}/>
          <Skeleton animation="wave" variant="rect" width={250} height={450}/>
          <Skeleton animation="wave" variant="rect" width={250} height={450}/>
          <Skeleton animation="wave" variant="rect" width={250} height={450}/> */}
        Loading...
      </div>
    );
  }

  if (state.fetching === fetchTypes.rejected)
    return <h2 style={{ textAlign: 'center' }}>{state.error}</h2>;

  return (
    <StyledProductPage>
      <ProductImage imgUrl={imageUrl} />
      <ProductDetails {...productData} />
    </StyledProductPage>
  );
};

export default ProductPage;
