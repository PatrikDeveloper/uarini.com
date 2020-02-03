import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const WrImage = styled.div`
  margin: 10px;
  padding: 5px;
  max-width: 300px;
  max-height: 350px;
`;

const Media = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function Image(props) {
  return (
    <Wrapper>
     <WrImage>
      <Media src={props.background} alt=''/>
     </WrImage>
    </Wrapper>
  )
}