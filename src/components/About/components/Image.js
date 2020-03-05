import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper : styled.div`
    display: inline-block;
    vertical-align: top;
  `,

  WrapperImage : styled.div`
    margin: 10px;
    padding: 5px;
    max-width: 300px;
    max-height: 350px;
  `,

  Media : styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `
}

export default function Image(props) {
  return (
    <S.Wrapper className='Wrap-image'>
     <S.WrapperImage className='Wrap-media'>
      <S.Media src={props.background} alt=''/>
     </S.WrapperImage>
    </S.Wrapper>
  )
}