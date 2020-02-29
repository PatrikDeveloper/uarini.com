import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const WrapperTitle = styled.div`
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
  font-size: 18px;
  line-height: 25px;
  text-align: justify;
  color: #FAFAFA;
  letter-spacing: .1em;
`;



export default function ContentAbout(box) {
  return (
    <Wrapper className='Wrap-content'>
      <WrapperTitle className='Wrap-title'>
        <Title className='title'>{box.title}</Title>
      </WrapperTitle>
      <WrContent className='Wrap-contentBox'>
        <Text className='Wrap-text'>{box.text}</Text>
      </WrContent>
    </Wrapper>
  )
};