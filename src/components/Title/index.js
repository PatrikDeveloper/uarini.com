import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper : styled.div`
    padding: 20px;
    margin: 50px 0;
    text-align: center;
  `,

  Label : styled.span`
    font-size: 36px;
    font-weight: 600;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: ${about => about.color};
    text-shadow: 1px 1px 1px #ccc;
  `,
}



export default function Title(props) {
  return (
    <S.Wrapper>
      <S.Label color={props.color}>{props.title}</S.Label>
    </S.Wrapper>
  );
}