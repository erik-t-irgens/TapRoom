import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  var footerStyle = () => {
    return {
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'black',
      opacity: '0.7',
      fontSize: '10'
    };
  };

  return (
    <div>
      <div style={footerStyle()}>
        <br />
        <p>&#169;Tap Room - 2019 - <span id="datetime"></span> | <Link to="/privatepolicy">Private Policy</Link></p>
      </div>
    </div>
  );
}


export default Footer;
