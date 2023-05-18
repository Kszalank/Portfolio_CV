import React from "react";
import "../styles/Projects.scss";
import Project from "./Project";

function Projects() {
  return (
    <div className="container projects-container">
      <h3 className="projects--heading">Projects</h3>
      <div className="projects--list">
        <Project
          name="Weather App"
          description="Application showing weather in every single city in the World."
          technologies="Javascript, SASS, HTML, Node.js, Prettier."
          web="https://singular-gumdrop-23382d.netlify.app"
          github="https://github.com/Kszalank/WeatherApp"
        />

        <Project
          name="Who wants to be a Millionaire Web Game"
          description="Web Game based on popular TV game show."
          technologies="TypeScript, Javascript, SASS, HTML, Node.js, Yarn, Prettier."
          web="https://main--millionaire-game-kszalank.netlify.app"
          github="https://github.com/Kszalank/Millionaire"
        />

        <Project
          name="Currency Converter"
          description="Web application converting all known currencies thanks to the usage of API data."
          technologies="React, Javascript, SASS, HTML,  Node.js, Yarn, Prettier, Eslint."
          web="https://tiny-empanada-89bbfb.netlify.app/?fbclid=IwAR2S6fLr3gP9Mv-uibbmzETe31IeD3u4o95v30hWLVeZhzfY4XsBCxC5zpE"
          github="https://github.com/Kszalank/Currency-Converter"
        />
      </div>
    </div>
  );
}

export default Projects;