import React from "react";
import { motion } from "framer-motion";
import "./Sidebar.css";

function Sidebar({ isOpen, onSelect, activePage }) {
  const sections = [
    { label: "Home", hint: "Experience Leviathan" },
    { label: "Problem", hint: "Understand the challenge" },
    { label: "Our Approach", hint: "See our solution" },
    { label: "Video", hint: "Watch the demo" },
    { label: "Contact Us", hint: "Connect with us" },
  ];

  const current = activePage || "Home";

  return (
    <motion.aside
      className="sidebar"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      role="navigation"
      aria-label="Primary"
      aria-hidden={!isOpen}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div className="sidebar-header">
        <span className="sidebar-eyebrow">Leviathan</span>
        <h2 className="sidebar-title">AI Internship Command Center</h2>
      </div>

      <ul className="sidebar-nav" role="list">
        {sections.map(({ label, hint }) => {
          const isActive = current === label;
          return (
            <li key={label} className="sidebar-nav-item">
              <motion.button
                type="button"
                className={`sidebar-link ${isActive ? "active" : ""}`}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(label)}
              >
                <span className="sidebar-indicator" aria-hidden="true" />
                <span className="sidebar-labels">
                  <span className="sidebar-label">{label}</span>
                  <span className="sidebar-hint">{hint}</span>
                </span>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </motion.aside>
  );
}

export default Sidebar;
