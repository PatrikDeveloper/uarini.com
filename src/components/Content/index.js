import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Menu/MainMenu';
import Banner from './Banner';
import Products from './Products';
import About from './About';


const Wrapper = styled.div`
  
`;


export default function Content() {
  return (
    <Wrapper>
      <MainMenu />
      <Banner  />
      <About />
      <Products />
    </Wrapper>
  );
};