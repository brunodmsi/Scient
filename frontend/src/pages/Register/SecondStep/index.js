import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import { Row2Col } from '../components/Row2Col';
import { IconLink } from './styles';

import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  street: Yup.string().required('A rua é obrigatória'),
  compliment: Yup.string().required('O complemento é obrigatório'),
  number: Yup.string().required('O número é obrigatório'),
  cep: Yup.string().required('O CEP é obrigatório'),
  city: Yup.string().required('A cidade é obrigatória'),
  state: Yup.string().required('O estado é obrigatório'),
})

function SecondStep({ location }) {
  async function handleSubmit(data) {
    const object = Object.assign(data, location.state);

    try {
      await api.post('/users', object);

      toast.success('Cadastro feito com sucesso! Agora entre para responder um pequeno formulario', {
        position: toast.POSITION.TOP_LEFT
      })

      history.push('/login');
    } catch ({ response }) {
      toast.error(response.data.message, {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }

  return (
    <>
      <h1>Registrar-se</h1>
      <p>
        Nos dê algumas informações para que possamos lhe dar acesso
        gratuito à plataforma Scient.
      </p>

      <Form onSubmit={handleSubmit} schema={schema}>
        <Row2Col>
          <section>
            <label htmlFor="street">Rua</label>
            <Input name="street" placeholder="ex: Rua Bacana" />
          </section>

          <section>
            <label htmlFor="compliment">RG</label>
            <Input name="compliment" placeholder="ex: Numero 123" />
          </section>
        </Row2Col>

        <Row2Col>
          <section>
            <label htmlFor="number">Apartamento/suite, casa</label>
            <Input name="number" placeholder="ex: casa 45" />
          </section>

          <section>
            <label htmlFor="cep">CEP</label>
            <Input name="cep" placeholder="01234567" />
          </section>
        </Row2Col>

        <Row2Col>
          <section>
            <label htmlFor="city">Cidade</label>
            <Input name="city" placeholder="ex: São Paulo" />
          </section>

          <section>
            <label htmlFor="state">Estado</label>
            <Input name="state" placeholder="ex: São Paulo" />
          </section>
        </Row2Col>

        <button type="submit">Finalizar</button>
      </Form>

      <IconLink>
        <Link to="/register">
          <FaArrowLeft size={16} color="#1497ee" /> Voltar
        </Link>
      </IconLink>
    </>
  );
}

export default SecondStep;
