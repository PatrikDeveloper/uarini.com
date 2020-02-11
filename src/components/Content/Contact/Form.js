import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;
`;

const Input = styled.input`
  padding: 10px;
  display: block;
  background: #ffffff;
  margin-bottom: 25px;
  border-radius: 3px;
`;

const Button = styled.button`
`;

export default function Form() {
  return (
    <Wrapper className='wrapper-form'>
      <form>
        <Input 
          type='text'  
          name='name' 
          placeholder='Digite seu nome' 
        />
        <Input 
          type='email' 
          name='email' 
          placeholder='Digite seu email' 
        />
        <Input 
          type = 'tel'   
          name = 'tel'
          placeholder='(11) 00000-0000'
        />
        <Input 
          type='text'
          name='endereco'
          placeholder='Av.Paulista n°222 - São Paulo'
        />
        <input 
          type='textarea'
          name='area'
          placeholder='Mensagem'
        />
        <Button>Enviar</Button>
      </form>
    </Wrapper>
  )
}