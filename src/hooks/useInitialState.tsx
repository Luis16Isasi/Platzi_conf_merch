import { useState } from 'react';

import Data from '../data';

const useInitialState = () => {
  const [state, setState] = useState(Data);

  const addToCart = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((product) => product.id !== payload.id),
    });
  };

  const addBuyer = (payload) => {
    setState({ ...state, buyer: [...state.buyer, payload] });
  };

  const addNewOrder = (payload) => {
    setState({ ...state, orders: [...state.orders, payload] });
  };
  return { state, addToCart, removeFromCart, addBuyer, addNewOrder };
};

export default useInitialState;
