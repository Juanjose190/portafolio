import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Linkedin } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const progress = (6 / 8) * 100;
  const progressDecimal = progress / 100;
  
  const particleCount = 15;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    x: 40 + Math.random() * 40,
    y: 100 - (i / particleCount) * 60 * progressDecimal,
    size: 2 + Math.random() * 3,
    xOffset: Math.sin(i * 0.5) * 5 
  }));

  const certifications = [
    {
      title: t('education.javaCert.title'),
      institution: t('education.javaCert.institution'),
      year: t('education.javaCert.year')
    },
    {
      title: t('education.javaUdemyCert.title'),
      institution: t('education.javaUdemyCert.institution'),
      year: t('education.javaUdemyCert.year')
    },
      {
      title: t('education.nodeCert.title'),
      institution: t('education.nodeCert.institution'),
      year: t('education.nodeCert.year')
    }, 
      {
    title: t('education.bigDataCert.title'),
    institution: t('education.bigDataCert.institution'),
    year: t('education.bigDataCert.year')
  }, 
  {
  title: t('education.githubActionsCert.title'),
  institution: t('education.githubActionsCert.institution'),
  year: t('education.githubActionsCert.year')
}
  ];

  return (
    <section id="education" className="py-20 bg-[#1A1A2E]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t('education.title')}
        </motion.h2>
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#0F3460] p-6 rounded-xl md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">{t('education.degree')}</h3>
            <p className="text-gray-300 mb-8">{t('education.progress')}</p>
            <div className="relative h-64 w-48 mx-auto">
              <motion.svg
                viewBox="0 0 120 140"
                className="w-full h-full"
                initial="hidden"
                animate="visible"
              >
                <defs>
                  <radialGradient id="portalGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                    <stop offset="0%" stopColor="#E94560" />
                    <stop offset="100%" stopColor="#0F3460" />
                  </radialGradient>
                  <linearGradient id="beamGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E94560" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#5382A1" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <motion.circle
                  cx="60"
                  cy="100"
                  r="20"
                  fill="#1A1A2E"
                  stroke="#E94560"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />

                <motion.path
                  d="M60,80 L60,75 L70,75 L70,70 M60,80 L60,75 L50,75 L50,70"
                  stroke="#E94560"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />

                <motion.circle
                  cx="60"
                  cy="60"
                  r="15"
                  fill="url(#portalGradient)"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    delay: 0.5
                  }}
                  filter="url(#glow)"
                />
                
                <motion.ellipse
                  cx="60"
                  cy="60"
                  rx="25"
                  ry="25"
                  fill="none"
                  stroke="#E94560"
                  strokeWidth="1"
                  strokeDasharray="5,3"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 0.7,
                    rotate: 360
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.7 },
                    rotate: { 
                      duration: 15, 
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                />
                
                <motion.rect
                  x="58"
                  y="75"
                  width="4"
                  height="25"
                  fill="url(#beamGradient)"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ 
                    scaleY: 1, 
                    opacity: [0.7, 0.9, 0.7] 
                  }}
                  transition={{ 
                    scaleY: { duration: 0.8, delay: 1 },
                    opacity: { 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }
                  }}
                  style={{ transformOrigin: '60px 100px' }}
                />

                {particles.map(particle => (
                  <motion.circle
                    key={particle.id}
                    cx={particle.x}
                    cy={particle.y}
                    r={particle.size}
                    fill="#E94560"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ 
                      opacity: [0, 0.8, 0],
                      y: [0, -15, -30],
                      x: [particle.x, particle.x + particle.xOffset, particle.x]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: particle.delay,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeOut"
                    }}
                  />
                ))}

                <motion.rect
                  x="30"
                  y="30"
                  width="60"
                  height="10"
                  rx="5"
                  fill="none"
                  stroke="#5382A1"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
                
                <motion.rect
                  x="32"
                  y="32"
                  width="56"
                  height="6"
                  rx="3"
                  fill="#5382A1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progressDecimal }}
                  transition={{ duration: 1.5, delay: 1.3 }}
                  style={{ transformOrigin: '32px 35px' }}
                />

                <motion.text
                  x="60"
                  y="23"
                  textAnchor="middle"
                  fill="#E94560"
                  fontSize="12"
                  fontFamily="monospace"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    opacity: { 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    delay: 1.4
                  }}
                >
                  {Math.round(progress)}%
                </motion.text>

                <motion.text
                  x="60"
                  y="115"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  KNOWLEDGE UPLINK
                </motion.text>
              </motion.svg>
            </div>
          </motion.div>
          
       
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#0F3460] p-6 rounded-xl relative"
          >
            <h3 className="text-2xl font-bold mb-4">{t('education.certifications')}</h3>
            <div className="space-y-4 mb-16">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-[#E94560] pl-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <h4 className="text-xl font-semibold">{cert.title}</h4>
                  <p className="text-gray-300">{cert.institution}</p>
                  <p className="text-gray-300">{cert.year}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Nota adhesiva LinkedIn */}
            <motion.div
              className="absolute -bottom-4 -right-4"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1, 
                rotate: -8 
              } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 1.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 border-l-4 border-[#E94560] p-3 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-slate-700 text-center text-sm">
                  <div className="text-xs mb-1">💼 ¡Hey!</div>
                  <div className="font-semibold text-xs">Mira todas mis</div>
                  <div className="font-semibold text-xs">certificaciones en</div>
                  <div className="flex items-center justify-center gap-1 mt-1 text-[#E94560]">
                    <Linkedin className="w-3 h-3" />
                    <span className="font-bold text-xs">LinkedIn</span>
                  </div>
                </div>
                {/* Chincheta */}
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-slate-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-50 shadow-sm"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;