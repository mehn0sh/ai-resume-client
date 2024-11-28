import React from "react";
import About from "../landingPage/About";
import { StarsCanvas } from "../landingPage/canvas";
import Contact from "../landingPage/Contact";
import CoverLetter from "../landingPage/CoverLetter";
import Feedbacks from "../landingPage/Feedbacks";
import Hero from "../landingPage/Hero";
import Navbar from "../landingPage/Navbar";
import Tech from "../landingPage/Tech";
import Videos from "../landingPage/Videos";

const Home = () => {
  return (
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <CoverLetter />
      <Tech />
      <Videos />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
