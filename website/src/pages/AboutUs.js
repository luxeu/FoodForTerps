import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-image">
                <img 
                    src="/pics/us.jpg" 
                    alt="" 
                />
            </div>
            <div className="about-us-description">
                <h1>About Us</h1>
                <br></br>
                <p>
                    Welcome to FoodForTerps! We are a group of 4 freshman Computer Science majors at the University of Maryland. 
                    <br></br>
                    <br></br>

                    We're interested in making it more convienient for students to have healthy and balanced meals at our various dining halls, 
                    saving both time and effort so they can focus on more important matters.
                    
                    <br></br>
                    <br></br>
                    Our website has 2 tools: one that allows students to view meals that were generated based on their preferred calorie count, 
                    and another that will cater to their specific dietary needs. 
                </p>
            </div>
        </div>
    );
};

export default AboutUs;