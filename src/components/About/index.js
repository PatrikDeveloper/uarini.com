import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import BoxAbout from './components/BoxAbout';

const Wrapper = styled.section`
  padding: 70px 0;
  background: #ff8c00;
  box-shadow: 0 1px 10px #ccc;
  text-align: center;
`;

export default function About() {
  return (
    <Wrapper id="section-about" className='Wrap-about'>
      <Title
        color = {'#FAFAFA'}
        title = {'Sobre Nós'}
      />
      <BoxAbout />
    </Wrapper>
  );
}