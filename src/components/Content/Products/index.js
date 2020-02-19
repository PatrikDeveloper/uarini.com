import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import BoxProducts from './components/BoxProduct';

export const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;
`;


export default function Products() {
  return (
    <Wrapper id='wrap-products'>
      <Title
        color = {'#ff8c00'}  
        title = {'Produtos'}
      />
      <BoxProducts />
    </Wrapper>
  );
} 