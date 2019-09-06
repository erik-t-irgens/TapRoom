import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Breweries from './Breweries';
import HomePage from './HomePage';
import Header from './Header';
import Error404 from './Error404';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/breweries' component={Breweries} />
        <Route exact path='/breweries' component={SecondLink} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
