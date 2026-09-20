import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    document.title = "Abdullah Alhakim Alhendi";
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    target.setAttribute("tabindex", "-1");
    target.scrollIntoView({ behavior: "instant", block: "start" });
    target.focus({ preventScroll: true });
  }, [hash]);

  return (
    <div>
      <Navbar />
      <main id="main-content">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
