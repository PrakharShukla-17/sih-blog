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
        {activePage === "Home" && <Landing />}
        {activePage === "Problem" && <Problem />}       
        {activePage === "Our Approach" && <OurApproach />}
        {activePage === "Video" && <Video />}
        {activePage === "Contact Us" && <ContactUs />}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
