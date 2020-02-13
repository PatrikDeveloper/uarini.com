import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 30px;
`;

const WrapperInput = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  border: 2px solid #ffd700;
  border-radius: 10px;
  width: 100%;
  background: #ffffff;
  padding: 15px;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid #ffd700;
  border-radius: 10px;
  padding: 20px 15px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 50px;
  margin-top: 20px;
  background-color: #ff8c00;
  border: 2px solid #ff8c00;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

export default function Form() {
  return (
    <Wrapper id='column-form'>
      <p>Preencha os dados para que nossa equipe possa entrar em contato !</p>
        <WrapperInput id='wrapper-input'>
          <Input 
            type='text'  
            name='name' 
            placeholder='Digite seu nome' 
          />
        </WrapperInput>
        <WrapperInput>
          <Input 
            type='email' 
            name='email' 
            placeholder='Digite seu email' 
          />
        </WrapperInput>
        <WrapperInput>
          <Input 
            type='tel'   
            name='tel'
            placeholder='(11) 00000-0000'
          />
        </WrapperInput>
        <WrapperInput>
          <Input 
            type='text'
            name='endereco'
            placeholder='Av.Paulista n°222 - São Paulo'
          />
        </WrapperInput>
        <WrapperInput>
          <TextArea 
            type='textarea'
            name='text'
            placeholder='Mensagem'
          />
        </WrapperInput>
        <Button>Enviar</Button>
    </Wrapper>
  )
}