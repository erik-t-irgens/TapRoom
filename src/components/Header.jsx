import React from 'react';
import { Link } from 'react-router-dom';


function Header() {

  var headerStyle = () => {
    return {
      textAlign: 'center',
      backgroundColor: '#ebab34'
    };
  };

  var headerButtonStyle = () => {
    return {
      textAlign: 'center',
      fontSize: '36',
      width: '50vw'
    };
  };

  return (
    <div>
      <div style={headerStyle()} className='alert'>
        <Link to="/"><button style={headerButtonStyle()} className='btn btn-outline-dark btn-lg'>The Tap Room</button></Link><hr></hr>
        <Link to="/brewerslist"><button className="btn btn-dark">Breweries</button></Link>
        <Link to="/newbeerform"><button className="btn btn-dark">Add New Beer</button></Link>
      </div>
    </div>
  );
}

export default Header;
