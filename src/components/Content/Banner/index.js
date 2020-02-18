import React from 'react';
import * as S from './styles';
import Background from './../../../assets/img/banner.jpg';
import Images from './Images';

export default function Banner() {
  return (
    <S.Wrapper>
      <Images img={Background} />
      
    </S.Wrapper>    
  );
};
