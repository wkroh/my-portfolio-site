
import React from 'react';
import { Monitor, Server, Palette, Zap } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
      ]
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 92 },
        { name: 'Figma', level: 90 },
        { name: 'Adobe Creative', level: 85 },
        { name: 'Git/GitHub', level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Cyber Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-portfolio-mint/30 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-portfolio-purple/30 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-pink/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="glass-card px-6 py-2 rounded-full border border-portfolio-mint/30 mb-6">
              <span className="text-portfolio-mint font-mono text-sm uppercase tracking-wider flex items-center">
                <Zap size={16} className="mr-2" />
                Skills Matrix
              </span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 font-mono">
            <span className="gradient-text text-glow">&lt;EXPERTISE_LEVEL&gt;</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            <span className="text-portfolio-mint font-mono">//</span> Mastered technologies powering the digital frontier
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-8 rounded-xl hover-glow transition-all duration-500 relative group scan-lines"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-portfolio-mint to-portfolio-purple rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold text-portfolio-text font-mono group-hover:text-portfolio-mint transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-portfolio-text font-medium font-mono">{skill.name}</span>
                      <div className="flex items-center">
                        <span className="text-portfolio-mint text-sm font-bold font-mono mr-2">{skill.level}%</span>
                        <div className="w-2 h-2 bg-portfolio-mint rounded-full pulse-glow"></div>
                      </div>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-black/30 rounded-full h-3 overflow-hidden border border-portfolio-mint/20">
                        <div 
                          className="h-full bg-gradient-to-r from-portfolio-mint via-portfolio-purple to-portfolio-pink rounded-full transition-all duration-1500 ease-out relative"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                      {/* Glow Effect */}
                      <div 
                        className="absolute top-0 h-full bg-gradient-to-r from-portfolio-mint to-portfolio-purple rounded-full opacity-50 blur-sm transition-all duration-1500 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-portfolio-mint opacity-30 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-portfolio-mint opacity-30 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-portfolio-mint opacity-30 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-portfolio-mint opacity-30 group-hover:opacity-70 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Learning Section */}
        <div className="text-center">
          <div className="glass-card p-10 rounded-xl inline-block neon-border hologram relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-portfolio-mint"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-portfolio-mint"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-portfolio-mint"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-portfolio-mint"></div>
            
            <div className="flex items-center justify-center mb-6">
              <Zap size={32} className="text-portfolio-mint mr-3 pulse-glow" />
              <h3 className="text-3xl font-bold gradient-text font-mono">
                CONTINUOUS_EVOLUTION()
              </h3>
            </div>
            <p className="text-gray-300 max-w-2xl font-light text-lg leading-relaxed">
              <span className="text-portfolio-mint font-mono">//</span> In the rapidly evolving digital landscape, adaptation is survival. 
              I continuously integrate cutting-edge technologies and methodologies to remain at the forefront of innovation.
            </p>
            
            {/* Status Indicators */}
            <div className="flex justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 pulse-glow"></div>
                <span className="text-xs text-green-400 font-mono uppercase">Learning</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-portfolio-mint rounded-full mx-auto mb-2 pulse-glow"></div>
                <span className="text-xs text-portfolio-mint font-mono uppercase">Building</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-portfolio-purple rounded-full mx-auto mb-2 pulse-glow"></div>
                <span className="text-xs text-portfolio-purple font-mono uppercase">Innovating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
