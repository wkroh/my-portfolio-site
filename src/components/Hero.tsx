import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Zap, Code, Database } from 'lucide-react';
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
      {/* Enhanced Cyber Background */}
      <div className="absolute inset-0">
        {/* Floating Cyber Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-mint/5 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-purple/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-portfolio-pink/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '4s' }}></div>
        
        {/* Cyber Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-mint to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-portfolio-mint to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-portfolio-pink to-transparent"></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-32 right-32 text-portfolio-mint/30 floating-element">
          <Code size={40} />
        </div>
        <div className="absolute bottom-32 left-32 text-portfolio-purple/30 floating-element" style={{ animationDelay: '3s' }}>
          <Database size={35} />
        </div>
        <div className="absolute top-1/2 right-16 text-portfolio-pink/30 floating-element" style={{ animationDelay: '1s' }}>
          <Zap size={30} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Cyber HUD Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-portfolio-mint opacity-50"></div>
          <div className="absolute -top-10 -right-10 w-20 h-20 border-r-2 border-t-2 border-portfolio-mint opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 border-l-2 border-b-2 border-portfolio-mint opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r-2 border-b-2 border-portfolio-mint opacity-50"></div>

          {/* Status Indicator */}
          <div className="mb-8 flex justify-center">
            <div className="glass-card px-6 py-2 rounded-full border border-portfolio-mint/30">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-portfolio-mint rounded-full pulse-glow"></div>
                <span className="text-portfolio-mint text-sm font-mono uppercase tracking-wider">System Online</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 relative">
            <span className="block text-portfolio-text mb-4 font-mono">
              <span className="text-portfolio-mint/60">&gt;</span> Hi, I'm
            </span>
            <span className="block gradient-text text-glow glitch-effect hover:animate-pulse">WKROH</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-mint/20 via-portfolio-purple/20 to-portfolio-pink/20 blur-lg -z-10"></div>
          </h1>
          
          <div className="mb-6">
            <p className="text-2xl sm:text-3xl text-portfolio-mint font-mono mb-2 animate-slide-in-left">
              <span className="text-portfolio-mint/60">[</span> Full Stack Developer <span className="text-portfolio-mint/60">]</span>
            </p>
            <p className="text-xl sm:text-2xl text-portfolio-purple font-mono animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <span className="text-portfolio-purple/60">[</span> UI/UX Designer <span className="text-portfolio-purple/60">]</span>
            </p>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-in-left font-light" style={{ animationDelay: '0.2s' }}>
            <span className="text-portfolio-mint font-mono">//</span> Crafting the future with code and pixels. Building digital experiences that push boundaries and redefine possibilities in the cyber realm.
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="cyber-button px-10 py-4 text-lg font-bold rounded-none relative group"
              onClick={() => scrollToAbout()}
            >
              <span className="relative z-10 flex items-center">
                <Zap size={20} className="mr-2" />
                INITIALIZE_PORTFOLIO()
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-black px-10 py-4 text-lg font-bold rounded-none font-mono relative overflow-hidden group"
            >
              <span className="relative z-10">DOWNLOAD_CV.exe</span>
              <div className="absolute inset-0 bg-portfolio-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-12 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Contact' }
            ].map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href}
                className="group relative p-4 glass-card rounded-lg hover-glow transition-all duration-300 border border-portfolio-mint/20 hover:border-portfolio-mint/60"
              >
                <Icon size={32} className="text-gray-400 group-hover:text-portfolio-mint transition-colors duration-300 group-hover:scale-110" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-portfolio-mint opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Code Terminal Effect */}
          <div className="max-w-2xl mx-auto mb-8 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card p-6 rounded-lg border border-portfolio-mint/30 font-mono text-left">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">~/wkroh/portfolio</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-portfolio-mint">
                  <span className="text-gray-400">$</span> whoami
                </div>
                <div className="text-portfolio-purple ml-4">Full Stack Developer & UI/UX Designer</div>
                <div className="text-portfolio-mint">
                  <span className="text-gray-400">$</span> skills --list
                </div>
                <div className="text-portfolio-pink ml-4">React, TypeScript, Node.js, Python, UI/UX</div>
                <div className="text-portfolio-mint">
                  <span className="text-gray-400">$</span> status
                </div>
                <div className="text-green-400 ml-4 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 pulse-glow"></div>
                  Ready for new challenges
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 group"
        >
          <div className="glass-card p-3 rounded-full border border-portfolio-mint/30 hover:border-portfolio-mint/60 transition-all duration-300">
            <ChevronDown size={32} className="text-portfolio-mint group-hover:text-portfolio-mint/80 transition-colors animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
