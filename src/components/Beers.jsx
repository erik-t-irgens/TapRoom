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
      color : 'black',
      width : '200px',
      backgroundColor : 'darkgray',
      display : 'inline-block',
      height: '200px',
      marginLeft : '5px',
      alignItems: 'center',
      alignSelf: 'center'
    };
  };

  
  return (
    <div style = {beerStyle()}>
      <img style = {imgStyle()} src={props.imgurl} alt = {`img of ${props.name}`}/>
      <p>{props.name}</p>
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