import React from 'react';
import { Link } from 'react-router-dom';


function Header(){

  var headerStyle = () => {
    return {
      textAlign: 'center'
    };
  };

  var headerButtonStyle = () => {
    return {
      textAlign: 'center',
      fontSize: '36'
    };
  };

  return (
    <div>
      
      <div style={headerStyle()} className='alert alert-success'>
        <Link to="/"><button style={headerButtonStyle()} className='btn btn-outline-dark btn-lg'>The Tap Room</button></Link><hr></hr> 
        <Link to="/brewerslist"><button className="btn btn-dark">Breweries</button></Link>
      </div>
    </div>
  );
}

export default Header;
