import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import BoxAbout from './components/BoxAbout';

const Wrapper = styled.div`
  padding: 70px 0;
  background: #ff8c00;
  box-shadow: 0 1px 10px #ccc;
  text-align: center;
  margin-top: 100px;
`;

export default function About() {
  return (
    <Wrapper className='Wrap-about'>
      <Title
        color = {'#FAFAFA'}
        title = {'Sobre Nós'}
      />
      <BoxAbout />
    </Wrapper>
  );
}