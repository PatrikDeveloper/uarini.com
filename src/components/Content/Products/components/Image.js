import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  height: 150px;
  margin-bottom: 30px;
`;

const WrapperTitle = styled.div`
  padding: 5px;
  background: #ff8c00;
  color: #FAFAFA  ;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .1em;
`;


const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function Image(section) {
  
  console.log(section.image)

  return(
    <Wrapper>
      <WrapperTitle>{section.title}</WrapperTitle>
      <ImageProduct src={section.media} alt='' />
    </Wrapper>
  )
}