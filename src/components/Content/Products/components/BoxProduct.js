import React from 'react';
import styled from 'styled-components';
import SectionProduct from './SectionProduct';
import Farinha from './../../../../assets/img/ovinha.jpg';
import FarinhaBranca from './../../../../assets/img/farinha-branca.png';
import Acai from './../../../../assets/img/acai-amazonas.jpg';
import Castanha from './../../../../assets/img/castanha-para.jpg';
import Tucuma from './../../../../assets/img/tucuma.jpg';


const Wrapper = styled.div`
  padding: 20px;
`;

const boxSections = [
  {
    id: 1,
    title: 'Farinha',
    type: 'Uarini Ovinha do Amazonas',
    route: null,
    background:null ,
    media: Farinha,
    price: 25.00,

  },

  {
    id: 2,
    title: 'Farinha',
    type: 'Uarini Branca do Amazonas',
    route: null,
    background: null,
    media: FarinhaBranca,
    price: 25.00,
  },

  {
    id: 3,
    title: 'Açaí',
    type: 'Açaí do Amazonas',
    route: null,
    background: null,
    media: Acai,
    price: 10.00,
  },

  {
    id: 4,
    title: 'Castanha',
    type: 'Castanha do Pará',
    route: null,
    background: null,
    media: Castanha,
    price: 10.00,
  },

  {
    id: 5,
    title: 'Tucumã',
    type: 'Tucumã do Amazonas',
    route: null,
    background: null,
    media: Tucuma,
    price: 10.00,
  },


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
            media={props.media}
          />
        )
      })}
    </Wrapper>
  );
}