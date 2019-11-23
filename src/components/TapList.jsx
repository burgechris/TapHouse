import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';
import DarkBeer from '../assets/img/beer_dark.jpeg';
import Bkgrnd from '../assets/img/wood_bkgrnd.jpeg'; 

function TapList(props) {
  
  var tapListBackground = {
    backgroundImage: `url(${Bkgrnd})`,
    backgroundAttachment: 'fixed',
    height: '900px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  
  return (
    <div style={tapListBackground}>
      <div className="row">
        {Object.keys(props.tapList).map(function (tapId) {
          var tap = props.tapList[tapId];
          return <Tap
            img={DarkBeer}
            name={tap.name}
            brand={tap.brand}
            price={tap.price}
            abv={tap.abv}
            key={tapId}
            tapId={tapId} />;
        })}
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
};

export default TapList;
