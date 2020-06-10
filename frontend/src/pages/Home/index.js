import React, { useState } from 'react';
import { ContainerHome, ContentHome, Header, BoxLogo, BoxMenu } from './styles';
import { Menu } from '../../components';
import logo from '../../assets/logo-in8-dev.svg';

export default function Home() {

  return (
      <ContainerHome>
        <Header>
          <BoxLogo>
          <a href='#home' id='home' name='home'><img src={logo} alt='Logo IN8' /></a>
          </BoxLogo>
          <BoxMenu>
            <Menu />
          </BoxMenu>
        </Header>
        <ContentHome>
          <h1>
            <p>Estágio</p>
            <p id='sub'>Prova de Seleção</p>
          </h1>
        </ContentHome>
      </ContainerHome>
  );
}
