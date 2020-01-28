import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(`div`)`
  color: white;
  width: 300px;
`;

const Text = styled.span`
  font-size: 30px;
  font-style: italic;
  width: 200px;
  height: 50px;
  color: yellow;
`;

const Greeting = styled.span`
  margin-top: 10px;
  display: flex;
  font-size: 14px;
  font-style: italic;
  color: #ccc;
`;

export default function Logo() {
  return (
    <Wrapper>
      <Text>Uarini.com</Text>
      <Greeting>Produtos Típicos Amazonenses</Greeting>
    </Wrapper>
  );
}