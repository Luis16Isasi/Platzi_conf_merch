import * as React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import AppContext from '../Context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);

  const renderPedidos = () => {
    return state.cart.map((product) => {
      return (
        <LiPedido key={product.id}>
          <p>{product.title}</p>
          <div>
            <p>{`$${product.price}`}</p>
            <BtnDelete onClick={() => removeFromCart(product)}>
              <i className="fas fa-trash-alt"></i>
            </BtnDelete>
          </div>
        </LiPedido>
      );
    });
  };

  const totalPrice = () => {
    let total = 0;
    state.cart.forEach((product) => {
      total = total + product.price;
    });

    return total;
  };

  return (
    <ContentCheckout>
      <ContentPedidos>
        {state.length ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos..</h3>}
        <ul>{renderPedidos()}</ul>
      </ContentPedidos>
      <ContentPriceContinue>
        <h3>{`Precio Total $ ${totalPrice()}`}</h3>
        <Link
          to="/Information"
          style={{
            textDecoration: 'none',
            fontSize: '16px',
            padding: '6px 10px',
            backgroundColor: 'tomato',
            borderRadius: '5px',
            color: 'white',
          }}
        >
          Continuar Pedido
        </Link>
      </ContentPriceContinue>
    </ContentCheckout>
  );
};

const StyleFlexRow = css`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-around;
  align-items: center;
`;

const ContentCheckout = styled.div`
  margin: auto;
  width: 80%;
`;

const ContentPedidos = styled.div`
  height: auto;
  padding: 10px;
  & > h3 {
    font-weight: 600;
  }
`;

const ContentPriceContinue = styled.div`
  ${StyleFlexRow}
  height: 50px;
`;

const LiPedido = styled.li`
  ${StyleFlexRow} {
    justify-content: space-between;
  }
  margin: 8px;
  border-bottom: 1px solid #dadadf;

  & > div {
    ${StyleFlexRow} {
      justify-content: space-between;
    }
    width: 70px;
  }
`;

const BtnDelete = styled.button`
  font-size: 16px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  color: #000000;

  &:hover {
    color: #747171;
    cursor: pointer;
  }
`;

export default Checkout;
