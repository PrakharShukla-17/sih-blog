import React from "react";
import { motion } from "framer-motion";
import "./Video.css";
import tempVideo from "../../assets/PROBLEM STATEMENT_- 25033 AI-Based Smart Allocation Engine for PM internship Scheme _ TEAM LEVIATHAN.mp4"; 

function Video() {
  return (
    <div className="video-page page-shell">
      <motion.section
        className="surface-card video-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="video-header">
          <span className="video-kicker">Demo Mission</span>
          <h1 className="video-title">Walk through the Leviathan allocation flow</h1>
          <p>
            Explore how student preferences, fairness metrics, and decentralized
            verification come together inside the Leviathan experience.
          </p>
        </div>
        <div className="video-frame">
          <video
            className="demo-video"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={tempVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.section>
    </div>
  );
}

export default Video;
