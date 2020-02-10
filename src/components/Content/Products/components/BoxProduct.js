import React from 'react';
import styled from 'styled-components';
import SectionProduct from './SectionProduct';

const Wrapper = styled.div`
  padding: 20px;
`;

const boxSections = [
  {
    id: 1,
    title: 'Farinha',
    type: 'Uarini Ovinha',
    route: null,
    background: null,
    img: null,
    location: 'Manaus',
    price: 25.00,

  },

  {
    id: 2,
    title: 'Farinha',
    type: 'Uarini Branca',
    route: null,
    background: null,
    img: null,
    location: 'Manaus',
    price: 25.00,
  },

  {
    id: 3,
    title: 'Açaí',
    type: 'Açaí do Amazonas',
    route: null,
    background: null,
    img: null,
    location: 'Manaus',
    price: 10.00,
  },

  {
    id: 4,
    title: 'Castanha',
    type: 'Castanha do Pará',
    route: null,
    background: null,
    img: null,
    location: 'Pará',
    price: 10.00,
  }

]

export default function BoxProducts() {
  return (
    <Wrapper>
      {boxSections.map(function (props, key){
        return (
          <SectionProduct
            key={key}
            id={props.id}
            type={props.type}
            title={props.title}
            location={props.location}
            price={props.price}
          />
        )
      })}
    </Wrapper>
  );
}