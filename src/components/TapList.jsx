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
        {props.tapList.map((tap, id) =>
          <Tap
            img={DarkBeer}
            name={tap.name}
            brand={tap.brand}
            price={tap.price}
            abv={tap.abv}
            pints={tap.pints}
            id={id}
            key={tap.id}
            sellPint={props.sellPint} />
        )}
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  sellPint: PropTypes.func,
  id: PropTypes.number
};

export default TapList;
