import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeSection from "./components/sections/HomeSection";
// import Features from "./components/sections/Features";
import AboutSection from "./components/sections/AboutSection";
import ContractAddressbar from "./components/ContractAddressbar";
import TokenomicsSection from "./components/sections/TokenomicsSection";
import RoadmapSection from "./components/sections/RoadmapSection";
import TeamSection from "./components/sections/TeamSection";
import PartnershipsSection from "./components/sections/PartnershipSection"
import Footer from "./components/sections/Footer";
import FollowUsSection from "./components/sections/FollowUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact component={HomeSection} />
        </Routes>
        <Navbar />
        <ContractAddressbar />
        <HomeSection />
        {/* <Features /> */}
        <AboutSection />
        <TokenomicsSection />
        <RoadmapSection /> 
        <PartnershipsSection />
        <TeamSection />
        <FollowUsSection />
        <Footer />
      </Router>
    </>
  );
}

export default App;
