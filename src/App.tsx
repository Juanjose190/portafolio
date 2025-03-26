import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Terminal } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen">
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