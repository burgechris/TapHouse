import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function Tap(props) {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={props.img} />
          <span className="card-title">{props.name}</span>
          <Link to="/sell" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></Link>
        </div>
        <div className="card-content">
          <li>{props.brand}</li>
          <li>{props.price}</li>
          <li>{props.abv}</li>
        </div>
      </div>
    </div>
  );
}

Tap.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string
};

export default Tap;