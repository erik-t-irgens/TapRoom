import React from 'react';
import Brewers from './Breweries';
import Data from './Data';


function BrewersList() {
  var BrewersStyle =() => {
    return {
           
    };
  };

  return (
    <div>
      {Data().map((brewer, index) =>
        <Brewers name={brewer.name}
          link={brewer.link}
          beers={brewer.beers}
          key={index}/>
                
      )}
    </div>
  );
}

export default BrewersList;