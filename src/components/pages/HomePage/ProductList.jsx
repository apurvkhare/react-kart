/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
import Product from './Product';
import { fetchData } from '../../../Reactkart.service'
import { fetchTypes } from '../../../reducers/ProductsReducer'
import { useFetchData } from '../../../utils/Utility';

const StyledProductList = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
`;

const ProductList = ({ filteredProducts, setIsModalOpen }) => {

  const state = useFetchData(fetchData, 'products');

  const products = filteredProducts && filteredProducts.length !== 0 ? filteredProducts : state.data;

  if(filteredProducts.includes("no results found"))
    return <h1 style={{textAlign: "center"}}>No products found</h1>

  if (state.fetching === fetchTypes.pending) {
    return (
      <div
        style={{
          display: 'flex',
          gap: 100,
          flexWrap: 'wrap',
          padding: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Skeleton animation="wave" variant="rect" width={250} height={450} />
        <Skeleton animation="wave" variant="rect" width={250} height={450} />
        <Skeleton animation="wave" variant="rect" width={250} height={450} />
        <Skeleton animation="wave" variant="rect" width={250} height={450} />
      </div>
    );
  }

  if (state.fetching === fetchTypes.rejected)
    return <h2 style={{ textAlign: 'center' }}>{state.error}</h2>;

  return (
    <StyledProductList>
      {products &&
        products.length !== 0 &&
        products.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
    </StyledProductList>
  );
};

export default ProductList;
