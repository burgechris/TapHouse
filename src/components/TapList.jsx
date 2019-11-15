import React from 'react';
import Tap from './Tap';
import Stout from '../assets/img/stout.jpg';

var tapList = [
  {
    img: Stout,
    name: 'Stout',
    brand: 'Backwoods Brewing',
    price: '$6',
    abv: '7.2%',
  },
  {
    img: Stout,
    name: 'Lager',
    brand: 'Backwoods Brewing',
    price: '$6',
    abv: '5.2%'
  },
  {
    img: Stout,
    name: 'IPA',
    brand: 'Backwoods Brewing',
    price: '$7',
    abv: '9.2%'
  }
];

function TapList() {
  return (
    <div className="container">
      <div className="row">
        {tapList.map((tap, index) => (
          <Tap
            img={tap.img}
            name={tap.name}
            brand={tap.brand}
            price={tap.price}
            abv={tap.abv}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default TapList;
