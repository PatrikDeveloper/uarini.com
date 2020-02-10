import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Items from './Items';
import Farinha from './../../../../assets/img/ovinha.jpg';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
  width: 200px;
  height: 300px;
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: .3s;

  &:hover {
    box-shadow: 1px 1px 10px black;
  }
`;



export default function SectionProduct(box) {
  return (
    <Wrapper>
      <Image
        image={Farinha}
        title={box.title}
        background={box.background}
      />
      <Items
        background={box.background} 
        type={box.type}
        price={box.price}
      />
    </Wrapper>    
  );
}