import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`;

const WrapperInput = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  width: 100%;
  background: #ffffff;
  padding: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
`;

const Button = styled.button`
  border: none;
`;

export default function Form() {
  return (
    <Wrapper id='column-form'>
      <h1>Contato</h1>
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