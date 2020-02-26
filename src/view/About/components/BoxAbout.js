import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import ContentAbout from './ContentAbout';
import Person from './../../../../assets/img/rede.png';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: left;
  margin-top: 30px;
`;

const contentAbout = [
  {
    id: 1,
    title: 'Quem Somos',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting   industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
]


export default function BoxAbout() {
  return (
    <Wrapper className='Wrap-boxAbout'>
      <Image 
        background={Person}
      />
      {contentAbout.map(function(props, key) {
        return(
          <ContentAbout 
            key={key}
            title={props.title}
            text={props.text}
          />
        )
      })}
    </Wrapper>
  )
};