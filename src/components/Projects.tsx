import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: t('projects.scheduler.title'),
      description: t('projects.scheduler.description'),
      image: "https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2021/05/5-14-21-10-lecciones-de-software-abierto-en-los-sistemas-de-Historia-Cli%CC%81nica-Electro%CC%81nica.jpg",
      tech: [
        
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ]
    },
    {
      title: t('projects.pos.title'),
      description: t('projects.pos.description'),
      image: "https://images.ctfassets.net/63bmaubptoky/UXDUxnzeuBi4Ypvt69M6DR1LpbgkgSDELY0sBODRJ1Q/a964e38548c5c8eab42614339c0ac0e3/eHopper-sistema-POS.png",
      tech: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ],
      github: "https://github.com/JuanBCode/Sistema-de-Ventas"
    },
    {
      title: t('projects.landing.title'),
      description: t('projects.landing.description'),
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
      tech: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1A1A2E]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t('projects.title')}
        </motion.h2>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0F3460] rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <motion.div
                        initial="hidden"
                        whileHover="visible"
                        animate="hidden"
                        className="w-12 h-12"
                      >
                        <motion.svg 
                          viewBox="0 0 100 100" 
                          className="w-full h-full"
                          whileHover={{ scale: 1.2 }}
                        >
                          <motion.path
                            d="M30 10 L70 10 Q80 10 80 20 L80 30 Q80 40 70 40 L55 40 L50 50 L45 40 L30 40 Q20 40 20 30 L20 20 Q20 10 30 10 Z"
                            fill="#E94560"
                            variants={{
                              hidden: { opacity: 0, scale: 0, y: -10 },
                              visible: { opacity: 1, scale: 1, y: 0 }
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.text
                            x="50"
                            y="28"
                            textAnchor="middle"
                            fill="white"
                            fontSize="14"
                            fontWeight="bold"
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 }
                            }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                          >
                            Mew!
                          </motion.text>
                          <motion.path
                            d="M50 8C25.6 8 6 27.6 6 52c0 19.5 12.6 36 30.1 41.9 2.2.4 3-.9 3-2.1v-8.2c-12.2 2.7-14.8-5.3-14.8-5.3-2-5.1-4.9-6.5-4.9-6.5-4-2.7.3-2.7.3-2.7 4.4.3 6.8 4.6 6.8 4.6 3.9 6.7 10.3 4.8 12.8 3.7.4-2.9 1.5-4.8 2.8-5.9-9.7-1.1-20-4.9-20-21.8 0-4.8 1.7-8.8 4.5-11.9-.5-1.1-2-5.7.4-11.8 0 0 3.7-1.2 12.1 4.5 3.5-1 7.3-1.5 11-1.5 3.7 0 7.5.5 11 1.5 8.4-5.7 12.1-4.5 12.1-4.5 2.4 6.1.9 10.7.4 11.8 2.8 3.1 4.5 7.1 4.5 11.9 0 17-10.3 20.7-20.1 21.8 1.6 1.4 3 4.1 3 8.2v12.2c0 1.2.8 2.5 3 2.1C81.4 88 94 71.5 94 52c0-24.4-19.6-44-44-44z"
                            fill="currentColor"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                          />
                          <motion.circle
                            cx="35"
                            cy="40"
                            r="3"
                            fill="white"
                            animate={{
                              scale: [1, 1.2, 1],
                              y: [0, -2, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                          <motion.circle
                            cx="55"
                            cy="40"
                            r="3"
                            fill="white"
                            animate={{
                              scale: [1, 1.2, 1],
                              y: [0, -2, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                          <motion.path
                            d="M30 65 Q25 70 20 65"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            animate={{
                              d: ["M30 65 Q25 70 20 65", "M30 65 Q25 60 20 65"]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                          <motion.path
                            d="M70 65 Q75 70 80 65"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            animate={{
                              d: ["M70 65 Q75 70 80 65", "M70 65 Q75 60 80 65"]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                              delay: 0.5
                            }}
                          />
                        </motion.svg>
                      </motion.div>
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 group"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;