
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-portfolio-card to-portfolio-bg"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-6xl animate-float">
          <Code className="text-portfolio-mint" />
        </div>
        <div className="absolute top-40 right-32 text-4xl animate-float" style={{ animationDelay: '1s' }}>
          <Database className="text-portfolio-purple" />
        </div>
        <div className="absolute bottom-32 left-32 text-5xl animate-float" style={{ animationDelay: '2s' }}>
          <Zap className="text-portfolio-pink" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">WKROH</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full Stack Developer crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            onClick={scrollToAbout}
            size="lg" 
            className="bg-gradient-to-r from-portfolio-mint to-portfolio-purple text-portfolio-bg hover:opacity-90 hover-glow font-semibold px-8 py-3 text-lg"
          >
            Explore My Work
          </Button>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-portfolio-mint transition-colors transform hover:scale-110 duration-300"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-portfolio-mint transition-colors transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-portfolio-mint transition-colors transform hover:scale-110 duration-300"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-portfolio-mint hover:text-white transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
