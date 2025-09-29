import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-grid">
        <div className="footer-column">
          <span className="footer-eyebrow">Leviathan</span>
          <h3>AI-powered, Web3-secured internship allocation.</h3>
          <p>
            Designed for the PM Internship Scheme to deliver equitable matches,
            measurable impact, and credible audit trails.
          </p>
        </div>

        <div className="footer-column footer-contact">
          <span className="footer-heading">Mission Contacts</span>
          <ul>
            <li>
              <span>Team Lead</span>
              <strong>Swayam Chaurasiya</strong>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:2300520100167@ietlucknow.ac.in">
                2300520100167@ietlucknow.ac.in
              </a>
            </li>
            <li>
              <span>Base</span>
              <strong>IET Lucknow, Uttar Pradesh</strong>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-links">
          <span className="footer-heading">Stay in orbit</span>
          <p>
            Follow repository updates, behind-the-scenes research, and demo
            drops as we refine the Leviathan platform.
          </p>
          <div className="footer-pills">
            <span className="footer-pill">GitHub · Launching soon</span>
            <span className="footer-pill">LinkedIn · In progress</span>
            <a className="footer-pill" href="mailto:2300520100167@email.com">
              Email dev team
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Leviathan. Crafted for Smart India Hackathon.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
