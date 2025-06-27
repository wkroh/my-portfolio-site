
import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces that enhance user experience.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, responsiveness, and seamless performance.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results on time.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-portfolio-text mb-6">
              Turning Ideas Into <span className="gradient-text">Digital Reality</span>
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 5 years of experience in web development and design, I specialize in creating 
              modern, responsive applications that not only look stunning but also deliver exceptional 
              user experiences.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey began with a curiosity for how things work on the web, and it has evolved 
              into a passion for crafting digital solutions that make a real impact. I believe in 
              the power of clean code, thoughtful design, and continuous learning.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {['React', 'TypeScript', 'Node.js', 'Python', 'UI/UX', 'Cloud'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-portfolio-mint hover:bg-white/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 rounded-2xl neon-border">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-portfolio-mint to-portfolio-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-portfolio-bg">W</span>
                  </div>
                  <h4 className="text-2xl font-bold text-portfolio-text">WKROH</h4>
                  <p className="text-portfolio-mint">Full Stack Developer</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-portfolio-mint">50+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-portfolio-mint">5+</div>
                    <div className="text-sm text-gray-400">Years Exp</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-portfolio-mint">100+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-portfolio-mint">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-6 rounded-xl hover-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-portfolio-mint mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={40} />
              </div>
              <h4 className="text-xl font-bold text-portfolio-text mb-3">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
