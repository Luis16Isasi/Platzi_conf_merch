import * as React from 'react';
import { useContext } from 'react';

import styled from 'styled-components';

import AppCcontext from '../Context/AppContext';
import Map from '../components/Map';
const Sucess = () => {
  const {
    state: { buyer },
  } = useContext(AppCcontext);

  console.log('Buyer:', buyer);

  return (
    <div>
      <Div>
        <h1>{`${buyer.fullName}, Gracias por tu compra`}</h1>
        <p>Tu pedido llegará en 3 dias a tu dirección</p>
      </Div>
      <DivMap>
        <Map></Map>
      </DivMap>
    </div>
  );
};

const Div = styled.div`
  background-color: skyblue;
  padding: 10px;

  > * {
    margin: 8px 4px;
    text-align: center;
  }
  > h1 {
    font-weight: 600;
    font-size: 20px;
  }
`;

const DivMap = styled.div``;

export default Sucess;
