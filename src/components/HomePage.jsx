import React from 'react';
import Data from './Data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HomePage(){
  return (
    <div>
      {Data().map}
      <p>home page</p>
    </div>
    
  );
}

export default HomePage;
