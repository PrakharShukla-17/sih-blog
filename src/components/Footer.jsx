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
      <div className="footer-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>📩 Contact Us</h3>
          <p>
            <strong>Team Leader:</strong> Swayam Chaurasiya
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:2300520100167@ietlucknow.ac.in" className="email-link">
              2300520100167@ietlucknow.ac.in
            </a>
          </p>
        </div>

        {/* Optional Links */}
        <div className="social-links">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:prakhar.shukla@email.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Leviathan. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
