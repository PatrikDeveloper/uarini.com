import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper : styled.div`
    display: inline-block;
    vertical-align: top;
  `,

 WrapperTitle : styled.div`
    padding: 5px 20px;
  `,

 WrContent : styled.div`
    padding: 20px;
    text-align: justify;
    width: 800px;
  `,

  Title : styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #FAFAFA;
    text-transform: uppercase;
    letter-spacing: .1em;
  `,

  Text : styled.span`
    font-size: 18px;
    line-height: 25px;
    text-align: justify;
    color: #FAFAFA;
    letter-spacing: .1em;
  `,
}

export default function ContentAbout(box) {
  return (
    <S.Wrapper className='Wrap-content'>
      <S.WrapperTitle className='Wrap-title'>
        <S.Title className='title'>{box.title}</S.Title>
      </S.WrapperTitle>
      <S.WrContent className='Wrap-contentBox'>
        <S.Text className='Wrap-text'>{box.text}</S.Text>
      </S.WrContent>
    </S.Wrapper>
  )
};