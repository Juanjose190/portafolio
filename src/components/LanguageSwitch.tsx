import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-[#E94560] hover:bg-[#E94570] text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
      aria-label="Switch Language"
    >
      <Languages className="w-6 h-6" />
    </button>
  );
};

export default LanguageSwitch;