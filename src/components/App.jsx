import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import BrewersList from './BrewersList';
import PropTypes from 'prop-types';
import Data from './Data';
import Brewers from './Breweries';
import Error404 from './Error404';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/brewerslist' component={BrewersList} />
        <Route exact path='/aslan' 
          render = {(props) => <Brewers 
            name = {Data()[0].name}
            items = {Data()[0].beers[0]}
            isAuthed = {true}
          />}/>
        <Route exact path='/elysian' 
          render = {(props) => <Brewers 
            name = {Data()[1].name}
            items = {Data()[1].beers}
            isAuthed = {true}
          />}/>
        <Route exact path='/redhook' 
          render = {(props) => <Brewers 
            name = {Data()[2].name}
            items = {Data()[2].beers}
            isAuthed = {true}
          />}/>
        <Route exact path='/optimism' 
          render = {(props) => <Brewers 
            name = {Data()[3].name}
            items = {Data()[3].beers}
            isAuthed = {true}
          />}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
