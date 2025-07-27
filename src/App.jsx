import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Wyatt Coff | Software Developer Portfolio</title>
        <meta name="description" content="Portfolio of Wyatt Coff, Software Developer based in Adelaide, SA. Projects, skills, experience, and contact info." />
        <meta property="og:title" content="Wyatt Coff | Software Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Wyatt Coff, Software Developer based in Adelaide, SA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" /> /* TO BE ADDED*/
        <meta property="og:image" content="" /> /* TO BE ADDED*/
      </Helmet>
      <div className="font-sans bg-white text-gray-900">
        <Header />
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <ScrollToTopButton />
      </div>
    </HelmetProvider>
  );
}

export default App;

