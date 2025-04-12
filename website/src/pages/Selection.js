import React from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';

function Selection() {
  const { navId } = useParams();

  let content;

  switch (navId) {
    case '251north':
      content = (
        <nav className="northbar">
        <div>
          <h1 className="north">251 North Selection</h1>      
        </div>
        <div className="dietimage">
          <img src="./pics/vegs.png" alt="" ></img>
          </div>
        </nav>
      );
      break;
    case 'yahentamitsi':
      content = (
        <div>
          <h1>Yahentamitsi Selection</h1>
          <p>This is the Y</p>
          {/* Add content specific to Yahentamitsi */}
        </div>
      );
      break;
    case 'south':
      content = (
        <div>
          <h1>South Campus Selection</h1>
          <p>This is South</p>
          {/* Add content specific to South Campus */}
        </div>
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