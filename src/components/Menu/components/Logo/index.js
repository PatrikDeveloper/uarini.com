import React from 'react';
import styled from 'styled-components';

const S = {
   Wrapper : styled.div`
    color: white;
  `,

  Text : styled.span`
    display: block;
    font-size: 26px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    color: #fec63e;
    letter-spacing: .1em;
  `,

  Greeting : styled.span`
    display: block;
    font-size: 14px;
    font-style: italic;
  `,
}



export default function Logo() {
  return (
    <S.Wrapper>
      <S.Text>Uarini.com</S.Text>
      <S.Greeting>Produtos típicos Amazonenses</S.Greeting>
    </S.Wrapper>
  );
}