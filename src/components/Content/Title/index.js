import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  margin: 50px 0;
  text-align: center;
`;

const Title = styled.span`
  border-bottom: 3px solid #000;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: ${about => about.color};
`;

export default function TitleAbout(about) {
  return (
    <Wrapper>
      <Title color={about.color}>{about.title}</Title>
    </Wrapper>
  );
}