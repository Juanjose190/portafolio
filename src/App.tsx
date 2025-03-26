import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import LanguageSwitch from './components/languajeSwitch';

function App() {
  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen">
      <LanguageSwitch />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;