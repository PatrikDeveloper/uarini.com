import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  margin: 50px 0;
  text-align: center;
`;

const Label = styled.span`
  border-bottom: 3px solid #000;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: ${about => about.color};
`;

export default function Title(props) {
  return (
    <Wrapper>
      <Label color={props.color}>{props.title}</Label>
    </Wrapper>
  );
}