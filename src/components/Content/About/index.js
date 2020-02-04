import React from 'react';
import styled from 'styled-components';
import TitleAbout from './components/Title';
import BoxAbout from './components/BoxAbout';

const Wrapper = styled.div`
  padding: 70px 0;
  background: #ff8c00;
  box-shadow: 0 1px 10px #000;
  border-radius: 10px;
  text-align: center;
`;

export default function About() {
  return (
    <Wrapper>
      <TitleAbout 
        title = {'Sobre Nós'}
      />
      <BoxAbout />
    </Wrapper>
  );
}