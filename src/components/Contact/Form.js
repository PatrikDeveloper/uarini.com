import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper : styled.div`
    padding: 0 30px;
  `,

  WrapperInput : styled.div`
    margin-top: 10px;
  `,

  Input : styled.input`
    border: 2px solid #FAFAFA;
    border-radius: 10px;
    width: 100%;
    background: #ffffff;
    padding: 15px;
    outline: none;
  `,

  TextArea : styled.textarea`
    width: 100%;
    border: 2px solid #FAFAFA;
    border-radius: 10px;
    padding: 20px 15px;
    outline: none;
  `,

  Button : styled.button`
    padding: 10px 50px;
    margin-top: 20px;
    background-color: #ff8c00;
    border: 1px solid #ff8c00;
    border-radius: 6px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  `,

  Label : styled.p`
    color: #FAFAFA;
  `
}


export default function Form() {
  return (
    <S.Wrapper id='column-form'>
      <S.Label>Preencha os dados para que nossa equipe possa entrar em contato !</S.Label>
        <S.WrapperInput id='wrapper-input'>
          <S.Input 
            type='text'  
            name='name' 
            placeholder='Digite seu nome' 
          />
        </S.WrapperInput>
        <S.WrapperInput>
          <S.Input 
            type='email' 
            name='email' 
            placeholder='Digite seu email' 
          />
        </S.WrapperInput>
        <S.WrapperInput>
          <S.Input 
            type='tel'   
            name='tel'
            placeholder='(11) 00000-0000'
          />
        </S.WrapperInput>
        <S.WrapperInput>
          <S.Input 
            type='text'
            name='endereco'
            placeholder='Av.Paulista n°222 - São Paulo'
          />
        </S.WrapperInput>
        <S.WrapperInput>
          <S.TextArea 
            type='textarea'
            name='text'
            placeholder='Mensagem'
          />
        </S.WrapperInput>
        <S.Button>Enviar</S.Button>
    </S.Wrapper>
  )
}