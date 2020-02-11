import React from 'react';
import * as S from './styles';
import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';

const menuItems = [
  {
    id: 1,
    label: 'Home',
    route: null,
  },
  
  {
    id: 2,
    label: 'Sobre',
    route: null,
  },

  {
    id: 3,
    label: 'Produtos',
    route: null,
  },

  {
    id: 4,
    label: 'Contato',
    route: null,
  }
];

export default function MainMenu() {
  return(
    <S.Wrapper >
      <S.WrapperLogo>
        <Logo />
      </S.WrapperLogo>
      <S.WrapperItems>
        {menuItems.map(function (props, key) {
          return(
            <MenuItem
              key={key}
              id={props.id}
              label={props.label}
              icon={props.icon}
            />
          );
        })}
      </S.WrapperItems>

    </S.Wrapper>
  );
};