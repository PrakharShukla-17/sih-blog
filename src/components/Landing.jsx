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
      <p className="tagline"> Maybe add some lines as to how determined we are in finding solutions to problems</p>
    </div>
    </div>
  );
}

export default Landing;
