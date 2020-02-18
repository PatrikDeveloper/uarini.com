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
  background: ${section => section.background};
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: .3s;
`;

export default function Items(section) {
  return (
    <Wrapper>
      <Title>{section.type}</Title>
      <Price>R$ {section.price}</Price>
      <Button background={section.background}>Solicitar</Button>
    </Wrapper>    
  );
}