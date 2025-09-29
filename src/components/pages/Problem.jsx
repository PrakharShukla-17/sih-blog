import React from "react";
import { motion } from "framer-motion";
import "./PageStyles.css";
import "./Problem.css";

function Problem() {
  return (
    <div className="problem-page page-shell">
      <motion.section
        className="page-banner problem-banner"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>AI-Based Smart Allocation Engine for PM Internship Scheme</h1>
        <p>
          Precision matchmaking between thousands of students and internship opportunities, with fairness and
          transparency embedded in the workflow.
        </p>
        <span className="problem-id">Problem Statement ID · 25033</span>
      </motion.section>

      <div className="problem-content page-grid two-column">
        <div className="problem-details">
          <motion.section
            className="surface-card problem-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2>Background</h2>
            <p>
              The PM Internship Scheme unlocks structured exposure for students across India. The scale of participation
              makes manual matching impractical, leading to bottlenecks, delayed confirmations, and mismatched placements.
            </p>
          </motion.section>

          <motion.section
            className="surface-card problem-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <h2>Description</h2>
            <p>
              The solution envisions an intelligent allocation engine that scores candidates on verified skills, location
              preferences, inclusive representation, and historical participation. Internships are ranked against these
              profiles, ensuring every recommendation can be audited and explained.
            </p>
          </motion.section>

          <motion.section
            className="surface-card problem-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2>Expected Solution</h2>
            <ul>
              <li>AI-powered matchmaking engine with transparent scoring metrics.</li>
              <li>Production-ready frontend prototype surfacing student & employer journeys.</li>
              <li>Dashboards that track fairness KPIs and allocation progress in real time.</li>
            </ul>
          </motion.section>
        </div>

        <motion.aside
          className="surface-card problem-meta"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3>Opportunity Snapshot</h3>
          <div className="meta-item">
            <span>Organization</span>
            <p>Ministry of Corporate Affairs</p>
          </div>
          <div className="meta-item">
            <span>Department</span>
            <p>Ministry of Corporate Affairs (MoCA)</p>
          </div>
          <div className="meta-item">
            <span>Category</span>
            <p>Software & Intelligent Systems</p>
          </div>
          <div className="meta-item">
            <span>Theme</span>
            <p>Smart Automation & Fair Allocation</p>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

export default Problem;
