import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: t('skills.backend.title'),
      items: [
        { name: t('skills.backend.skills.java'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: t('skills.backend.skills.spring'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: t('skills.backend.skills.mysql'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", learning: true }
      ]
    },
    {
      category: t('skills.frontend.title'),
      items: [
        { name: t('skills.frontend.skills.react'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: t('skills.frontend.skills.angular'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: t('skills.frontend.skills.typescript'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ]
    },
    {
      category: t('skills.testing.title'),
      items: [
        { name: t('skills.testing.skills.junit'), icon: "https://junit.org/junit5/assets/img/junit5-logo.png" },
        { name: t('skills.testing.skills.selenium'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
        { name: t('skills.testing.skills.e2e'), icon: "https://testing-library.com/img/octopus-128x128.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0F3460]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t('skills.title')}
        </motion.h2>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="bg-[#1A1A2E] p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 relative">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm text-center">{skill.name}</span>
                    {skill.learning && (
                      <span className="absolute -top-2 -right-2 bg-[#E94560] text-xs px-2 py-1 rounded-full">
                        Learning
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;