import React from "react";
import "../styles/Project.scss";
import { Link } from "react-router-dom";
import git from "../assets/git.svg";
import globe from "../assets/globe.svg";

function Project({
  name,
  description,
  technologies,
  web,
  github,
  source1,
  source2,
}) {
  return (
    <div className="base project--container">
      <div className="project--title-and-links">
        <Link to="/projects" className="project--arrow">
          &#x276E;
        </Link>
        <h4 className="project--name">{name}</h4>
        <div className="project--links">
          <a href={web} className="project--link">
            <img src={globe} alt="globe" className="globe" />
          </a>
          <a href={github} className="project--link">
            <img src={git} alt="git" />
          </a>
        </div>
      </div>

      <p className="project--description">{description}</p>
      <p className="project--technologies">Technologies: {technologies}</p>
      <div className="project--images">
        <img src={source1} alt="app-photography" className="project--image" />
        <img src={source2} alt="app-photography" className="project--image" />
      </div>
    </div>
  );
}

export default Project;
