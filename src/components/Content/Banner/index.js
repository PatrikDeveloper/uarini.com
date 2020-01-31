import React from 'react';
import * as S from './styles';
import Farinha from './../../../assets/img/bnr-farinha.jpg';
import Images from './Images';

export default function Banner() {
  return (
    <S.Wrapper>
      <Images img={Farinha}/>
    </S.Wrapper>    
  );
};
