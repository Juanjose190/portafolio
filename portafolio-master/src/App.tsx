import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import LanguageSwitch from './components/LanguageSwitch';
import PortfolioBot from './components/PortfolioBot';
function App() {
  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen">
      <LanguageSwitch />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Contact />
 <PortfolioBot />
    </div>
  );
}

export default App;