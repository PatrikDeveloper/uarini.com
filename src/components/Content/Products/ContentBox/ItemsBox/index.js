import React from 'react';
import * as S from './styles';

export default function ItemsBox() {
  return (
    <S.Wrapper>
      <S.WrapperImg>
        <S.Image />
      </S.WrapperImg>

      <S.Content>
        <S.Icon />
        <S.Label>Farinha Uarini</S.Label>
      </S.Content>
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
        <S.Label>Entrega em SP</S.Label>
      </S.Content>

      <S.Button>
        <h1>25,00 kg</h1>
        <button>Entre em Contato Conosco</button>
      </S.Button>
    </S.Wrapper>
    
  );
};