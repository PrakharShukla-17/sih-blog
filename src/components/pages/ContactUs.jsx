import React from "react";
import { motion } from "framer-motion";
import "./PageStyles.css";
import "./ContactUs.css";

const channels = [
  {
    label: "Primary Contact",
    value: "Swayam Chaurasiya",
    detail: "Team Lead, Leviathan",
  },
  {
    label: "Email",
    value: "2300520100167@ietlucknow.ac.in",
    detail: "Official correspondence",
  },
  {
    label: "Workspace",
    value: "IET Lucknow, Uttar Pradesh",
    detail: "Innovation & incubation lab",
  },
  {
    label: "Office Hours",
    value: "Mon – Sat · 09:00–18:00 IST",
    detail: "We respond within one business day",
  },
];

function ContactUs() {
  return (
    <div className="contact-page page-shell">
      <motion.section
        className="page-banner contact-banner"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h1>Let’s build the future of internships together.</h1>
        <p>
          Reach out for collaborations, deployment pilots, or deeper dives into
          Leviathan’s AI + Web3 architecture. We’re ready to co-create with
          ministries, universities, and industry partners.
        </p>
      </motion.section>

      <div className="contact-grid">
        <motion.section
          className="surface-card contact-details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2>Mission Control</h2>
          <div className="contact-channel-list">
            {channels.map((channel) => (
              <div key={channel.label} className="contact-channel">
                <span className="channel-label">{channel.label}</span>
                <span className="channel-value">{channel.value}</span>
                <span className="channel-detail">{channel.detail}</span>
              </div>
            ))}
          </div>

          <div className="contact-cta">
            <p>
              Prefer a quick sync? Share your context through the form — we’ll
              align the right domain experts and get back promptly.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="surface-card contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <h2>Drop us a line</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="form-field">
              <span>Name</span>
              <input type="text" placeholder="Your full name" required />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input type="email" placeholder="you@email.com" required />
            </label>
            <label className="form-field">
              <span>Organization</span>
              <input
                type="text"
                placeholder="Institution, startup, or ministry"
              />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea rows="4" placeholder="Tell us how we can help" />
            </label>
            <button type="submit" className="contact-submit">
              Send message (preview)
            </button>
            <p className="form-disclaimer">
              Submissions are saved locally during the prototype stage. We’ll
              integrate secure delivery channels in production.
            </p>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

export default ContactUs;
