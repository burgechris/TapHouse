import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Tap(props) {
  var cardStyle = {
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '500px',
    width: '350px'
  };

  function handleSellPint() {
    props.sellPint(props.id);
  }

  return (
    <div className="col s12 m6 l4">
      <div style={cardStyle} className="card">
        <div className="card-image">
          <img src={props.img} />
          <span className="card-title">{props.name}</span>
          <button onClick={handleSellPint} className="btn-floating halfway-fab waves-effect waves-light red material-icons">Sell</button>
        </div>
        <div className="card-content">
          <li>{props.brand}</li>
          <li>Price: ${props.price}</li>
          <li>ABV: {props.abv}%</li>
          <li>Pints Left: {props.pints}</li>
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
  pints: PropTypes.number,
  id: PropTypes.number,
  sellPint: PropTypes.func
};

export default Tap;