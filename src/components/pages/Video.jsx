import React from "react";
import { motion } from "framer-motion";
import "./Video.css";

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
          <h1 className="video-title">
            Walk through the Leviathan allocation flow
          </h1>
          <p>
            Explore how student preferences, fairness metrics, and decentralized
            verification come together inside the Leviathan experience.
          </p>
        </div>

        <div className="video-frame">
          
          <iframe
            className="demo-video"
            src="https://www.youtube.com/embed/f5QTBMoKU_I?si=iXNjCRtWsfowZrU6" 
            title="Leviathan Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}

export default Video;
