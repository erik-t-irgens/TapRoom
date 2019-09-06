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
        <Brewer name={brewer.name}
          beers={brewer.beers}
          key={index}/>
                
      )}
    </div>
  );
}

export default BrewersList;