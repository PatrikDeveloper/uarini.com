import React from 'react';
import * as S from './styles';
import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';


export default function MainMenu() {
  return(
    <S.Wrapper>
      <Logo />
      <MenuItem />
    </S.Wrapper>
  );
};