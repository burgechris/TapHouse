import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
					TapHouse
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/tap">Tap List</Link>
          </li>
          <li>
            <Link to="/new">Add New</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
