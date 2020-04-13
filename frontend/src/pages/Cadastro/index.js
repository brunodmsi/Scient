/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { toast } from 'react-toastify';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/Scient_Logo.png';
import { Container } from '../../styles/styles';
import { Form } from './styles';

import api from '../../services/api';

class Cadastro extends React.Component {
  state = {
    email: '',
    name: '',
    password: '',
    confirm: '',
    rg: '',
    cpf: '',
    street: '',
    compliment: '',
    number: '',
    cep: '',
    city: '',
    state: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let r_error = false;
    const {
      email,
      name,
      password,
      confirm,
      rg,
      cpf,
      street,
      compliment,
      number,
      cep,
      city,
      state,
    } = this.state;

    if (
      email.length === 0 ||
      name.length === 0 ||
      password.length === 0 ||
      confirm.length === 0 ||
      rg.length === 0 ||
      cpf.length === 0 ||
      street.length === 0 ||
      compliment.length === 0 ||
      number.length === 0 ||
      cep.length === 0 ||
      city.length === 0 ||
      state.length === 0
    ) {
      r_error = true;
      toast.error('Preencha todos os campos!');
    } else r_error = false;

    if (password.length !== 0 && confirm.length !== 0) {
      if (password !== confirm) {
        r_error = true;
        toast.error('Senhas não coincidem!');
      } else r_error = false;
    } else r_error = false;

    if (r_error !== true) {
      try {
        const response = await api.post('/users', {
          email,
          name,
          password,
          rg,
          cpf,
          street,
          compliment,
          number,
          cep,
          city,
          state,
        });
        toast.success('Cadastro efetuado!');
        this.props.history.push('/home');
      } catch (error) {
        toast.error('Cadastro não efetivado,verifique suas informações!');
      }
    }
  };

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Container>
        <img src={logo} alt="Logo" />
        <br />
        <h1>Registrar-se</h1>
        <spam>
          <br />
          Nôs dê algumas informações para
          <br />
          que possamos lhe dar acesso <br />à plataforma Scient
        </spam>
        <Form onSubmit={this.handleSubmit}>
          <h4>Nome Completo</h4>
          <input
            placeholder="ex: João Tomé de Farias"
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <h4>E-mail</h4>
          <input
            placeholder="ex: joaotome@gmail.com"
            type="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <h4>Senha</h4>
          <input
            placeholder="ex: minhasenhasegura"
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <h4>Confirmar Senha</h4>
          <input
            placeholder="Sua senha"
            type="password"
            onChange={(e) => this.setState({ confirm: e.target.value })}
          />
          <h4>RG</h4>
          <input
            placeholder="ex: 1234567"
            type="text"
            onChange={(e) => this.setState({ rg: e.target.value })}
          />
          <h4>CPF</h4>
          <input
            placeholder="ex: 123-456-789.10"
            type="text"
            onChange={(e) => this.setState({ cpf: e.target.value })}
          />
          <h4>Endereço</h4>
          <input
            placeholder="ex: Avenida Engenheiro Oscar Americano"
            type="text"
            onChange={(e) => this.setState({ street: e.target.value })}
          />
          <h4>Complemento</h4>
          <input
            placeholder="ex: entre José Bonifácio e Castelo Branco"
            type="text"
            onChange={(e) => this.setState({ compliment: e.target.value })}
          />
          <h4>Número</h4>
          <input
            placeholder="ex: 1056"
            type="text"
            onChange={(e) => this.setState({ number: e.target.value })}
          />
          <h4>CEP</h4>
          <input
            placeholder="ex: 66584-247"
            type="text"
            onChange={(e) => this.setState({ cep: e.target.value })}
          />
          <h4>Estado</h4>
          <input
            placeholder="ex: Pará"
            type="text"
            onChange={(e) => this.setState({ state: e.target.value })}
          />
          <h4>Cidade</h4>
          <input
            placeholder="ex: Belém"
            type="text"
            onChange={(e) => this.setState({ city: e.target.value })}
          />
          <button type="submit">Continuar</button>
          <button id="signin">
            <Link to="/">Já possue uma conta?</Link>
          </button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Cadastro);
