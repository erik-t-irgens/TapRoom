import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div>
      <div id="footerbar">
       <p>&#169;Tap Room - 2019 - <span id="datetime"></span></p> | <Link to="/privatepolicy"><button class="nav-button">Private Policy</button></Link>
      </div>
    </div>
  );

var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

}

export default Footer;
