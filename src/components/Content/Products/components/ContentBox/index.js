import React from 'react';
import * as S from './styles';
import ItemsBox from './ItemsBox';


export default function ContentBox() {
  return (
    <S.Wrapper>
      <S.BoxProduct>
        <ItemsBox />
      </S.BoxProduct>
    </S.Wrapper>
  );
};