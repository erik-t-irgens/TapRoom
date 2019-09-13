import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  var imgStyle = () => {
    return  {
      height: '10vw',
      maxHeight: '180px'
    };
  };

  var beerStyle = () => {
    return  { 
      border : '5px solid lightgray',
      borderRadius: '5',
      color : 'white',
      width : '20vw',
      minWidth: '250px',
      display : 'inline-block',
      marginBottom: '40',
      overflow: 'auto',
      height: '500'
    };
  };

  
  return (
    <div style = {beerStyle()} className="card bg-dark">
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