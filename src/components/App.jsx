import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import BrewersList from './BrewersList';
import NewBeerForm from './NewBeerForm';
import PropTypes from 'prop-types';
import Data from './Data';
import Brewers from './Breweries';
import Error404 from './Error404';
import PrivatePolicy from './PrivatePolicy';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: Data.map(),
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer) {
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList[newBeer.brewerIndex].beers.push(newBeer);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/privatepolicy' component={PrivatePolicy} />
          <Route exact path='/brewerslist' component={BrewersList} />
          <Route path='/newbeerform' render={() => <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />} />

          <Route exact path='/aslan'
            render={(props) => <Brewers
              name={Data()[0].name}
              beers={Data()[0].beers}
              isAuthed={true}
            />} />
          <Route exact path='/elysian'
            render={(props) => <Brewers
              name={Data()[1].name}
              beers={Data()[1].beers}
              isAuthed={true}
            />} />
          <Route exact path='/redhook'
            render={(props) => <Brewers
              name={Data()[2].name}
              beers={Data()[2].beers}
              isAuthed={true}
            />} />
          <Route exact path='/optimism'
            render={(props) => <Brewers
              name={Data()[3].name}
              beers={Data()[3].beers}
              isAuthed={true}
            />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default App;
