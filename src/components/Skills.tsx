import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Desarrollo Backend",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "MySQL", level: 75 }
    ]
  },
  {
    category: "Desarrollo Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React", level: 70 },
      { name: "Angular", level: 65 },
      { name: "TypeScript", level: 75 }
    ]
  },
  {
    category: "Testing & QA",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: "JUnit", level: 80 },
      { name: "Selenium", level: 70 },
      { name: "Testing E2E", level: 75 }
    ]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-[#0F3460]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Habilidades Técnicas
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