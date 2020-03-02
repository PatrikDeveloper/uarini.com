import React from 'react';
import * as S from './styles';


export default function BuyProduct() {
  return (
    <S.Wrapper className='wrapper-buy'>
      <S.WrapperTitle className='wrapper-title'>
        <S.Title>UARINI OVINHA | DIRETO DA CIDADE DE MANAUS - AM</S.Title>
      </S.WrapperTitle>
      <S.WrapperMedia className='media'>
        <S.ShowCase className='show-case'>
          <S.Small className='small-product' />
          <S.Small className='small-product'/>
          <S.Small className='small-product'/>
          <S.Small className='small-product'/>
        </S.ShowCase>
        <S.BigImage>s</S.BigImage>
      </S.WrapperMedia>
      <S.WrapperDescription>s</S.WrapperDescription>
    </S.Wrapper>
  );
}