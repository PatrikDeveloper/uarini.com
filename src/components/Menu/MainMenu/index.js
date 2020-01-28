import React from 'react';
import * as S from './styles';
import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';

const menuItems = [
  {
    id: 1,
    label: 'Home',
    icon: null,
    route: null,
  },
  
  {
    id: 2,
    label: 'Produtos',
    icon: null,
    route: null,
  },

  {
    id: 3,
    label: 'Sobre Nós',
    icon: null,
    route: null,
  },

  {
    id: 4,
    label: 'Contato',
    icon: null,
    route: null,
  }
];

console.log(menuItems);

export default function MainMenu() {
  return(
    <S.Wrapper>
      <Logo />
      <MenuItem 
        label={menuItems.label}
      />
    </S.Wrapper>
  );
};