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
    route: null,
    items:[
      {
        id: 1,
        type: 'Uarini Ovinha',
        img: null,
        location: 'Manaus',
        price: 25.00,
      },
      {
        id: 2,
        type: 'Uarini Dagua',
        img: null,
        location: 'Manaus',
        price: 25.00,
      }
    ]
  },
  {
    id: 2,
    title: 'Açai',
    route: null,
    items: [
      {
        id: 1,
        title: 'Açai do Amazonas',
        img: null,
        origem: 'Manaus',
      }
    ]
  }
]

export default function BoxProducts() {
  return (
    <Wrapper>
      <SectionProduct />
    </Wrapper>
  );
}