import React from "react";
import "./Landing.css";
import logo from "../assets/final.png";
import LeviathanLogo from "./Logo";

const stats = [
  { value: "0", label: "Internships orchestrated" },
  { value: "98%", label: "Skill-to-role alignment" },
  { value: "100%", label: "Blockchain-verified records" },
];

const pillars = [
  {
    title: "Fairness Engine",
    description:
      "AI scores every profile against affirmative action parameters, guaranteeing equitable opportunities across regions and categories.",
  },
  {
    title: "Trustless Infrastructure",
    description:
      "Internet Computer canisters and IPFS-backed resumes ensure tamper-proof execution, audit trails, and verifiable credentials.",
  },
  {
    title: "Command Dashboards",
    description:
      "Student and employer workspaces surface live insights, application health, and data-backed recommendations in real time.",
  },
];

function Landing() {
  return (
    <section className="landing">
      <div className="landing-hero surface-card">
        <div className="landing-copy">
          <span className="landing-eyebrow">AI + Web3 Allocation Core</span>
          <h1>
            Orchestrate transparent internship matches at national scale.
          </h1>
          <p>
            Leviathan unifies intelligent resume parsing, fairness-first scoring,
            and decentralized infrastructure so every PM Internship placement
            stands on verifiable, bias-free grounds.
          </p>

          <div className="landing-stats">
            {stats.map((item) => (
              <div key={item.label} className="landing-stat">
                <span className="stat-value">{item.value}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="landing-visual">
          <div className="landing-orb">
            <img src={logo} alt="Leviathan emblem" className="landing-emblem" />
            
          </div>
          <div className="landing-signal">
            <span className="signal-dot" aria-hidden="true" />
            <span className="signal-text">Mission-ready for SIH 2025</span>
          </div>
        </div>
      </div>

      <div className="landing-pillars">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="surface-card landing-pillar">
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Landing;
