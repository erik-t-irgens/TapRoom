import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div>
      <div id="footerbar">
        <p>&#169;Tap Room - 2019 - <span id="datetime"></span> | <Link to="/privatepolicy"><button class="nav-button">Private Policy</button></Link></p>
      </div>
    </div>
  );
}


export default Footer;
