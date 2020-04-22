import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import { Context } from '~/context/AuthContext';

import { Container, Items, Footer, ProgressBar } from './styles';

import Icon from '~/components/Icon';
import logo from '~/assets/logo.png';

export default function SideBar({ text, progression }){
  const { loggedInUserInfo } = useContext(Context);

  const user = loggedInUserInfo();

  return(
    <Container>
      <Items>
        <header>
          <img src={logo} alt="Logo Scient"/>
          <p>Scient</p>
        </header>

        <ProgressBar
          value={progression}
          text={text ? text : 'Carregando...'}
          maxValue={1}
          styles={buildStyles({
            textSize: '14px'
          })}
        />

        <div>
          <h3>Questionario</h3>
          <p>Complete este questionario para que possamos fazer a melhor escolha baseada nas suas necessidades.</p>
        </div>

        <span />
      </Items>

      <Footer>
        <div>
          <Icon icon="FiUser" size={20} color={'#6c6c80'} />
          <span>{user.name}</span>
        </div>

        <div>
          <Icon icon="FiMail" size={20} color={'#6c6c80'} />
          <span>{user.email}</span>
        </div>
      </Footer>
    </Container>
  )
}

SideBar.propTypes = {
  progression: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}
