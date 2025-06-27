
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'wkroh@example.com',
      link: 'mailto:wkroh@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: '#' },
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
    { icon: Twitter, label: 'Twitter', link: '#' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-portfolio-text mb-6">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Whether you have a question about my work, want to discuss a potential project, 
                or just want to say hello, I'm always open to new opportunities and connections.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="flex items-center space-x-4 glass-card p-4 rounded-lg hover-glow transition-all duration-300"
                >
                  <div className="text-portfolio-mint">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">{info.label}</p>
                    <a 
                      href={info.link}
                      className="text-portfolio-text hover:text-portfolio-mint transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-bold text-portfolio-text mb-4">Follow Me</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    className="text-gray-400 hover:text-portfolio-mint transition-colors transform hover:scale-110 duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-portfolio-text placeholder-gray-400 focus:border-portfolio-mint"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-portfolio-text placeholder-gray-400 focus:border-portfolio-mint"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-portfolio-text placeholder-gray-400 focus:border-portfolio-mint"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-portfolio-text placeholder-gray-400 focus:border-portfolio-mint resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-portfolio-mint to-portfolio-purple text-portfolio-bg hover:opacity-90 hover-glow font-semibold py-3"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2024 WKROH. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
