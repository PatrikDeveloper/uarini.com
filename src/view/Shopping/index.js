import React from 'react';
import Page from '../../components/Page';
import Content from '../../components/Content';
import BuyProduct from './BuyProduct';



export default function Shopping(){
  return (
    <Page currentMenu="Shopping">
      <Content id='content'>
        <BuyProduct />
      </Content>
    </Page>
  );
};