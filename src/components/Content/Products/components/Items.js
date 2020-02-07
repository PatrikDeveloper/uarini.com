import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #ccc;
  text-shadow: 1px 1px 1px #ccc;  
`;

const Price = styled.span`
  font-size: 1.71429em;
  font-weight: 800;
  color: rgba(255, 69, 0);
  
`;

const Button = styled.button`
  text-decoration: none;
  border: none;
  padding: 19px 10px;
  outline: none;
  background: #ff8c00;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: .3s;

  &:hover,:active{
    background: rgba(255,69,0);
  }
`;

export default function Items() {
  return (
    <Wrapper>
      <Title>Uarini Ovinha / Manaus- AM</Title>
      <Price>R$ 25,00</Price>
      <Button>Solicitar</Button>
    </Wrapper>    
  );
}