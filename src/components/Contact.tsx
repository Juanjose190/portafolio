import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Check, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setStatus('sending');
      await emailjs.sendForm(
        'service_2l2vxm7',
        'template_ci3prwp',
        formRef.current,
        '_5WRvmu42yilw6ARD'
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0F3460]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">{t('contact.title')}</h2>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:juanbmusic8@gmail.com"
              className="flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#E94560] px-6 py-3 rounded-full transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-jos%C3%A9-burbano-587aab266/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#E94560] px-6 py-3 rounded-full transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-6">
              <input
                type="text"
                name="user_name"
                placeholder={t('contact.name')}
                required
                className="w-full px-4 py-3 bg-[#1A1A2E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560]"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-[#1A1A2E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560]"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder={t('contact.message')}
                required
                rows={4}
                className="w-full px-4 py-3 bg-[#1A1A2E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560]"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="relative w-full bg-[#E94560] hover:bg-[#E94570] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === 'sending' ? (
                t('contact.sending')
              ) : status === 'success' ? (
                <span className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  {t('contact.sent')}
                </span>
              ) : status === 'error' ? (
                <span className="flex items-center justify-center gap-2">
                  <X className="w-5 h-5" />
                  {t('contact.error')}
                </span>
              ) : (
                t('contact.send')
              )}
            </button>
          </form>
        </motion.div>
      </div>
      <div className="text-right pr-8 pt-12">
        <pre className="font-mono text-2xl text-[#E94560]">{'    }'}</pre>
        <pre className="font-mono text-2xl text-[#E94560]">{'}'}</pre>
      </div>
    </section>
  );
};

export default Contact;