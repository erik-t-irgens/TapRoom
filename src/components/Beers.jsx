import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  var imgStyle = () => {
    return  {
      height: '100',
      width : 'auto'
    };
  };

  var beerStyle = () => {
    return  { 
      border : '5px solid lightgray',
      borderRadius: '5',
      color : 'white',
      width : '200px',
      backgroundColor : '#32a852',
      display : 'inline-block',
      marginLeft : '5px',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'relative',
      top: '0',
      left: '0'
    };
  };

  
  return (
    <div style = {beerStyle()}>
      <img style = {imgStyle()} src={props.imgurl} alt = {`img of ${props.name}`}/>
      <p>{props.name}</p>
      <p>{props.abv}</p>
      <p>{props.description}</p>
    </div>
  );
}

Beer.PropTypes= {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  imgurl: PropTypes.string
};

export default Beer;