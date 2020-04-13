import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Context } from '~/context/AuthContext';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const { handleLogin } = useContext(Context);

  async function handleSubmit({ email, password }) {
    await handleLogin({ email, password });
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
