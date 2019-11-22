import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function NavBar() {
  var titleStyle = {
    fontSize: '40px',
    marginLeft: '50px'
  };
  var listMargin = {
    marginRight: '50px'
  };
  var listStyle = {
    fontSize: '25px'
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link style={titleStyle} className="brand-logo" to="/">Brews and Barks</Link>
          <ul style={listMargin} id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link style={listStyle} to="/tap">Tap List</Link></li>
            <li><Link style={listStyle} to="/newtap">Add New</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
