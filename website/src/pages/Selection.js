import React from 'react';
import { useParams } from 'react-router-dom';

function Selection() {
  const { navId } = useParams();

  let content;

  switch (navId) {
    case '251north':
      content = (
        <div>
          <h1>251 North Selection</h1>
          <p>This is 251 north</p>
          {/* Add content specific to 251 North */}
        </div>
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

  return <div>{content}</div>;
}

export default Selection;