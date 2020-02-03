import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
`;

const Text = styled.span`
  display: block;
  font-size: 26px;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: #fec63e;
  letter-spacing: .1em;
`;

const Greeting = styled.span`
  display: block;
  font-size: 14px;
  font-style: italic;
`;

export default function Logo() {
  return (
    <Wrapper>
      <Text>Uarini.com</Text>
      <Greeting>Produtos Típicos Amazonenses</Greeting>
    </Wrapper>
  );
}