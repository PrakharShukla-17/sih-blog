import React from "react";
import { motion } from "framer-motion";
import "./PageStyles.css";
import "./OurApproach.css";
import flowchart from "../../assets/flow.png";

function OurApproach() {
  return (
    <div className="approach-page">
      
      <motion.div
        className="approach-banner"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>⚙️ Crux of Our Solution (MVP Overview)</h1>
        <p>
          Our solution tackles fair and efficient internship allocation through
          an AI-powered and Web3-integrated system — ensuring transparency,
          trust, and verifiability at every stage.
        </p>
      </motion.div>

      
      <motion.div
        className="flowchart-container"
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
          Fig. 1 — Technical Architecture & Workflow for PM Internship Scheme
        </p>
      </motion.div>

      
      <div className="approach-content">
        
        <motion.section
          className="approach-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2>🔹 How We Tackle the Problem</h2>

          <div className="info-cards">
            <div className="card">
              <h3>Two Interactive Dashboards</h3>
              <ul>
                <li>
                  <strong>Student Dashboard:</strong> Upload resumes and specify
                  preferences (skills, location, sector).
                </li>
                <li>
                  <strong>Employer Dashboard:</strong> Post internship openings
                  with qualification and skill requirements.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>AI-Powered Resume Parsing</h3>
              <p>
                The AI module extracts and analyzes skills, education, and
                experience to match candidates with the best-fitting internships
                using a compatibility scoring algorithm.
              </p>
            </div>

            <div className="card">
              <h3>Web3-Integrated Backend</h3>
              <p>
                AI logic is deployed on the <strong>Internet Computer (ICP)</strong>,
                ensuring transparent and tamper-proof execution through DAO-based
                governance.
              </p>
            </div>

            <div className="card">
              <h3>Secure Resume Verification</h3>
              <p>
                Each uploaded resume is hashed and stored on decentralized storage
                (IPFS/Blockchain), ensuring authenticity and immutability.
              </p>
            </div>

            <div className="card">
              <h3>End-to-End Transparency</h3>
              <p>
                Students and employers interact with a trustless, verifiable
                system — enabling unbiased internship allocations and complete
                transparency.
              </p>
            </div>
          </div>
        </motion.section>

        
        <motion.section
          className="approach-section tech-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2>🧩 Core Technologies Used</h2>

          <table className="tech-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend</td>
                <td>React.js (Student & Employer Dashboards)</td>
              </tr>
              <tr>
                <td>Backend</td>
                <td>Node.js + Express</td>
              </tr>
              <tr>
                <td>Database</td>
                <td>MongoDB</td>
              </tr>
              <tr>
                <td>AI/ML Engine</td>
                <td>Python (Resume Parser + Matching Model)</td>
              </tr>
              <tr>
                <td>Decentralized Hosting</td>
                <td>Internet Computer (Canisters)</td>
              </tr>
              <tr>
                <td>Blockchain Storage</td>
                <td>IPFS / ICP Storage for Resumes</td>
              </tr>
              <tr>
                <td>Governance</td>
                <td>DAO-based Model Update Mechanism</td>
              </tr>
            </tbody>
          </table>
        </motion.section>
      </div>
    </div>
  );
}

export default OurApproach;
