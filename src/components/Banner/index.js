import React from 'react';
import * as S from './styles';
import bannerImage from '../../assets/img/manaus.jpg';

export default function Banner() {
  return (
    <S.Wrapper>
      <S.Title>Produtos Importados Direto da Região norte</S.Title>
      <S.Overlay />
      <S.Background img={bannerImage} />
    </S.Wrapper>
  );
};
