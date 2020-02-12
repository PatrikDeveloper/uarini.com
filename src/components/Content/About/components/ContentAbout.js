import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const WrTitle = styled.div`
  padding: 5px 20px;
`;
const WrContent = styled.div`
  padding: 20px;
  text-align: justify;
  width: 800px;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #FAFAFA;
  text-transform: uppercase;
  letter-spacing: .1em;
`;
const Text = styled.span`
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
  color: #FAFAFA;
  letter-spacing: .1em;
`;



export default function ContentAbout(box) {
  return (
    <Wrapper>
      <WrTitle>
        <Title>{box.title}</Title>
      </WrTitle>
      <WrContent>
        <Text>{box.text}</Text>
      </WrContent>
    </Wrapper>
  )
};