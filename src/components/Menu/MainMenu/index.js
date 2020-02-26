import React from 'react';
import * as S from './styles';
import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';
import Routes from './../../../routes';

const menuItems = [
  {
    id: 1,
    label: 'Home',
    route: Routes,
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
              onclick={props.route}
            />
          );
        })}
      </S.WrapperItems>

    </S.Wrapper>
  );
};