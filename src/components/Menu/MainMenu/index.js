import React from 'react';
import * as S from './styles';
import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';

const menuItems = [
  {
    id: 1,
    label: 'Home',
    route: "#",
  },
  
  {
    id: 2,
    label: 'Sobre',
    route: "#section-about",
  },

  {
    id: 3,
    label: 'Produtos',
    route: "#section-products",
  },

  {
    id: 4,
    label: 'Contato',
    route: "#section-contact",
  }
];


export default function MainMenu() {
  return(
    <div>
      <S.Wrapper >
        <S.WrapperLogo>
          <Logo />
        </S.WrapperLogo>
        <S.WrapperItems>
          {menuItems.map(function (item, key) {
            return(
              <MenuItem
                key={key}
                id={item.id}
                label={item.label}
                icon={item.icon}
                onClick={() => window.location.href = item.route}
              />
            );
          })}
        </S.WrapperItems>

      </S.Wrapper>

      <S.Spacer />
    </div>
  );
};