import React from "react";
import { useParams } from "react-router-dom";
import "./Pages.css";
import RouteButton from "../components/RouteButton";

function Selection() {
    const { navId } = useParams();

    const hallConfig = {
        "251north": {
            displayName: "251 North",
            barClass: "northbar",
        },
        "yahentamitsi": {
            displayName: "Yahentamitsi",
            barClass: "Ybar",
        },
        "south": {
            displayName: "South Campus",
            barClass: "southbar",
        }
    };

    const config = hallConfig[navId];

    if (!config) {
        return (
            <div className="selection-page">
                <h2 className="hall-title">Invalid Destination</h2>
            </div>
        );
    }

    return (
        <div className="selection-page">
            <h2 className="hall-title">{config.displayName} Selection</h2>
            <nav className={config.barClass}>
                <div className="content-container">
                    <div className="dietimage"></div>
                    <div className="button-container-reverse">
                        <div className="description">
                            <p>Explore tailor made dietary plans to improve and maintain your health.</p>
                            <br></br>
                        </div>
                        <RouteButton
                            to={`/diet/${navId}`}
                            className="centered-button"
                        >
                            Dietary Plans
                        </RouteButton>
                    </div>
                </div>
                <div className="content-container">
                    <div className="button-container">
                        <div className="description">
                            <p>Custom made meal plans to fit your calorie needs - with your goals in mind.</p>
                            <br></br>
                        </div>
                        <RouteButton
                            to={`/calories/${navId}`}
                            className="centered-button"
                        >
                            Calorie Plans
                        </RouteButton>
                    </div>
                    <div className="nutriimage"></div>
                </div>
            </nav>
        </div>
    )
}

export default Selection;
