import React from "react";
import { motion } from "framer-motion";
import "./PageStyles.css";
import "./Problem.css";

function Problem() {
  return (
    <div className="problem-page">
      {/* Banner Section */}
      <motion.div
        className="problem-banner"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>AI-Based Smart Allocation Engine for PM Internship Scheme</h1>
        <p className="problem-id">Problem Statement ID: <strong>25033</strong></p>
      </motion.div>

      {/* Main Content */}
      <div className="problem-content">
        {/* Left: Description */}
        <div className="problem-details">
          <motion.section
            className="problem-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2>Background</h2>
            <p>
              The PM Internship Scheme enables students to gain industry exposure through structured internships. 
              However, matching thousands of applicants with the most suitable opportunities remains a challenge, 
              often leading to suboptimal selections and delays.
            </p>
          </motion.section>

          <motion.section
            className="problem-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2>Description</h2>
            <p>
              The problem envisages a smart, automated system that uses AI/ML algorithms to match candidates 
              with internship opportunities based on skills, qualifications, location preferences, and sector interests. 
              The system should also account for affirmative action (e.g., representation from rural/aspirational districts, 
              different social categories), past participation, and internship capacity of industries.
            </p>
          </motion.section>

          <motion.section
            className="problem-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2>Expected Solution</h2>
            <ul>
              <li>AI-based matchmaking engine for internship placement</li>
              <li>A prototype of the front end demonstrating how this engine will work</li>
            </ul>
          </motion.section>
        </div>

        {/* Right: Meta Info */}
        <motion.div
          className="problem-meta"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3>Details</h3>
          <div className="meta-item">
            <span>Organization:</span>
            <p>Ministry of Corporate Affairs</p>
          </div>
          <div className="meta-item">
            <span>Department:</span>
            <p>Ministry of Corporate Affairs (MoCA)</p>
          </div>
          <div className="meta-item">
            <span>Category:</span>
            <p>Software</p>
          </div>
          <div className="meta-item">
            <span>Theme:</span>
            <p>Smart Automation</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Problem;
