import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Zap, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return;
};