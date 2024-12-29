import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import BentoGrid from "../../components/Home/BentoGrid/Bento.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Usecase from "../../components/Home/UseCase/Usecase.jsx";
import Users from "../../components/Home/Stories/User.jsx";
import Testimonial from "../../components/Home/Testimonial/testimonial.jsx";
import Pricing from "../../components/Home/Pricing/PricingSection.jsx";
import HeroSection from "../../components/Home/Header/HeroSection.jsx";

import FlowDiagram from "../../components/Home/Journey/FlowDiagram.jsx";

const Home = () => {
  return (
    <div className="bg-[#09090b]">
      <Navbar />
      <HeroSection />
      <BentoGrid />

      <Usecase />
      <Users />
      <Testimonial />
      <FlowDiagram />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
