import React from 'react';
import * as S from './styles';
import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';
import menuItems from './menuItems';

// elementSelector is an element id like #section-about
function moveScroll(elementSelector) {
  const element = document.querySelector(elementSelector);
  // offsetTop is 
  const position = element.offsetTop;
  // window.scrollTo(0, position);
  window.scroll({
    top: position,
    behavior: 'smooth',
  });
}

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
                onClick={() => moveScroll(item.route)}
              />
            );
          })}
        </S.WrapperItems>

      </S.Wrapper>

      <S.Spacer />
    </div>
  );
};