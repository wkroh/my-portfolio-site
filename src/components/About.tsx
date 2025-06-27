
import React from 'react';
import { Mail, Phone, MapPin, Calendar, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 rounded-2xl border border-white/10 sticky top-8">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-portfolio-mint to-portfolio-purple rounded-2xl mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl font-bold text-black">W</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">WKROH</h2>
                <p className="text-portfolio-mint font-medium">Full Stack Developer</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-3 text-portfolio-mint" />
                  <span className="text-sm">wkroh@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-3 text-portfolio-mint" />
                  <span className="text-sm">+966 123456789</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar size={16} className="mr-3 text-portfolio-mint" />
                  <span className="text-sm">March 15, 1995</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-3 text-portfolio-mint" />
                  <span className="text-sm">Saudi Arabia, Riyadh</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-portfolio-mint hover:text-black transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-portfolio-mint hover:text-black transition-all duration-300">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-portfolio-mint hover:text-black transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-portfolio-mint hover:text-black transition-all duration-300">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me Section */}
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-2">About Me</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-portfolio-mint to-portfolio-purple rounded mb-6"></div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a <span className="text-portfolio-mint font-semibold">Full Stack Developer</span> with a passion for solving challenges in 
                innovative ways. From developing tools to enhance functionality to building efficient and powerful systems, I 
                enjoy turning complex tasks into streamlined, effective solutions.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                With a focus on both technical excellence and creative design, I implement strategies that help individuals 
                and organizations strengthen their digital defenses. My work reflects a deep commitment to quality and 
                precision, whether it's coding, creating tools, or conducting development assessments.
              </p>
            </div>

            {/* What I'm Doing Section */}
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-2">What I'm Doing</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-portfolio-mint to-portfolio-purple rounded mb-6"></div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">01</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Frontend Development</h4>
                    <p className="text-gray-400 text-sm">
                      Creating modern, responsive web applications with React, Vue.js, and cutting-edge technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">02</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Backend Development</h4>
                    <p className="text-gray-400 text-sm">
                      Building robust server-side applications and APIs using Node.js, Python, and modern frameworks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">03</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">UI/UX Design</h4>
                    <p className="text-gray-400 text-sm">
                      Designing intuitive user interfaces and experiences that delight users and drive engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">04</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Mobile Development</h4>
                    <p className="text-gray-400 text-sm">
                      Developing cross-platform mobile applications with React Native and modern mobile technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-2">Certificates</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-portfolio-mint to-portfolio-purple rounded mb-6"></div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">AWS</span>
                  </div>
                  <h4 className="text-white font-semibold">AWS Certified</h4>
                </div>
                
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">GCP</span>
                  </div>
                  <h4 className="text-white font-semibold">Google Cloud</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
