import React, { useState, useEffect } from 'react';

import { Container, Results } from './styles';

import api from '~/services/api';

function Result() {
  const [data, setData] = useState([]);

  useEffect(() => {
      api.get('/survey/result').then(({ data: results }) => {
        setData(results);
      });
  }, [])

  return (
    <Container>
      <h1>
        {data.length > 1
          ? `Foram selecionadas para voce ${data.length} escolhas de acordo com a sua preferencia`
          : 'Foi selecionado a melhor escolha para voce de acordo com as suas preferencias'
        }
      </h1>
      {/* ❌✔️ */}
      <Results>
        <section className="header">
          <p>Banco</p>
          <p>Saques ilimitados</p>
          <p>Transferencias gratuitas</p>
          <p>Emprestimo</p>
          <p>Conta universitaria</p>
          <p>Deposito por boleto</p>
        </section>

        {data.map(bank => (
          <section className="bank">
            <p>
              <img src={bank.logo} alt={bank.name} />
              Nubank
            </p>
            <span role="img" aria-label="icon">
              {bank.unlimited_withdraws ? '✔️' : '❌'}
            </span>
            <span role="img" aria-label="icon">
              {bank.free_ted ? '✔️' : '❌'}
            </span>
            <span role="img" aria-label="icon">
              {bank.loan ? '✔️' : '❌'}
            </span>
            <span role="img" aria-label="icon">
              {bank.university_account ? '✔️' : '❌'}
            </span>
            <span role="img" aria-label="icon">
              {bank.deposit ? '✔️' : '❌'}
            </span>
          </section>
        ))}
      </Results>
    </Container>
  )
}

export default Result;
