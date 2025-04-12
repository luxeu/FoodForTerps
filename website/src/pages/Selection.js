import React from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';
import NavBar from '../NavBar';


function Selection() {
  const { navId } = useParams();

  let content;

  const getDisplayName = (id) => {
    switch (id) {
      case '251north': return '251 North';
      case 'yahentamitsi': return 'Yahentamitsi';
      case 'south': return 'South Campus';
      default: return '';
    }
  };

  switch (navId) {
    case '251north':
      content = (
        <nav className="northbar">
        <div className="dietimage">
          <img src="./pics/vegs.png" alt="" ></img>
          </div>
          <div className="nutriimage">
          <img src="./pics/nutri.jpg" alt="" ></img>
          </div>
        </nav>
        
      );
      break;
    case 'yahentamitsi':
      content = (
        <nav className="Ybar">
        <div className="dietimageY">
          <img src="./pics/vegs.png" alt="" ></img>
          </div>
          <div className="nutriimageY">
          <img src="./pics/nutri.jpg" alt="" ></img>
          </div>
          </nav>
      );
      break;
    case 'south':
      content = (
        <nav className="southbar">
        <div className="dietimageS">
          <img src="./pics/vegs.png" alt="" ></img>
          </div>
          <div className="nutriimageS">
          <img src="./pics/nutri.jpg" alt="" ></img>
          </div>
          </nav>
      );
      break;
    default:
      content = (
        <div>
          <h1>Invalid Destination</h1>
        </div>
      );
  }

  return <div>{
    content
    }</div>;
}

export default Selection;