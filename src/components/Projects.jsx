import React from "react";
import "../styles/Projects.scss";
import "../styles/Base.scss";
import { Link } from "react-router-dom";
import ProjectName from "./PojectName";

function Projects() {
  return (
    <div className="base projects--container">
      <h3 className="projects--heading">Projects</h3>
      <div className="projects--description">
        Below you can find my projects. Click to see details, screenshots and
        technologies used to create them.
      </div>
      <div className="projects--list">
        <Link to="/projects/weatherapp" className="projects--link">
          <ProjectName name="Weather App" />
        </Link>
        <Link to="/projects/millionaire" className="projects--link">
          <ProjectName name="Who wants to be a Millionaire Web Game" />
        </Link>
        <Link to="/projects/currency" className="projects--link">
          <ProjectName name="Currency Converter" />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
