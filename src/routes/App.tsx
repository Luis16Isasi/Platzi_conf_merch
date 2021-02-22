import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import {
  Checkout,
  Home,
  Information,
  NotFound,
  Payment,
  Success,
} from '../containers/index';
import Layout from '../components/Layout';
import MyContext from '../Context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../index.css';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Lato', sans-serif;
  }
`;

const App = () => {
  const {
    state,
    addToCart,
    removeFromCart,
    addBuyer,
    addNewOrder,
  } = useInitialState();
  return (
    <MyContext.Provider
      value={{ state, addToCart, removeFromCart, addBuyer, addNewOrder }}
    >
      <Router>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Checkout">
              <Checkout />
            </Route>
            <Route exact path="/Information">
              <Information />
            </Route>
            <Route exact path="/Payment">
              <Payment />
            </Route>
            <Route exact path="/Success">
              <Success />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
