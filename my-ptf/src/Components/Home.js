import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Currently from "./Currently";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="xl:pt-20 xl:px-28 p-10 relative">
        <Hero />
        <Currently />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
