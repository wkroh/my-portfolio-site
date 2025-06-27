
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('about_title')}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-mint to-portfolio-purple rounded mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about_description')}
          </p>
        </div>
      </div>
    </section>
  );
};
