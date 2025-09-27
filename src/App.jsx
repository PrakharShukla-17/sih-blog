import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home"); 

  const handleSectionSelect = (section) => {
    setActivePage(section);
    setSidebarOpen(false); 
  };

  return (
    <>
      
      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <Sidebar isOpen={sidebarOpen} onSelect={handleSectionSelect} />
      <Header activePage={activePage !== "Home" ? activePage : ""} /> 

      <div className="main-content">
        {activePage === "Home" ? (
          <Landing /> 
        ) : (
          <>
            <h2>{activePage} Content</h2>
            <p>This is the {activePage} section of the page.</p>
          </>
        )}
      </div>
    </>
  );
}

export default App;
