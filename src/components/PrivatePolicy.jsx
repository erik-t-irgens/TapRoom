import React from 'react';
import Data from './Data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PrivatePolicy() {

  var privacyStyles = () => {
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
    <div style={privacyStyles()}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Privacy</p>
      <p>For the time being, there is no private policy. We must be taking all your data!</p>
    </div>

  );
}

export default PrivatePolicy;
