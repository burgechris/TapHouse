import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props) {
  return (
    <div>
      <h1>Ops! {props.location.pathname} does not exist!</h1>
      <h4>Go<Link to='/'>Home</Link></h4>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
