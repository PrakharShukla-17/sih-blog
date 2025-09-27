import React from "react";
import "./Landing.css";
import logo from "../assets/final.png"; 
import LeviathanLogo from "./Logo";


function Landing() {
  return (
    <div className="landing">
      <div className="logo-section">
        <img src={logo} alt="Leviathan Logo" className="logo" />
      </div>
       <div className="landing">
      <LeviathanLogo size="lg" animate={true} />
      <p className="tagline"> Ma ch** denge hackathon ki</p>
    </div>
    </div>
  );
}

export default Landing;
