import React from 'react';
import './Pages.css';
import { useParams } from 'react-router-dom';

function CalorieSelection() {
    const { navId } = useParams();

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
        content
    }</div>;
}

export default CalorieSelection