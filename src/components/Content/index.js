import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Menu/MainMenu';
import Banner from '../../view/Banner';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import Footer from '../Footer';


const Wrapper = styled.div`
  
`;


export default function Content() {
  return (
    <Wrapper>
      <MainMenu />
      <Banner  />
      <About />
      <Products/>
      <Contact />
      <Footer />
    </Wrapper>
  );
};