import React from 'react';
import { BrowserRouter as Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from '../view/HomePage';
import About from '../view/About';

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><HomePage/></Route>
          <Route exact path='/about'><About /></Route>
          <Route exact path='/products'><div>@TODO Products</div></Route>
          <Route exact path='/contact'><div>@TODO Contact</div></Route>
          <Route><div>Pagina não encontrada</div></Route>
        </Switch> 
      </BrowserRouter>
    </div>
  )
}
