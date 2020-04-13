/* eslint-disable no-empty */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-escape */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { toast } from 'react-toastify';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/Scient_Logo.png';
import { Container } from '../../styles/styles';
import { Form } from './styles';
import api from '../../services/api';
import { login } from '../../services/auth';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (email.length === 0 || password.length === 0) {
      toast.error('Preencha os campos solicitados!');
    } else {
      try {
        const response = await api.post('/session', { email, password });
        toast.success('Login efetuado!');
        login(response.data.token);
        this.props.history.push('/home');
      } catch (error) {
        toast.error('E-mail ou Senha inválidos!');
      }
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Logo" />
        <br />
        <h1>Entre agora</h1>
        <spam>Coloque suas informações de acesso a conta Scient</spam>
        <Form onSubmit={this.handleSubmit}>
          <h4>E-mail</h4>
          <input
            placeholder="Digite seu e-mail"
            type="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <h4>Senha</h4>
          <input
            placeholder="Digite sua senha"
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Acessar</button>
        </Form>
        <spam id="signups">Não tem uma conta?</spam>
        <br />
        <button id="signup">
          <Link to="cadastro">Cadastre-se agora.</Link>
        </button>
      </Container>
    );
  }
}

export default withRouter(Login);
