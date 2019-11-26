import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Tap(props) {
  var cardStyle = {
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '500px',
    width: '350px'
  }

  function sellPint() {
    var tapId = props.id;
    props.onMinusPint(tapId);
  }

  return (
    <div className="col s12 m6 l4">
      <div style={cardStyle} className="card">
        <div className="card-image">
          <img src={props.img} />
          <span className="card-title">{props.name}</span>
          <button type="click" onClick={sellPint} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">-</i></button>
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
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  id: PropTypes.string,
  onMinusPint: PropTypes.func
};

export default Tap;