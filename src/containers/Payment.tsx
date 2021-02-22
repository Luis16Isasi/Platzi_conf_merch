import * as React from 'react';
import { useContext } from 'react';

import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

import AppContext from '../Context/AppContext';
import { paypalOptions, buttonStyles } from './types';

const Payment = () => {
  const history = useHistory();

  const {
    state: { cart, buyer },
    state,
    addNewOrder,
  } = useContext(AppContext);
  console.log('state:', state);

  const paypalOptions: paypalOptions = {
    clientId:
      'ARftKJGRdjgXZ_VXhlh4I3pZxK2sZ8Ofv3Gr6uBRvU3R6E5xsEsN-8IMlcTDntyTrVG-p8_E9vPvdyYq',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles: buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total = total + product.price;
    });
    return total;
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      let newOrder = { buyer, product: cart, payment: data };
      addNewOrder(newOrder);
      history.push('/Success');
    }
  };
  return (
    <div>
      <h1>Payment</h1>
      <div>
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={totalPrice()}
          onPaymentStart={() => {
            console.log('INICIANDO EL PAGO');
          }}
          onPaymentSuccess={(data) => {
            handlePaymentSuccess(data);
          }}
          onPaymentError={(error) => {
            console.log('ERROR:', error);
          }}
          onPaymentCancel={(data) => {
            console.log(data);
          }}
        />
      </div>
    </div>
  );
};

export default Payment;
