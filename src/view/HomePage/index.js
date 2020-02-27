import React from 'react';
import Page from '../../components/Page';

import Banner from '../../components/Banner';
import Products from '../../components/Products';
import About from '../../components/About';
import Contact from '../../components/Contact';


export default function HomePage(){
  return (
    <Page>
      <Banner  />
      <About />
      <Products/>
      <Contact />
    </Page>
  );
};