import "./App.scss";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./components/Projects";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import Project from "./components/Project";
import weather1 from "./assets/weather1.jpg";
import weather2 from "./assets/weather2.jpg";
import currency1 from "./assets/currency1.jpg";
import currency2 from "./assets/currency2.jpg";
import millionaire1 from "./assets/millionaire1.jpg";
import millionaire2 from "./assets/millionaire2.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/projects/weatherapp"
          element={
            <Project
              name="Weather App"
              description="Application showing weather in every single city in the World."
              technologies="Javascript, SASS, HTML, Node.js, Prettier."
              web="https://weatherapp-kszalank.netlify.app"
              github="https://github.com/Kszalank/WeatherApp"
              source1={weather1}
              source2={weather2}
            />
          }
        />
        <Route
          path="/projects/millionaire"
          element={
            <Project
              name="Who wants to be a Millionaire Web Game"
              description="Web Game based on popular TV game show."
              technologies="TypeScript, Javascript, SASS, HTML, Node.js, Yarn, Prettier."
              web="https://main--millionaire-game-kszalank.netlify.app"
              github="https://github.com/Kszalank/Millionaire"
              source1={millionaire1}
              source2={millionaire2}
            />
          }
        />
        <Route
          path="/projects/currency"
          element={
            <Project
              name="Currency Converter"
              description="Web application converting all known currencies thanks to the usage of API data."
              technologies="React, Javascript, SASS, HTML,  Node.js, Yarn, Prettier, Eslint."
              web="https://currency-converter-kszalank.netlify.app"
              github="https://github.com/Kszalank/Currency-Converter"
              source1={currency1}
              source2={currency2}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
