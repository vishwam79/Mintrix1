import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import BentoGrid from "../../components/Home/BentoGrid/Bento.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Users from "../../components/Home/Users/Users.jsx";
import Automation from "../../components/Home/Automation/Automation.jsx";
import Blogs from "../../components/Home/Blogs/Blog.jsx";
import Pricing from "../../components/Home/Pricing/PricingSection1.jsx";
import HeroSection from "../../components/Home/Header/HeroSection.jsx";

import FlowDiagram from "../../components/Home/Journey/FlowDiagram.jsx";

const Home = () => {
  return (
    <div className="bg-[#09090b]">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <Users/>
      <Automation />
      <Blogs />
      
      <FlowDiagram />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
