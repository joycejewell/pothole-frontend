import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="row col-12 d-flex about">
        <h1>What is Pothole?</h1>
        <p>
          A full-stack web app, designed for biking enthusiasts, trail or road, that allows users to set location pins
          highlighting: hazards, unfavorable weather, closures, wildlife, and ghost bikes on roads & trails.the goal is
          to allow those traveling on two wheels to stay safe and keep others safe as well while riding.
        </p>
        <ul>
          <li>Built with a RESTful Ruby on Rails back-end and REACT front-end</li>
          <li>Utilizes MapBox API for mapping, pin drops, and user comments</li>
          <li>Employs Google Fonts, Material Icons, and [insert CSS library like bootstrap]for design</li>
        </ul>
        <p>
          Shoot me a line at potholeforbikes@gmail.com with any comments, suggestions, feedback or otherwise. Thank you
          in advance!
        </p>
        <ul>
          <li>
            <a href="http://localhost:3001/">back to home</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default About;
