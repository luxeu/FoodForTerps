import React from "react";
import { useParams } from "react-router-dom";
import "./Pages.css";
import RouteButton from "../components/RouteButton";

function Selection() {
  const { navId } = useParams();

  let content;

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

  switch (navId) {
    case "251north":
      content = (
        <nav className="northbar">
          <div className="content-container">
            <div className="dietimage">
              <img src="./pics/vegs.png" alt=""></img>
            </div>
            <RouteButton
              to="/diet/251north"
              className="centered-button"
            >
              Dietary Plans
            </RouteButton>
          </div>
          <div className="content-container">
            <RouteButton
              to="/calories/251north"
              className="centered-button"
            >
              Calorie Plans
            </RouteButton>
            <div className="nutriimage">
              <img src="./pics/nutri.jpg" alt=""></img>
            </div>
          </div>
        </nav>
      );
      break;
    case "yahentamitsi":
      content = (
        <nav className="Ybar">
          <div className="dietimageY">
            <img src="./pics/vegs.png" alt=""></img>
          </div>
          <RouteButton
            to="/diet/yahentamitsi"
            style={{ position: "absolute", top: "450px", left: "1050px" }}
          >
            Dietary Plans
          </RouteButton>
          <div className="nutriimageY">
            <img src="./pics/nutri.jpg" alt=""></img>
          </div>
          <RouteButton
            to="/calories/yahentamitsi"
            style={{ position: "absolute", top: "950px", left: "270px" }}
          >
            Calorie Plans
          </RouteButton>
        </nav>
      );
      break;
    case "south":
      content = (
        <nav className="southbar">
          <div className="dietimageS">
            <img src="./pics/vegs.png" alt=""></img>
          </div>
          <RouteButton
            to="/diet/south"
            style={{ position: "absolute", top: "450px", left: "1050px" }}
          >
            Dietary Plans
          </RouteButton>
          <div className="nutriimageS">
            <img src="./pics/nutri.jpg" alt=""></img>
          </div>
          <RouteButton
            to="/calories/yahentamitsi"
            style={{ position: "absolute", top: "950px", left: "270px" }}
          >
            Calorie Plans
          </RouteButton>
        </nav>
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
  </div>
  )
}

export default Selection;
