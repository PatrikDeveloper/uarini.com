import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Input = styled.input`  
  margin-right: 10px;
  padding: 15px 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #ff8c00;
  outline: none;
  background: #FAFAFA;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 18px;
`;

export default function Forms() {
  return (
    <Wrapper>
      <Label>Nome:</Label>
      <Input />
      <Label>RG:</Label>
      <Input />
      <Label>CPF:</Label>
      <Input /> <br></br>
      <Label>Nome:</Label>
      <Input />
      <Label>RG:</Label>
      <Input />
      <Label>CPF:</Label>
      <Input />
    </Wrapper>
  )
}