import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  var imgStyle = () => {
    return {
      height: '10vw',
      maxHeight: '180px',
      borderRadius: '5',
      marginTop: '10%'
    };
  };

  var beerStyle = () => {
    return {
      border: '5px solid lightgray',
      borderRadius: '5',
      color: 'white',
      width: '20vw',
      minWidth: '250px',
      display: 'inline-block',
      marginBottom: '40',
      overflow: 'auto',
      height: '500'
    };
  };

  var beerTitle = () => {
    return {
      fontWeight: 'bold',
      marginTop: '10',
      marginBottom: '10'
    };
  };
  var beerDescription = () => {
    return {
      fontSize: '15'
    };
  };






  return (
    <div style={beerStyle()} className="card bg-dark">
      <img style={imgStyle()} src={props.imgurl} alt={`img of ${props.name}`} />
      <p style={beerTitle()}>{props.name}</p>
      <p>{props.abv}</p>
      <p style={beerDescription()}>{props.description}</p>
    </div>
  );
}

Beer.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  imgurl: PropTypes.string
};

export default Beer;