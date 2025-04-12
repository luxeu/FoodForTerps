import React from 'react';
import './Pages.css';
import { useParams } from 'react-router-dom';

function DietSelection() {
    const { navId } = useParams();

    let content;
    
    switch (navId) {
        case '251north':
            content = (
                <div>
                    <h1> 251 Diet Selection</h1>
                </div>
            );
            break;
        case 'yahentamitsi':
            content = (
                <div>
                    <h1>Yahentamitsi Diet Selection</h1>
                </div>
            );
            break;
        case 'south':
            content = (
                <div>
                    <h1>South Campus Diet Selection</h1>
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

export default DietSelection