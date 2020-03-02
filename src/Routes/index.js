import React from 'react';
import { BrowserRouter as Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from '../view/HomePage';
import Shopping from '../view/Shopping';

export default function Routes() {
  return (
    <div>
      <BrowserRouter basename='/uarini.com'>
        <Switch>
          <Route exact path='/'><HomePage/></Route>
          <Route exact path='/shopping'><Shopping /></Route>
          <Route><div>Pagina não encontrada</div></Route>
        </Switch> 
      </BrowserRouter>
    </div>
  )
}
