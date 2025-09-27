import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

function Header({ activePage }) {
  return (
    <AnimatePresence>
      {activePage && (
        <motion.div
          key={activePage}
          className="header"
          initial={{ width: "200px", left: "0", top: "50%", height: "50px" }}
          animate={{
            width: "100%",
            left: 0,
            top: 0,
            height: "60px",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h1>{activePage}</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Header;
