import React from 'react';
import * as S from './styles';



export default function ItemsFooter (footer) {
  return (
    <S.Wrapper className='Wrap-footer'>
      <S.WrapImage className='Wrap-Image'>
        <S.Icon src={footer.icon} alt='' />
      </S.WrapImage>
      <S.WrapLabel onClick={footer.onClick} className='Wrap-Label'>
        <S.Label className='Label'>{footer.label}</S.Label>
      </S.WrapLabel>
    </S.Wrapper>
  )
} 