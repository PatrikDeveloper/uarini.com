import React from 'react';
import * as S from './styles';
import ItemsFooter from './items/Items';
import Home from './../../assets/svg/home.svg';
import Configuration from './../../assets/svg/configuration.svg';
import Delivery  from './../../assets/svg/delivery.svg';

const items = [
  {
    id: 1,
    icon: Home,
    label: 'Sobre'
  },

  {
    id: 2,
    icon: Configuration,
    label: 'Produtos'
  },

  {
    id: 3,
    icon: Delivery,
    label: 'Entrega Para toda São Paulo',
  }
  
]

export default function Footer() {
  return (
    <S.Wrapper>
      {items.map(function (props, key) {
        return (
          <ItemsFooter 
            key={key}
            id={props.id}
            icon={props.icon}
            label={props.label}
          />
        );
      })}
      <S.Infor>Protegido por direitos autorais Uarini.com. Todos os direitos reservados. © 2020.</S.Infor>
    </S.Wrapper>
  );
}