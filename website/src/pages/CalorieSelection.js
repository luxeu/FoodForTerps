import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CalorieDetector from '../algorithmn/CalorieDetector.js';

function CalorieSelection() {
    const { navId } = useParams();
    const [selectedRange, setSelectedRange] = useState(null);

    const handleSelect = (eventKey) => {
        setSelectedRange(eventKey);
    };

    const getDisplayName = (id) => {
        switch (id) {
            case "251north":
                return "251 North";
            case "yahentamitsi":
                return "Yahentamitsi";
            case "south":
                return "South Campus";
            default:
                return "";
        }
    };

    let content;

    switch (navId) {
        case '251north':
            content = (
                <div className="northcal">
                    <DropdownButton id="dropdown-basic-button" title="Calorie Ranges" onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="1500-2000 cal">1500</Dropdown.Item>
                        <Dropdown.Item eventKey="2000-2500 cal">2000</Dropdown.Item>
                        <Dropdown.Item eventKey="2500-3000 cal">2500</Dropdown.Item>
                        <Dropdown.Item eventKey="3000-3500 cal">3000</Dropdown.Item>

                    </DropdownButton>
                    {selectedRange && (
                        <div className="range">
                            <p>Showing meals for: {selectedRange}</p>
                        </div>
                    )}
                </div>
            );
            const result = []
            result = CalorieDetector("lunch", navId, 0, selectedRange, selectedRange+500)

            // content = (
            //     <div>
            //         {content}
            //         <div className="meal-results">
            //             <h3>Meal Options:</h3>
            //             {result.map((meal, index) => (
            //                 <div key={index} className="meal-item">
            //                     <h4>{meal.name}</h4>
            //                     <p>Calories: {meal.calories}</p>
            //                     <p>Protein: {meal.protein}g</p>
            //                     <p>Carbs: {meal.carbs}g</p>
            //                     <p>Fats: {meal.fats}g</p>
            //                 </div>
            //             ))}
            //         </div>
            //     </div>
            // );

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
        <div className="selection-page">
            <h2 className="hall-title">{getDisplayName(navId)} Selection</h2>
            {content}
        </div>
    }</div>;
}

export default CalorieSelection