import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <div id="nav-bar">
        <h1 id="nav-title"><Link to="/">The Tap Room</Link></h1> 
        <Link to="/breweries"><button class="nav-button">Breweries</button></Link>
        <Link to="/beers"><button class="nav-button">Beers</button></Link>
      </div>
    </div>
  );
}

export default Header;
