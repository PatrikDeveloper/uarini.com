import React from 'react';
import * as S from './styles';
import TitleAbout from './components/Title';
import BoxAbout from './components/BoxAbout';

export default function About() {
  return (
    <S.Wrapper>
      <TitleAbout 
        title = {'Sobre Nós'}
      />
      <BoxAbout />
    </S.Wrapper>
  );
}