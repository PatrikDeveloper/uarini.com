import React from 'react';
import styled from 'styled-components';
import ImageProduct from './ImageProduct';
import DescriptionProduct from './DescriptionProduct';

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid #000;
  border-radius: 10px;
  overflow: hidden;
`;




export default function SectionProduct() {
  return (
    <Wrapper>
      <ImageProduct />
      <DescriptionProduct />
    </Wrapper>    
  );
}