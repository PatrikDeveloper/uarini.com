import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Image = styled.img`
  width: 100%;  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


const Title = styled.span`
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, .6);
  margin-top: 250px;
  text-align: center;
  width: 100%;
  color: white;
  position: absolute;
  font-size: 36px;
  font-weight: 400;
  text-shadow: 1px 1px 1px #FAFAFA;
  font-family: 'Abril Fatface', cursive;
  letter-spacing: .2em;
`;

export default function Images(props) {
  return(
    <Wrapper>
      <Title>De Manaus Para o Mundo</Title>
      <Image src={props.img} alt='' />
    </Wrapper>
  );
}