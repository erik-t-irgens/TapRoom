import React from 'react';
import Data from './Data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HomePage() {

  var homeStyles = () => {
    return {
      textAlign: 'center',
      borderRadius: '50%',
      height: '60vw',
      width: '60vw',
      marginLeft: '20vw',
      marginRight: '20vw',
      backgroundColor: '#616161',
      color: 'white',
      verticalAlign: 'middle'
    };
  };
  return (
    <div style={homeStyles()}>
      {Data().map}
      <p>home page</p>
    </div>

  );
}

export default HomePage;
