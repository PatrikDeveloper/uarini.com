import React from 'react';
import * as S from './styles';
import Image from '../../../assets/img/ovinha.jpg';
import Forms from '../Forms';


export default function BuyProduct() {
  return (
    <S.Wrapper className='wrapper-buy'>
      <S.WrapperTitle className='wrapper-title'>
        <S.Title>UARINI OVINHA | DIRETO DA CIDADE DE MANAUS - AM</S.Title>
      </S.WrapperTitle>

      <S.WrapperMedia className='media'>
        <S.ShowCase className='show-case'>
          <S.Small img= {Image}className='small-product' />
          <S.Small img= {Image}className='small-product'/>
          <S.Small img= {Image}className='small-product'/>
          <S.Small img= {Image}className='small-product'/>
        </S.ShowCase>
        <S.BigImage img={Image}/> 
      </S.WrapperMedia>

      <S.WrapperDescription>
        <Forms />
      </S.WrapperDescription>





    </S.Wrapper>
  );
}