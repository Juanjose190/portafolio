import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FileDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Construyendo software robusto, seguro y escalable";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] via-[#0F3460] to-[#1A1A2E] z-0"
      />
      
      <motion.div 
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Juan José Burbano</h1>
        <p className="text-xl md:text-2xl mb-8 h-8">{text}</p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Estudiante de Ingeniería de Software enfocado en el desarrollo de soluciones backend de alto nivel, con especialización en arquitectura de software, seguridad y calidad. Apasionado por crear sistemas robustos, escalables y eficientes.

Ver Portafolio
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="bg-[#E94560] hover:bg-[#E94570] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Ver Portafolio
          </Link>
    <a 
  href="/CV.pdf"
  download="JuanJose_CV.pdf"
  className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105"
>
  <FileDown className="w-5 h-5" />
  Descargar CV
</a>


        </div>
      </motion.div>
    </div>
  );
};

export default Hero;