import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Python', 'D3.js', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, file sharing, and group conversations. Built with modern web technologies and WebSocket integration.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop',
      tags: ['React', 'Socket.io', 'Express', 'OpenAI'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance. Features dark theme and mobile-first approach.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work and recent projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" className="bg-portfolio-mint text-portfolio-bg hover:bg-portfolio-mint/90">
                      <Eye size={16} className="mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-portfolio-text mb-3 group-hover:text-portfolio-mint transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-portfolio-mint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    className="text-portfolio-mint hover:text-portfolio-mint/80 transition-colors flex items-center text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="text-gray-400 hover:text-portfolio-mint transition-colors flex items-center text-sm font-medium"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Other Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card p-6 rounded-xl hover-glow transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-bold text-portfolio-text mb-3 group-hover:text-portfolio-mint transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-portfolio-mint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    className="text-portfolio-mint hover:text-portfolio-mint/80 transition-colors flex items-center text-sm"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live
                  </a>
                  <a 
                    href={project.githubLink}
                    className="text-gray-400 hover:text-portfolio-mint transition-colors flex items-center text-sm"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-portfolio-purple text-white hover:bg-portfolio-purple/90 hover-glow px-8 py-3"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
