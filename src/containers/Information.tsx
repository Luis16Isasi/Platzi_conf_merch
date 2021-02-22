import * as React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AppContext from '../Context/AppContext';
import { information } from './types';

const InitialInformation: information = {
  fullName: '',
  email: '',
  direccion: '',
  apto: '',
  ciudad: '',
  pais: '',
  estado: '',
  codigoPostal: '',
  telefono: '',
};

const Information = () => {
  const [information, setInformation] = useState(InitialInformation);
  const { addBuyer } = useContext(AppContext);
  const history = useHistory();

  const onClickPay = () => {
    addBuyer(information);
    history.push('/Payment');
  };

  const setFormInformation = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };
  return (
    <ContentChekout>
      <Form onChange={setFormInformation}>
        <h3 style={{ fontWeight: 600, margin: '5px 0px' }}>
          Información de Contacto
        </h3>
        <Input name="fullName" type="text" placeholder="Nombre Completo" />
        <Input name="email" type="text" placeholder="Email" />
        <Input name="direccion" type="text" placeholder="Dirección" />
        <Input name="apto" type="text" placeholder="Apto" />
        <Input name="ciudad" type="text" placeholder="Ciudad" />
        <Input name="pais" type="text" placeholder="Pais" />
        <Input name="estado" type="text" placeholder="Estado" />
        <Input name="codigoPostal" type="text" placeholder="Codigo postal" />
        <Input name="telefono" type="text" placeholder="telefono" />
      </Form>
      <div
        style={{
          display: 'flex',
          flexFlow: 'wrap row',
          justifyContent: ' space-evenly',
          width: '100%',
        }}
      >
        <Link
          to="/Checkout"
          style={{
            textDecoration: 'none',
            fontSize: '16px',
            padding: '6px 10px',
            backgroundColor: 'tomato',
            borderRadius: '5px',
            color: 'white',
          }}
        >
          Regresar
        </Link>
        <button
          onClick={onClickPay}
          style={{
            textDecoration: 'none',
            fontSize: '16px',
            padding: '6px 10px',
            backgroundColor: 'tomato',
            borderRadius: '5px',
            color: 'white',
          }}
        >
          Pagar
        </button>
      </div>
    </ContentChekout>
  );
};

const ContentChekout = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  height: auto;
  & > * {
    margin: 10px 0px;
  }
`;

const Form = styled.form`
  height: 400px;
  max-width: 430px;
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-flow: wrap column;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  height: 25px;
  width: 80%;
  padding: 3px 5px;
`;

export default Information;
