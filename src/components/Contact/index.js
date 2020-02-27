import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import CallCenter from '../../assets/img/contato.png';
import Title from '../../components/Title';

const Wrapper = styled.section`
  background-color: #24292e;
  padding: 30px 0;
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
    <Wrapper id='section-contact' className='wrap-contact'>
      <Title color = {'#FAFAFA'} title={'Contato'}/>
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