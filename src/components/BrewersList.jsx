import React from 'react';
import Brewers from './Breweries';
import Data from './Data';
import PropTypes from 'prop-types';


function BrewersList(props) {
  var BrewersStyle = () => {
    return {

    };
  };

  return (
    <div>
      {props.masterBeerList.map((brewer, index) =>
        <Brewers name={brewer.name}
          link={brewer.link}
          beers={brewer.beers}
          key={index} />

      )}
    </div>
  );
}

export default BrewersList;