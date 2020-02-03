import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.img`
  width: 100%;  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


export default function Images(props) {
  return(
    <Wrapper src={props.img} alt=''   />
  );
}