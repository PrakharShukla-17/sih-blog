import React from "react";
import { motion } from "framer-motion";
import "./Sidebar.css";

function Sidebar({ isOpen, onSelect }) {
  const sections = ["Home", "Problem", "Our Approach", "Video"];

  return (
    <motion.div
      className="sidebar"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <ul>
        {sections.map((section) => (
          <motion.li
            key={section}
            className="sidebar-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(section)}
          >
            {section}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Sidebar;
