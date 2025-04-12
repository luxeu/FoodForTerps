import React from 'react';
import './ImageNavigation.css';

const ImageNavigation = () => {
  return (
    <div className="image-navigation">
      <a href="/page1" className="nav-item image1">
        {<div className="overlay-text">251 North</div>}
      </a>
      <a href="/page2" className="nav-item image2">
        {<div className="overlay-text">Yahentamitsi</div>}
      </a>
      <a href="/page3" className="nav-item image3">
        {<div className="overlay-text">South Campus</div>}
      </a>
    </div>
  );
};

export default ImageNavigation;