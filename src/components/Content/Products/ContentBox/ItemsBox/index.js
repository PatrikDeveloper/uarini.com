import React from 'react';
import * as S from './styles';

export default function ItemsBox() {
  return (
    <S.Wrapper>
      <S.WrapperImg>
        <S.Image />
      </S.WrapperImg>

      <S.Title >
        <S.TitleText>Farinha Ovinha</S.TitleText>
      </S.Title>

      <S.Content>
        <S.Icon />
        <S.Label>Ovinha</S.Label>
      </S.Content>

      <S.Content>
        <S.Icon />
        <S.Label>Manaus - AM</S.Label>
      </S.Content>
      
      <S.Content>
        <S.Icon />
        <S.Label>Delivery</S.Label>
      </S.Content>

      <S.Button>
        <h1>R$ 15,00 kg</h1>
      </S.Button>
    </S.Wrapper>
    
  );
};