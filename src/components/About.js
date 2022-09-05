import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="row col-12 d-flex justify-content-center">
        <h3>What is Pothole?</h3>
        <p>
          a full-stack web app, designed biking enthusiasts, trail or road, that allows users to set location pins
          highlighting: hazards, unfavorable weather, closures, wildlife, and ghost bikes on roads & trails.the goal is
          to allow those traveling on two wheels to stay safe and keep others safe as well while riding.
        </p>
        <ul>
          <li>Built with a RESTful Ruby on Rails back-end and REACT front-end</li>
          <li>Utilizes MapBox API for mapping, pin drops, and user comments</li>
          <li>Employs Google Fonts, Material Icons, and [insert CSS library like bootstrap]for design</li>
        </ul>
        <h3>Contact me!</h3>
        <p>
          Shoot me a line at potholeforbikes@gmail.com with any comments, suggestions, feedback or otherwise. Thank you
          in advance!
        </p>
        <a href="http://localhost:3001/">back to home</a>
      </div>
    );
  }
}
export default About;
