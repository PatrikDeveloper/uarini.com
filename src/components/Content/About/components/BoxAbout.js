import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import ContentAbout from './ContentAbout';

const Wrapper = styled.div`
  
`;


export default function BoxAbout() {
  return (
    <Wrapper>
      <Image />
      <ContentAbout />
    </Wrapper>
  )
};