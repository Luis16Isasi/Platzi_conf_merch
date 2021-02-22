import * as React from 'react';
import { useContext } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const StyledHeader = styled.header`
  background-color: #dadadf;
  height: 70px;
  width: 100%;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-around;
  align-items: center;
`;

// const Link = ({ className }) => (
//   <Link to="/Checkout" className={className}>
//     Checkout
//   </Link>
// );
// const StyledLink = styled(Link)`
//   color: blue;
//   background-color: skyblue;
//   padding: 10px;
// `;

const Header = () => {
  const { state } = useContext(AppContext);

  return (
    <StyledHeader>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          fontSize: '24px',
          fontWeight: '600',
        }}
      >
        PlatziConf Merch
      </Link>

      <Link
        to="/Checkout"
        style={{
          textDecoration: 'none',
          fontSize: '16px',
        }}
      >
        {state.cart.length}{' '}
        <i className="fas fa-shopping-cart" style={{ fontSize: '24px' }} />
      </Link>
    </StyledHeader>
  );
};

export default Header;
