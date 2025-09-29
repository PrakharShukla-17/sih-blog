import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Problem from "./components/pages/Problem";
import OurApproach from "./components/pages/OurApproach";
import Video from "./components/pages/Video";
import ContactUs from "./components/pages/ContactUs";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const handleSectionSelect = (section) => {
    setActivePage(section);
    setSidebarOpen(false); 
  };

  return (
    <div className={`app-shell ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div className="app-glow" aria-hidden="true" />

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span
          className={`menu-toggle-lines ${sidebarOpen ? "open" : ""}`}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </span>
      </button>

      {sidebarOpen && (
        <div className="menu-backdrop" onClick={() => setSidebarOpen(false)} />
      )}

      <Sidebar
        isOpen={sidebarOpen}
        onSelect={handleSectionSelect}
        activePage={activePage}
      />
      <Header activePage={activePage !== "Home" ? activePage : ""} />

      <main className="main-content">
        {activePage === "Home" && <Landing />}
        {activePage === "Problem" && <Problem />}
        {activePage === "Our Approach" && <OurApproach />}
        {activePage === "Video" && <Video />}
        {activePage === "Contact Us" && <ContactUs />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
