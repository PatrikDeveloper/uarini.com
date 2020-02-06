import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  
`;

const WrTitle = styled.div`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  background: red;
`;

const Description = styled.div`
  padding: 15px 5px;
  display: inline-block;
  vertical-align: top;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background: #ccc;
  float: left;
`;

const image = styled.div``;

const Label = styled.div`
  font-size: 14px;
  font-family: arial;
  float: left;
  margin-right: 5px;
`;


export default function DescriptionProduct() {
  return (
    <Wrapper>
      <WrTitle>Farinha</WrTitle>
      <Description>
        <Icon />
        <Label>De:</Label>
        <Label>Manaus</Label> 
      </Description>
      <Description>
        <Icon />
        <Label>Tipo:</Label>
        <Label>Ovinha</Label> 
      </Description>
    </Wrapper>    
  );
}