import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);

  const handleSectionSelect = (section) => {
    setActivePage(section);
    setSidebarOpen(false); // close sidebar after selecting
  };

  return (
    <>
      {/* Hamburger toggle */}
      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <Sidebar isOpen={sidebarOpen} onSelect={handleSectionSelect} />
      <Header activePage={activePage} />

      <div className="main-content">
        {activePage ? (
          <>
            <h2>{activePage} Content</h2>
            <p>This is the {activePage} section of the page.</p>
          </>
        ) : (
          <h2>Welcome! Select a section from the left sidebar.</h2>
        )}
      </div>
    </>
  );
}

export default App;
