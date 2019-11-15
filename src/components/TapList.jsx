import React from 'react';
import Tap from './Tap';

var tapList = [
  {
    name: 'Stout',
    brand: 'Backwoods Brewing',
    price: '$6',
    abv: '7.2%'
  }
];

function TapList() {
  return (
    <div className="container">
      <div className="row">
        {tapList.map((tap, index) => (
          <Tap
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
