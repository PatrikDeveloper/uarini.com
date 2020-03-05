import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import CallCenter from '../../assets/img/contato.png';
import Title from '../../components/Title';

 const S = {
  Wrapper : styled.section`
    background-color: #24292e;
    padding: 30px 0;
  `,

  WrapperColumn : styled.div`
    display: flex;
  `,

  WrapperImage : styled.div`
    flex: 0 0 35%;
    height: 450px;
  `,

  WrapperForm : styled.div`
    flex: 1;
  `,

  Image : styled.img`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  `,
}



export default function Contact() {
  return (
    <S.Wrapper id='section-contact' className='wrap-contact'>
      <Title color = {'#FAFAFA'} title={'Contato'}/>
      <S.WrapperColumn className='wrap-columns'>
        <S.WrapperImage className='wrap-image'>
          <S.Image src={CallCenter} alt='CallCenter'/>
        </S.WrapperImage>
        <S.WrapperForm className='wrap-forms'>
          <Form />
        </S.WrapperForm>
      </S.WrapperColumn>
    </S.Wrapper>
  );
}