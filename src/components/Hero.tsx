
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-mint/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-portfolio-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="block text-portfolio-text mb-2">Hi, I'm</span>
            <span className="block gradient-text animate-glow">WKROH</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 animate-slide-in-left">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            I craft exceptional digital experiences with modern technologies and innovative design thinking. 
            Passionate about creating solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-portfolio-mint text-portfolio-bg hover:bg-portfolio-mint/90 hover-glow px-8 py-3 text-lg font-semibold"
              onClick={() => scrollToAbout()}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white px-8 py-3 text-lg"
            >
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <a href="#" className="text-gray-400 hover:text-portfolio-mint transition-colors transform hover:scale-110 duration-300">
              <Github size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-portfolio-mint transition-colors transform hover:scale-110 duration-300">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-portfolio-mint transition-colors transform hover:scale-110 duration-300">
              <Mail size={28} />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-mint hover:text-portfolio-mint/80 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};
