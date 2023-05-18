import React from "react";
import "../styles/Project.scss";
import git from "../assets/git.svg";
import globe from "../assets/globe.svg";

function Project({ name, description, technologies, web, github }) {
  return (
    <div className="project--container">
      <div className="project--title-and-links">
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
    </div>
  );
}

export default Project;
