import React from "react";
import "../styles/Skills.scss";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="container skills-container">
      <h3 className="skills--heading">Skills</h3>
      <div className="skills--description">Technologies I use the most.</div>
      <div className="skills--knowledge">
        <Skill text="HTML" />
        <Skill text="CSS" />
        <Skill text="JavaScript" />
        <Skill text="TypeScript" />
        <Skill text="React" />
        <Skill text="Github" />
        <Skill text="Sass" />
        <Skill text="Prettier" />
        <Skill text="Eslint" />
      </div>
    </div>
  );
}

export default Skills;
