import React from 'react';
import About from '../components/Content/About';
import { BrowserRouter as Route, Switch, BrowserRouter} from 'react-router-dom';
import Products from '../view/Products';
import Contact from '../view/Contact';
import Banner from '../view/Banner';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Banner} />
        <Route path='/' component={About} />
        <Route path='/' component={Products} />
        <Route path='/' component={Contact} />
      </Switch> 
    </BrowserRouter>
  )
}
