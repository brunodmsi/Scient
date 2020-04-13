import React from 'react';

import { Splitter, FormSection, FeatureSection } from './styles';

import Logo from '~/assets/logo.png';
import Illustraion from '~/assets/4452.jpg';
import BankImage from '~/assets/bank.png';

export default function Auth({ children }) {
  return (
    <Splitter
      split="vertical"
      pane1Style={{ width: '35%', textAlign: 'center' }}
      pane2Style={{ width: '65%' }}
    >
      <FormSection>
        <section>
          <img src={Logo} alt="Logo Scient"/>
          <p>Scient</p>
        </section>

        {children}
      </FormSection>

      <FeatureSection>
        <section>
          <img src={BankImage} alt="Banco" />
          <div>
            <h3>Criação de contas bancárias automatizadas para maior facilidade do usuário.</h3>
            <p>Utilizamos uma Inteligência Artificial que consegue mapear o que
              sabemos de você, e baseado nisso, é criada uma conta no banco que
              tem mais afinidade com o seu perfil automaticamente.
            </p>
          </div>
        </section>
        <img src={Illustraion} alt="People Banking" />
      </FeatureSection>
    </Splitter>
  )
}
