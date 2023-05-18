import React from "react";
import "../styles/Base.scss";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function Base() {
  return (
    <div className="base-container">
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}

export default Base;
