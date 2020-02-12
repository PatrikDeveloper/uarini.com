import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Wrapper = styled.div`
  padding: 20px 10px;
  text-align: center;
  background-color: #24292e;
`;

const WrapperImage=styled.span`
  display: inline-block;
  vertical-align: top;
  text-align: left;
  width: 400px;
  height: 400px;
  background-color: #ccc;
`;

export default function Contact() {
  return (
    <Wrapper>
      <WrapperImage></WrapperImage>
      <Form />
    </Wrapper>
  );
}