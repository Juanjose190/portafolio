import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const progress = (5 / 8) * 100; // 5 semestres de 8

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
        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#0F3460] p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">{t('education.degree')}</h3>
            <p className="text-gray-300 mb-4">{t('education.progress')}</p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-[#E94560]">
                    {t('education.progressLabel')}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${progress}%` } : {}}
                  transition={{ duration: 1 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#E94560]"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#0F3460] p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">{t('education.certifications')}</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-[#E94560] pl-4">
                <h4 className="text-xl font-semibold">{t('education.javaCert.title')}</h4>
                <p className="text-gray-300">{t('education.javaCert.institution')}</p>
                <p className="text-gray-300">{t('education.javaCert.year')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;