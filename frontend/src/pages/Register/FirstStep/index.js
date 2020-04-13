import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import { Row2Col } from '../components/Row2Col';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  cpf: Yup.string().required('O CPF é obrigatório'),
  rg: Yup.string().required('O RG é obrigatório'),
})

export default function FirstStep() {
  async function handleSubmit(data) {
    history.push('/register/2', data);
  }

  return (
    <>
      <h1>Registrar-se</h1>
      <p>
        Nos dê algumas informações para que possamos lhe dar acesso
        gratuito à plataforma Scient.
      </p>

      <Form onSubmit={handleSubmit} schema={schema}>
        <label htmlFor="name">Nome completo</label>
        <Input name="name" placeholder="ex: Joaozinho Tavares" />

        <label htmlFor="email">E-mail</label>
        <Input
          name="email"
          type="email"
          placeholder="ex: joaozinho@hotmail.com"
        />

        <label htmlFor="email">Senha</label>
        <Input
          name="password"
          type="password"
          placeholder="ex: minhasenhasegura"
        />

        <Row2Col>
          <section>
            <label htmlFor="cpf">CPF</label>
            <Input name="cpf" placeholder="ex: 012345678-90" />
          </section>

          <section>
            <label htmlFor="rg">RG</label>
            <Input name="rg" placeholder="ex: 0123456" />
          </section>
        </Row2Col>

        <button type="submit">Continuar</button>
      </Form>

      <Link to="/login">
        Já tem uma conta?
        <strong>Entre agora</strong>
      </Link>
    </>
  );
}
