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
    label: 'Sobre Nós',
    icon: null,
    route: null,
  },

  {
    id: 3,
    label: 'Produtos',
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

export default function MainMenu() {
  return(
    <S.Wrapper>
      <S.WrapperLogo>
        <Logo />
      </S.WrapperLogo>
      <S.WrapperItems>
        {menuItems.map(function (props, key) {
          console.log(props.label)
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