import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards";
import ProjectList from "./components/ProjectList";
import ServiceFeature from "./components/ServiceFeature";
import Pricing from "./components/Pricing";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <div className="max-w-full w-[1000px] mx-auto font-['Sora',sans] text-bodyText ">
      <div>
        <Header />
        <Hero />
        <About />
        <Cards />
        <ProjectList />
        <ServiceFeature />
        <Pricing />
        <SignUp />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
