import React from 'react';
import * as S from './styles';


export default function MenuItem(item) {
  return (
    <S.Wrapper>
        <S.Label>{item.label}</S.Label>
    </S.Wrapper>
  );
};