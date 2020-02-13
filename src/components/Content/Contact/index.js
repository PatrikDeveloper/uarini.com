import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import CallCenter from './../../../assets/img/contato.png'
import Title from './../Title';

const Wrapper = styled.div`
  background-color: #fffafa;
`;

const WrapperColumn = styled.div`
  display: flex;
`;

const WrapperImage = styled.div`
  flex: 0 0 35%;
  height: 450px;
`;

const WrapperForm = styled.div`
  flex: 1;
`;

const Image = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export default function Contact() {
  return (
    <Wrapper className='wrap-contact'>
      <Title color = {'#fec63e'} title={'Contato'}/>
      <WrapperColumn className='wrap-columns'>
        <WrapperImage className='wrap-image'>
          <Image src={CallCenter} alt='CallCenter'/>
        </WrapperImage>
        <WrapperForm className='wrap-forms'>
          <Form />
        </WrapperForm>
      </WrapperColumn>
    </Wrapper>
  );
}