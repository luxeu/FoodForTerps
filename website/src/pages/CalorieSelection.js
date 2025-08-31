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
    const [loading, setLoading] = useState(false);

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

    // Fetch from backend API when navId or selectedRange changes
    useEffect(() => {
        if (!navId || !selectedRange) return;
        setLoading(true);
        // Parse selectedRange, e.g. "1500-2000 cal" => min=1500, max=2000
        const match = selectedRange.match(/(\d+)-(\d+)/);
        let minCalories = 0, maxCalories = 2000;
        if (match) {
            minCalories = parseInt(match[1], 10);
            maxCalories = parseInt(match[2], 10);
        }
        fetch(`/api?time=lunch&location=${getDisplayName(navId)}&index=0&minCalories=${minCalories}&maxCalories=${maxCalories}`)
            .then(res => res.json())
            .then(data => {
                setBackendData(data);
                setLoading(false);
            })
            .catch(err => {
                setBackendData({ meal: [] });
                setLoading(false);
            });
    }, [navId, selectedRange]);

    let content;
    switch (navId) {
        case '251north':
            content = (
                <div className="northcal">
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
        case 'yahentamitsi':
            content = (
                <div className="Ycal">
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
        case 'south':
            content = (
                <div className="southcal">
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
            {loading ? (
                <p>Loading...</p>
            ) : (
                backendData.meal && backendData.meal.length > 0 ? (
                    backendData.meal.map((item, i) =>
                        item && item.name ? <p key={i}>{item.name}</p> : <p key={i}>No data</p>
                    )
                ) : (
                    <p>No data</p>
                )
            )}
        </div>
    );
}

export default CalorieSelection;
