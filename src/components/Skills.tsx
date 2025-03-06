import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server, Terminal } from 'lucide-react';
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
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: t('skills.backend.skills.java'), level: 85 },
        { name: t('skills.backend.skills.spring'), level: 80 },
        { name: t('skills.backend.skills.mysql'), level: 75 }
      ]
    },
    {
      category: t('skills.frontend.title'),
      icon: <Layout className="w-6 h-6" />,
      items: [
        { name: t('skills.frontend.skills.react'), level: 70 },
        { name: t('skills.frontend.skills.angular'), level: 65 },
        { name: t('skills.frontend.skills.typescript'), level: 75 }
      ]
    },
    {
      category: t('skills.testing.title'),
      icon: <Terminal className="w-6 h-6" />,
      items: [
        { name: t('skills.testing.skills.junit'), level: 80 },
        { name: t('skills.testing.skills.selenium'), level: 70 },
        { name: t('skills.testing.skills.e2e'), level: 75 }
      ]
    },

    {
      category: t('skills.others.title'),
      icon: <Terminal className="w-6 h-6" />,
      items: [
        { name: t('skills.others.skills.Vercel'), level: 80 },
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
              <div className="flex items-center gap-3 mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-[#E94560] rounded-full"
                      />
                    </div>
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