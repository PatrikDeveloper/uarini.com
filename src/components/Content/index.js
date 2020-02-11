import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Menu/MainMenu';
import Banner from './Banner';
import Products from './Products';
import About from './About';
import Contact from './Contact';


const Wrapper = styled.div`
  
`;


export default function Content() {
  return (
    <Wrapper>
      <MainMenu />
      <Banner  />
      <About />
      <Products />
      <Contact />
    </Wrapper>
  );
};