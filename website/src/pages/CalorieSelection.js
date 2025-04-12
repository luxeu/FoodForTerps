import React from 'react';
import './Pages.css';
import { useParams } from 'react-router-dom';

function CalorieSelection() {
    const { navId } = useParams();

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
                <div>
                    <h1> 251 Calorie Selection</h1>
                </div>
            );
            break;
        case 'yahentamitsi':
            content = (
                <div>
                    <h1>Yahentamitsi Calorie Selection</h1>
                </div>
            );
            break;
        case 'south':
            content = (
                <div>
                    <h1>South Campus Calorie Selection</h1>
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