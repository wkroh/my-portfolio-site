import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { validateEmail, validateInput, sanitizeHtml, generateCSRFToken, createRateLimiter } from '@/utils/security';

// Rate limiter for form submissions (max 5 submissions per 15 minutes)
const formRateLimiter = createRateLimiter(5, 15 * 60 * 1000);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [csrfToken] = useState(generateCSRFToken());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Security validations
    if (isSubmitting) return;
    
    // Rate limiting
    const clientId = 'user-' + (localStorage.getItem('clientId') || Date.now().toString());
    if (!localStorage.getItem('clientId')) {
      localStorage.setItem('clientId', clientId);
    }
    
    if (!formRateLimiter(clientId)) {
      toast({
        title: "Rate Limit Exceeded",
        description: "Too many requests. Please try again later.",
        variant: "destructive"
      });
      return;
    }
    
    // Input validation
    if (!validateInput(formData.name, 100) || !validateInput(formData.subject, 200) || 
        !validateInput(formData.message, 2000)) {
      toast({
        title: "Invalid Input",
        description: "Please check your input for invalid characters.",
        variant: "destructive"
      });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeHtml(formData.name.trim()),
        email: formData.email.trim().toLowerCase(),
        subject: sanitizeHtml(formData.subject.trim()),
        message: sanitizeHtml(formData.message.trim()),
        csrfToken
      };
      
      // Here you would typically send to your secure backend
      console.log('Secure form submission:', sanitizedData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Basic input sanitization on change
    const sanitizedValue = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    setFormData({
      ...formData,
      [name]: sanitizedValue
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
            <span className="gradient-text">{t('contact_title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-portfolio-text mb-6">
                {t('contact_conversation')}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t('contact_description')}
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

          {/* Secure Contact Form */}
          <div className="glass-card p-8 rounded-xl neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="csrfToken" value={csrfToken} />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-2">
                    {t('contact_form_name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-portfolio-text placeholder-gray-400 focus:border-portfolio-mint"
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-2">
                    {t('contact_form_email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-portfolio-text placeholder-gray-400 focus:border-portfolio-mint"
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text mb-2">
                  {t('contact_form_subject')}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={200}
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-portfolio-text placeholder-gray-400 focus:border-portfolio-mint"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-2">
                  {t('contact_form_message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={2000}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-portfolio-text placeholder-gray-400 focus:border-portfolio-mint resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-portfolio-mint to-portfolio-purple text-portfolio-bg hover:opacity-90 hover-glow font-semibold py-3 disabled:opacity-50"
              >
                <Send size={20} className="mr-2" />
                {isSubmitting ? 'Sending...' : t('send_message')}
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
