import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';
// import Stout from '../assets/img/stout.jpg';

// var mainTapList = [
//   {
//     img: Stout,
//     name: 'Stout',
//     brand: 'Backwoods Brewing',
//     price: '$6',
//     abv: '7.2%',
//   },
//   {
//     img: Stout,
//     name: 'Lager',
//     brand: 'Backwoods Brewing',
//     price: '$6',
//     abv: '5.2%'
//   },
//   {
//     img: Stout,
//     name: 'IPA',
//     brand: 'Backwoods Brewing',
//     price: '$7',
//     abv: '9.2%'
//   }
// ];

function TapList(props) {
  return (
    <div className="container">
      <div className="row">
        {Object.keys(props.tapList).map(function (tapId) {
          var tap = props.tapList[tapId];
          return <Tap 
            img={tap.img}
            name={tap.name}
            brand={tap.brand}
            price={tap.price}
            abv={tap.abv}
            key={tapId}
            tapId={tapId} />; })}
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
};

export default TapList;
