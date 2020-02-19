import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WrapperTitle = styled.div`
  background-color: rgba(0, 0, 0, .8);  
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.div`
  color: #FAFAFA;
  text-align: center;
  font-size: 42px;
  font-weight:  bold;
  text-shadow: 1px 1px 1px #CCC;
  letter-spacing: .1em;
  line-height: 500px;
  text-transform: uppercase;
`;

export default function Images(props) {
  return(
    <Wrapper>
      <WrapperTitle>
        <Title>Produtos Importados Direto da Região norte</Title>
      </WrapperTitle>
      <Image src={props.img} alt='' />
    </Wrapper>
  );
}