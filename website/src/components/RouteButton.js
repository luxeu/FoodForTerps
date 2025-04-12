import React from 'react';
import { useNavigate } from 'react-router-dom';

const RouteButton = ({ to, children, className, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className={`route-button ${className || ''}`} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default RouteButton;