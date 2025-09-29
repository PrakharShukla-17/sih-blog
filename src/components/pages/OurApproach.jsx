import React from "react";
import { motion } from "framer-motion";
import "./PageStyles.css";
import "./OurApproach.css";
import flowchart from "../../assets/flow.png";

function OurApproach() {
  return (
    <div className="approach-page page-shell">
      <motion.section
        className="approach-banner page-banner"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Blueprint of the Leviathan Allocation Stack</h1>
        <p>
          From resume ingestion to blockchain notarisation, the Leviathan stack
          keeps every stakeholder aligned through explainable AI and
          verifiable workflows.
        </p>
      </motion.section>

      <motion.div
        className="flowchart-container surface-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <img
          src={flowchart}
          alt="Technical Architecture Flowchart"
          className="flowchart-img"
        />
        <p className="flowchart-caption">
          Fig. 1 — AI + Web3 orchestration flow for PM Internship Scheme
        </p>
      </motion.div>

      <div className="approach-content">
        <motion.section
          className="surface-card approach-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2>Delivery Pillars</h2>

          <div className="info-cards">
            <div className="approach-card">
              <h3>Dual Mission Dashboards</h3>
              <ul>
                <li>
                  <strong>Students:</strong> Smart resume uploads, preference
                  capture, and live application readiness scores.
                </li>
                <li>
                  <strong>Employers:</strong> Requirement definition, curated
                  candidate shortlists, and allocation approvals.
                </li>
              </ul>
            </div>

            <div className="approach-card">
              <h3>AI Matching Core</h3>
              <p>
                Resume parsing, skill extraction, and fairness-aware scoring
                blend to generate ranked internship recommendations per
                candidate.
              </p>
            </div>

            <div className="approach-card">
              <h3>Web3 Governance Layer</h3>
              <p>
                Internet Computer canisters, steered by a DAO, guarantee
                transparent model updates and tamper-proof execution logic.
              </p>
            </div>

            <div className="approach-card">
              <h3>Verified Credentials</h3>
              <p>
                Every resume is hashed to IPFS, enabling integrity checks and
                dispute-free audit trails for participating ministries.
              </p>
            </div>

            <div className="approach-card">
              <h3>Insightful Telemetry</h3>
              <p>
                Allocation heatmaps spotlight representation, satisfaction, and
                bottlenecks so policy teams can iterate rapidly.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="surface-card approach-section tech-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2>Technology Stack</h2>

          <table className="tech-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend Experiments</td>
                <td>React + Framer Motion (Vite)</td>
              </tr>
              <tr>
                <td>APIs & Orchestration</td>
                <td>Node.js, Express, GraphQL Gateway</td>
              </tr>
              <tr>
                <td>Operational Data</td>
                <td>MongoDB + Redis Streams</td>
              </tr>
              <tr>
                <td>AI/ML Engine</td>
                <td>Python, Transformers, Fairness Metrics</td>
              </tr>
              <tr>
                <td>Decentralized Hosting</td>
                <td>Internet Computer (Canisters)</td>
              </tr>
              <tr>
                <td>Immutable Storage</td>
                <td>IPFS / ICP for resume hashes</td>
              </tr>
              <tr>
                <td>Governance</td>
                <td>DAO-based model lifecycle management</td>
              </tr>
            </tbody>
          </table>
        </motion.section>
      </div>
    </div>
  );
}

export default OurApproach;
