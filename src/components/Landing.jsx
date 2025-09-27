import React from "react";
import "./Landing.css";
import logo from "../assets/final.png"; 



function Landing() {
  return (
    <div className="landing">
      <div className="logo-section">
        <img src={logo} alt="Leviathan Logo" className="logo" />
        <h1 className="project-name">Leviathan</h1>
      </div>
      <p className="tagline">
       Ma ch** denge hackathon ki
      </p>
    </div>
  );
}

export default Landing;
