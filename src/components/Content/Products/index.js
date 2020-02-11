import React from 'react';
import styled from 'styled-components';
import TitleAbout from '../About/components/Title';
import BoxProducts from './components/BoxProduct';

export const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;


export default function Products() {
  return (
    <Wrapper>
      <TitleAbout  
        title = {'Produtos'}
      />
      <BoxProducts />
    </Wrapper>
  );
} 