import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-[#0F3460]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
            <p className="text-lg mb-6">
              Soy un desarrollador de software especializado en la creación de aplicaciones robustas y seguras. 
              Mi enfoque se centra en la arquitectura de software, el desarrollo backend con Java, y la implementación 
              de prácticas de QA para garantizar la calidad del código.
            </p>
            <p className="text-lg mb-6">
              Mi objetivo es convertirme en un arquitecto de software de élite, con un fuerte énfasis en la 
              ciberseguridad y las mejores prácticas de desarrollo.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80"
                alt="Programming setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;