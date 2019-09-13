import React from 'react';
import Data from './Data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Untitled from '../images/Untitled Diagram.png';

function HomePage() {

  var homeStyles = () => {
    return {
      textAlign: 'center',
      borderRadius: '10',
      height: '90vw',
      width: '90vw',
      marginLeft: '5vw',
      marginRight: '5vw',
      backgroundColor: '#616161',
      color: 'white',
      verticalAlign: 'middle'
    };
  };
  var imgStyle = () => {
    return {
      width: "100%"
    };
  };
  return (
    <div style={homeStyles()}>
      {Data().map}
      <h1>Welcome</h1>
      <p>Below, observe that there is a component tree.</p>
      <img style={imgStyle()} src={Untitled}></img>
    </div>

  );
}

export default HomePage;
