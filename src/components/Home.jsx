import React from 'react';
import HomeImage from '../assets/img/beerhome.jpeg';

function Home() {
  var ImgStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundAttachment: 'fixed',
    height: '800px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div style={ImgStyle}></div>
  );
}

export default Home;