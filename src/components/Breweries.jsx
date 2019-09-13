
import React from 'react';
import Beers from './Beers';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Brewers(props) {
  var titleStyle = () => {
    return {
      fontSize: '30px',

    };
  };
  var divStyle = () => {
    return {
      textAlign: 'center',
      fontSize: '20'
    };
  };
  return (
    <div style={divStyle()}>
      <Link style={titleStyle()} to={`/${props.link}`}><button className='btn btn-outline-dark btn-lg'>{props.name}</button></Link><br></br>
      {props.beers.map((beer, index) =>
        <Beers name={beer.name}
          description={beer.description}
          abv={beer.abv}
          imgurl={beer.imgurl}
          key={index} />
      )}
    </div>
  );
}

Brewers.PropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  // imgurl: PropTypes.string,
  Beers: PropTypes.array
};


export default Brewers;