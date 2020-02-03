import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px;
  text-align: center;
`;

const Title = styled.span`
  border-bottom: 3px solid black;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #fec63e;
`;

export default function TitleAbout(about) {
  return (
    <Wrapper>
      <Title>{about.title}</Title>
    </Wrapper>
  );
}