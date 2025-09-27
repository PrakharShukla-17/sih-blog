import React from "react";
import { motion } from "framer-motion";
import "./Logo.css";

export default function LeviathanLogo({ size = "lg", animate = true, className = "" }) {
  const sizeMap = {
    sm: "logo-sm",
    md: "logo-md",
    lg: "logo-lg",
    xl: "logo-xl",
  };

  const fontSizeClass = sizeMap[size] || sizeMap.lg;
  const letters = Array.from("LEVIATHAN");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04 },
    },
  };

  const letterVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 28 },
    },
  };

  return (
    <div className={`logo-container ${className}`}>
      <motion.h1
        aria-label="LEVIATHAN"
        className={`logo-text ${fontSizeClass}`}
        initial={animate ? "hidden" : false}
        animate={animate ? "visible" : undefined}
        variants={containerVariants}
      >
        {/* Gradient text */}
        <span className="logo-gradient">
          {letters.map((ch, i) => (
            <motion.span key={`${ch}-${i}`} variants={letterVariants} className="logo-letter">
              {ch}
            </motion.span>
          ))}
        </span>

        {/* Decorative underline */}
        <div className="logo-underline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 40" className="underline-svg">
            <path
              d="M0 20 C75 0 150 40 225 20 C300 0 375 40 450 20 C525 0 600 40 675 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="underline-path"
            />
          </svg>
        </div>
      </motion.h1>
    </div>
  );
}
