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


const Title = styled.div`
  position: absolute;
  margin-top: 250px;
  width: 100%;
  padding: 30px;
  color: #FAFAFA;
  background-color: rgba(0, 0, 0, .6);
  text-transform: uppercase;
  text-align: center;
  font-size: 40px;
  font-weight:  bold;
  text-shadow: 1px 1px 1px #CCC;
  font-family: 'Coda Caption', sans-serif;
  letter-spacing: .1em;
`;

export default function Images(props) {
  return(
    <Wrapper>
      <Title>De Manaus Para o Mundo</Title>
      <Image src={props.img} alt='' />
    </Wrapper>
  );
}