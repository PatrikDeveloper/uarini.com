import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Items from './Items';
import Farinha from './../../../../assets/img/ovinha.jpg';

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: .3s;
  margin: auto;

  &:hover {
    box-shadow: 1px 1px 10px black;
  }
`;




export default function SectionProduct() {
  return (
    <Wrapper>
      <Image
        image={Farinha}
      />
      <Items />
    </Wrapper>    
  );
}