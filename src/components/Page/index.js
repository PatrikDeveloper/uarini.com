import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Menu/MainMenu';
import Footer from '../Footer';

const Wrapper = styled.div`
  
`;

export default function Page(props) {
  return (
    <Wrapper>
      <MainMenu />
      {props.children}
      <Footer />
    </Wrapper>
  );
};