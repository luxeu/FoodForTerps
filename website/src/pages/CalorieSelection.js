import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CalorieDetector, { GetMealCalories, GetMealCarbs, GetMealFat, GetMealProtein } from '../algorithmn/CalorieDetector.js';

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

    const result = CalorieDetector("lunch", navId, 0, selectedRange, selectedRange+500)
    console.log(result);
    const resultItems = result.map((food) =>
        <div className="meal-item">
            <h4>{food.name}</h4>
            <p>Calories: {GetMealCalories(food)}</p>
            <p>Protein: {GetMealProtein(food)}g</p>
            <p>Carbs: {GetMealCarbs(food)}g</p>
            <p>Fats: {GetMealFat(food)}g</p>
        </div>
    );
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
            

            content = (
                <div>
                    {content}
                    <div className="meal-results">
                        <h3>Meal Options:</h3>
                        {resultItems}
                    </div>
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

    return (
        <div className="selection-page">
            <h2 className="hall-title">{getDisplayName(navId)} Selection</h2>
            {content}
            <h3>Fetched Meal Names:</h3>
            {backendData.meal.length === 0 ? (
                <p>Loading...</p>
            ) : (
                backendData.meal.map((item, i) =>
                    item && item.name ? <p key={i}>{item.name}</p> : <p key={i}>No data</p>
                )
            )}
        </div>
    );
}

export default CalorieSelection;
