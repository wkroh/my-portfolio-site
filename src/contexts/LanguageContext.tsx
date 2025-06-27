
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    hero_title: 'Full Stack Developer',
    hero_subtitle: 'Building modern web applications with passion and precision',
    hero_cta: 'View My Work',
    
    // About Section
    about_title: 'About Me',
    about_description: 'I am a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.',
    
    // Projects Section
    projects_title: 'Projects',
    
    // Contact Section
    contact_title: 'Get In Touch',
    contact_subtitle: 'Have a project in mind or want to collaborate? I\'d love to hear from you!',
    contact_conversation: 'Let\'s Start a Conversation',
    contact_description: 'Whether you have a question about my work, want to discuss a potential project, or just want to say hello, I\'m always open to new opportunities and connections.',
    contact_form_name: 'Your Name',
    contact_form_email: 'Email Address',
    contact_form_subject: 'Subject',
    contact_form_message: 'Message',
    send_message: 'Send Message',
    
    // Theme
    dark_mode: 'Dark Mode',
    light_mode: 'Light Mode',
    
    // Language
    english: 'English',
    arabic: 'العربية'
  },
  ar: {
    // Navigation
    about: 'نبذة عني',
    projects: 'المشاريع',
    contact: 'التواصل',
    
    // Hero Section
    hero_title: 'مطور ويب متكامل',
    hero_subtitle: 'بناء تطبيقات ويب حديثة بشغف ودقة',
    hero_cta: 'اطلع على أعمالي',
    
    // About Section
    about_title: 'نبذة عني',
    about_description: 'أنا مطور ويب متكامل شغوف بالتقنيات الحديثة. أحب إنشاء تطبيقات جميلة وعملية وسهلة الاستخدام تحل المشاكل الحقيقية.',
    
    // Projects Section
    projects_title: 'المشاريع',
    
    // Contact Section
    contact_title: 'تواصل معي',
    contact_subtitle: 'هل لديك مشروع في ذهنك أو تريد التعاون؟ أحب أن أسمع منك!',
    contact_conversation: 'لنبدأ محادثة',
    contact_description: 'سواء كان لديك سؤال حول عملي، أو تريد مناقشة مشروع محتمل، أو تريد فقط أن تقول مرحباً، فأنا منفتح دائماً على الفرص والاتصالات الجديدة.',
    contact_form_name: 'اسمك',
    contact_form_email: 'البريد الإلكتروني',
    contact_form_subject: 'الموضوع',
    contact_form_message: 'الرسالة',
    send_message: 'إرسال الرسالة',
    
    // Theme
    dark_mode: 'الوضع المظلم',
    light_mode: 'الوضع المضيء',
    
    // Language
    english: 'English',
    arabic: 'العربية'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
