import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">TapHouse</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/tap">Tap List</Link></li>
            <li><Link to="/new">Add New</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
