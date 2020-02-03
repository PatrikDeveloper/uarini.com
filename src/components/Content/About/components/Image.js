import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: auto;
`;

const WrImage = styled.div`
  width: 350px;
  height: 300px;
  background: black;
  margin-bottom: 20px;
`;

export default function Image() {
  return (
    <Wrapper>
     <WrImage>t</WrImage>
    </Wrapper>
  )
}