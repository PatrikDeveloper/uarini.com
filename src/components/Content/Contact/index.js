import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Wrapper = styled.div`
  padding: 20px 10px;
  text-align: center;
  background-color: #24292e;
`;

const WrapperImage=styled.div`
  display: inline-block;
  vertical-align: top;
  width: 400px;
  height: 400px;
  background-color: #ccc;
`;

export default function Contact() {
  return (
    <Wrapper>
      <h1>Contato</h1>
      <WrapperImage></WrapperImage>
      <Form />
    </Wrapper>
  );
}