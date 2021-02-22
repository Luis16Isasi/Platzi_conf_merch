import * as React from 'react';
import { useContext } from 'react';

import styled from 'styled-components';

import AppContext from '../Context/AppContext';

const ContentProduct = styled.div`
  height: 280px;
  width: 170px;
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #dadadf;
  border-radius: 5px;
  box-shadow: -5px 5px 5px #dadadf;
  margin: 8px;
`;

const H3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;
const Description = styled.p`
  text-align: center;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding: 8px 12px;
  border: 1px solid #dadadf;
  border-radius: 5px;
  background-color: #fa573a;
  color: #ffffff;

  &:hover {
    background-color: #c5351c;
    color: #ffffff;
  }
`;

const Product = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);
  // console.log('state:', state);

  return (
    <ContentProduct>
      <img
        src={product.image}
        alt={product.title}
        style={{
          height: '160px',
          width: '120px',
        }}
      />
      <H3>{`${product.title} $${product.price}`} </H3>
      <Description>{product.description}</Description>
      <Button
        onClick={() => {
          addToCart(product);
        }}
      >
        Agregar al carrito
      </Button>
    </ContentProduct>
  );
};

export default Product;
