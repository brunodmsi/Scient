import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '~/services/history';

// CHANGE
import { login } from '../../services/auth';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  async function handleSubmit (data) {
    const { email, password } = data;

    try {
      const response = await api.post('/session', { email, password });

      login(response.data.token);
      history.push('/home');
    } catch ({ response }) {
      toast.error(response.data.message, {
        position: toast.POSITION.TOP_LEFT
      });
    }
  };

  return (
    <>
      <h1>Entre agora.</h1>
      <p>Coloque suas informações de acesso à sua <br /> conta Scient</p>

      <Form schema={schema} onSubmit={handleSubmit}>
        <label>E-mail</label>
        <Input placeholder="Digite seu e-mail" type="email" name="email" />

        <label>Senha</label>
        <Input placeholder="Digite sua senha" type="password" name="password" />

        <button type="submit">Entrar</button>
      </Form>

      <Link to="/register">
        Ainda não tem uma conta?
        <strong>Cadastre-se agora</strong>
      </Link>
    </>
  );
}
