import React from 'react';
import * as S from './styles';

export default function ItemsBox() {
  return (
    <S.Wrapper>
      <S.WrapperImg>
        <S.Image></S.Image>
        <S.Title>Farinha</S.Title>
      </S.WrapperImg>
      <S.Content>
        <S.Icon />
        <S.Label>Ovinha</S.Label>
      </S.Content>
      <S.Content>
        <S.Icon />
        <S.Label>100% Confiavel</S.Label>
      </S.Content>
      <S.Content>
        <S.Icon />
        <S.Label>Manaus - AM</S.Label>
      </S.Content>
      <S.Content>
        <S.Icon />
        <S.Label>Delivery</S.Label>
      </S.Content>
    </S.Wrapper>
  );
};