
import React from 'react';
import { ExternalLink, Github, Eye, Terminal, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Python', 'D3.js', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, file sharing, and group conversations. Built with modern web technologies and WebSocket integration.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tags: ['React', 'Socket.io', 'Express', 'OpenAI'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance. Features dark theme and mobile-first approach.',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop',
      tags: ['React', 'Tailwind', 'Framer Motion', 'Vercel'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Zustand'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features offline support and PWA capabilities.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      tags: ['React', 'PWA', 'Chart.js', 'Weather API'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Cyber Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-mint/40 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-purple/40 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-portfolio-pink/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="glass-card px-6 py-2 rounded-full border border-portfolio-mint/30 mb-4">
              <span className="text-portfolio-mint font-mono text-sm uppercase tracking-wider flex items-center">
                <Terminal size={16} className="mr-2" />
                Project Archive
              </span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 font-mono">
            <span className="gradient-text text-glow">&lt;CODE_GALLERY&gt;</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            <span className="text-portfolio-mint font-mono">//</span> Digital artifacts from the development matrix
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-500 group relative border border-portfolio-mint/20 hover:border-portfolio-mint/60"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-mint/20 via-transparent to-portfolio-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button size="sm" className="cyber-button rounded-none">
                      <Eye size={16} className="mr-2" />
                      VIEW
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none font-mono">
                      <Github size={16} className="mr-2" />
                      CODE
                    </Button>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-portfolio-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-portfolio-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-portfolio-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-portfolio-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-portfolio-text mb-4 group-hover:text-portfolio-mint transition-colors font-mono glitch-effect">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-black/30 border border-portfolio-mint/30 rounded-none text-xs font-mono text-portfolio-mint uppercase tracking-wider hover:border-portfolio-mint/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex space-x-6">
                  <a 
                    href={project.liveLink}
                    className="text-portfolio-mint hover:text-portfolio-mint/80 transition-colors flex items-center text-sm font-mono uppercase tracking-wider group/link"
                  >
                    <ExternalLink size={16} className="mr-2 group-hover/link:scale-110 transition-transform" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="text-gray-400 hover:text-portfolio-mint transition-colors flex items-center text-sm font-mono uppercase tracking-wider group/link"
                  >
                    <Github size={16} className="mr-2 group-hover/link:scale-110 transition-transform" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-4xl font-bold text-center mb-8 font-mono">
            <span className="gradient-text">&lt;/OTHER_PROJECTS&gt;</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card p-6 rounded-xl hover-glow transition-all duration-300 group relative border border-portfolio-mint/20 hover:border-portfolio-mint/40 scan-lines"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-3 right-3 w-2 h-2 bg-portfolio-mint rounded-full pulse-glow"></div>
                
                <h4 className="text-xl font-bold text-portfolio-text mb-3 group-hover:text-portfolio-mint transition-colors font-mono">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-black/30 border border-portfolio-mint/30 rounded-none text-xs font-mono text-portfolio-mint uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    className="text-portfolio-mint hover:text-portfolio-mint/80 transition-colors flex items-center text-sm font-mono group/link"
                  >
                    <ExternalLink size={14} className="mr-1 group-hover/link:scale-110 transition-transform" />
                    Live
                  </a>
                  <a 
                    href={project.githubLink}
                    className="text-gray-400 hover:text-portfolio-mint transition-colors flex items-center text-sm font-mono group/link"
                  >
                    <Github size={14} className="mr-1 group-hover/link:scale-110 transition-transform" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="inline-block relative">
            <Button 
              size="lg" 
              className="cyber-button px-12 py-4 text-lg font-bold rounded-none relative group font-mono"
            >
              <span className="relative z-10 flex items-center uppercase tracking-wider">
                <Terminal size={20} className="mr-3" />
                Access_Full_Repository()
              </span>
            </Button>
            <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-mint via-portfolio-purple to-portfolio-pink opacity-30 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
