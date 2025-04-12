import React from 'react';
import './ImageNavigation.css';
import { Link } from 'react-router-dom';

const ImageNavigation = () => {
  return (
    <div className="image-navigation">
      <Link to="/selection/251north" className="nav-item image1">
        <div className="overlay-text">251 North</div>
      </Link>
      <Link to="/selection/yahentamitsi" className="nav-item image2">
        <div className="overlay-text">Yahentamitsi</div>
      </Link>
      <Link to="/selection/south" className="nav-item image3">
        <div className="overlay-text">South Campus</div>
      </Link>
    </div>
  );
};

export default ImageNavigation;