import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import CallCenter from './../../../assets/img/contato.jpg'

const Wrapper = styled.div`
  background-color: #f6f7fb;
  display: flex;
`;

const WrapperImage = styled.div`
  flex: 0 0 40%;
  height: 400px;
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
    <Wrapper id='wrapper-contact'>
      <WrapperImage id='column-image'>
        <Image src={CallCenter} alt='CallCenter'/>
      </WrapperImage>
      <Form />
    </Wrapper>
  );
}