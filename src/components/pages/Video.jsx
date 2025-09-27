import React from "react";
import { motion } from "framer-motion";
import "./Video.css";
import tempVideo from "../../assets/DVD Logo Hits Corner.mp4"; // Replace this later with your actual video

function Video() {
  return (
    <div className="video-page">
      <motion.div
        className="video-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="video-title">Video Part yaha pe</h1>
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
      </motion.div>
    </div>
  );
}

export default Video;
