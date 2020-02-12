import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const WrapperInput = styled.div`
`;

const Input = styled.input`
  width: 100%;
  background: #ffffff;
  margin-bottom: 25px;
  border-radius: 3px;
`;

const TextArea = styled.textarea`

`;

const Button = styled.button`
  border: none;
`;

export default function Form() {
  return (
    <Wrapper id='column-form'>
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