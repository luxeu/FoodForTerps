import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function CalorieSelection() {
    const { navId } = useParams();
    const [selectedRange, setSelectedRange] = useState(null);

    const handleSelect = (eventKey) => {
      setSelectedRange(eventKey);
    };

    let content;
    
    switch (navId) {
        case '251north':
            content = (
                <div className="northcal">
                    <DropdownButton id="dropdown-basic-button" title="Calorie Ranges" onSelect={handleSelect}
                    >
      <Dropdown.Item eventKey="1500-2000 cal">1500-2000 cal</Dropdown.Item>
      <Dropdown.Item eventKey="2000-2500 cal">2000-2500 cal</Dropdown.Item>
      <Dropdown.Item eventKey="2500-3000 cal">2500-3000 cal</Dropdown.Item>
      <Dropdown.Item eventKey="3000-3500 cal">3000-3500 cal</Dropdown.Item>

    </DropdownButton>
    {selectedRange && (
            <div className="range">
              <p>Showing meals for: {selectedRange}</p>
            </div>
          )}
                </div>  
            );
            break;
        case 'yahentamitsi':
            content = (
                <div className="Ycal">
                    <DropdownButton id="dropdown-basic-button" title="Calorie Ranges" onSelect={handleSelect}
                    >
      <Dropdown.Item eventKey="1500-2000 cal">1500-2000 cal</Dropdown.Item>
      <Dropdown.Item eventKey="2000-2500 cal">2000-2500 cal</Dropdown.Item>
      <Dropdown.Item eventKey="2500-3000 cal">2500-3000 cal</Dropdown.Item>
      <Dropdown.Item eventKey="3000-3500 cal">3000-3500 cal</Dropdown.Item>

    </DropdownButton>
    {selectedRange && (
            <div className="range">
              <p>Showing meals for: {selectedRange}</p>
            </div>
          )}
                </div>  
            );
            break;
        case 'south':
            content = (
                <div className="southcal">
                    <DropdownButton id="dropdown-basic-button" title="Calorie Ranges" onSelect={handleSelect}
                    >
      <Dropdown.Item eventKey="1500-2000 cal">1500-2000 cal</Dropdown.Item>
      <Dropdown.Item eventKey="2000-2500 cal">2000-2500 cal</Dropdown.Item>
      <Dropdown.Item eventKey="2500-3000 cal">2500-3000 cal</Dropdown.Item>
      <Dropdown.Item eventKey="3000-3500 cal">3000-3500 cal</Dropdown.Item>

    </DropdownButton>
    {selectedRange && (
            <div className="range">
              <p>Showing meals for: {selectedRange}</p>
            </div>
          )}
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

export default CalorieSelection