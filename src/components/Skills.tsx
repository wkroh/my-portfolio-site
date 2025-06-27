
import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
      ]
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'UI/UX Design', level: 92 },
        { name: 'Figma', level: 90 },
        { name: 'Adobe Creative', level: 85 },
        { name: 'Git/GitHub', level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-8 rounded-xl hover-glow transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-portfolio-text mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-portfolio-text font-medium">{skill.name}</span>
                      <span className="text-portfolio-mint text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-portfolio-mint to-portfolio-purple rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">
              Always <span className="gradient-text">Learning & Growing</span>
            </h3>
            <p className="text-gray-300 max-w-2xl">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the cutting edge of development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
