import React from "react";
// Sections

import TopNavbar from '../LandingPage/Nav/TopNavbar'
import Header from "../LandingPage/Sections/Header";
import Services from "../LandingPage/Sections/Services";
import Projects from "../LandingPage/Sections/Projects";
import Blog from "../LandingPage/Sections/Blog";
import Pricing from "../LandingPage/Sections/Pricing";
import Contact from "../LandingPage/Sections/Contact";


export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
 
    </>
  );
}


