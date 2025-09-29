import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

function Header({ activePage }) {
  const pageTitle = activePage || "Leviathan";
  const subtitle = activePage
    ? "Currently exploring"
    : "AI-Powered Internship Allocation";

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="header-brand">
        <span className="header-dot" aria-hidden="true" />
        <span className="header-brand-name">Leviathan</span>
      </div>

      <div className="header-status">
        <span className="header-subtitle">{subtitle}</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={pageTitle}
            className="header-active"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {pageTitle}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
