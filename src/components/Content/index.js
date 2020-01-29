import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Menu/MainMenu';
import Banner from './Banner';

const Wrapper = styled(`div`)`
  
`;


export default function Content() {
  return (
    <Wrapper>
      <MainMenu />
      <Banner />
    </Wrapper>
  );
};