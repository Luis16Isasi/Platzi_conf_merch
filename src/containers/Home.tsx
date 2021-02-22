import * as React from 'react';

import styled from 'styled-components';

import Product from '../components/Product';
import products from '../data';

const StyleContentProduct = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-evenly;
  padding: 20px;
`;

const Home = () => {
  const renderProducts = () =>
    products.products.map((product) => (
      <Product key={product.id} product={product} />
    ));

  return <StyleContentProduct>{renderProducts()}</StyleContentProduct>;
};

export default Home;
