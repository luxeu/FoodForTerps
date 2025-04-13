import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function CalorieSelection() {
    const { navId } = useParams();
    const [selectedRange, setSelectedRange] = useState(null);
    const [backendData, setBackendData] = useState({ meal: [] });

    const handleSelect = (eventKey) => {
        setSelectedRange(eventKey);
        console.log("Selected range:", eventKey);
    };

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setBackendData(data);
            })
            .catch((error) => {
                console.error("Failed to fetch API:", error);
            });
    }, []);

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
        case 'yahentamitsi':
        case 'south':
            content = (
                <div className={`${navId}cal`}>
                    <DropdownButton id="dropdown-basic-button" title="Calorie Ranges" onSelect={handleSelect}>
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
