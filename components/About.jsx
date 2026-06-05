'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Heart, Award } from 'lucide-react';
import { siteData } from '../data/data';

const StatCard = ({ icon: Icon, value, label, delay }) => (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    className="bg-white border border-[rgba(180,160,140,0.3)] rounded-[20px] p-6 lg:p-8 group transition-all duration-500 hover:scale-[1.015]"
  >
    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-wedding-input bg-[#FAF5EF] flex items-center justify-center text-brand-gold mb-6 lg:mb-8 group-hover:bg-brand-dark group-hover:text-brand-gold transition-all duration-500">
      <Icon size={24} className="lg:scale-110" strokeWidth={1.5} />
    </div>
    <h3 className="text-[40px] lg:text-[48px] font-serif font-normal text-brand-dark mb-2 leading-none">{value}</h3>
    <p className="text-[9px] lg:text-[10px] font-display font-medium uppercase tracking-[0.2em] text-text-subtle mb-0">{label}</p>
  </motion.div>
);

const About = () => {
  const { about } = siteData;
  const icons = [Heart, Calendar, Users, Award];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#FAF5EF] relative overflow-hidden">
      <div className="container-responsive">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
          {/* Asymmetric Split - Text Side (55%) */}
          <div className="lg:w-[55%] text-left lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-2 lg:justify-start">
                <span className="eyebrow !mb-4">{about.eyebrow}</span>
              </div>
              
              <h2 className="text-fluid-h2 text-brand-dark mb-8 lg:mb-10 lg:max-w-xl">
                {about.title} <br />
                <span className="text-brand-gold">{about.titleAccent}</span>
              </h2>
              
              <p className="text-[15px] lg:text-[16px] text-[#3D3530] leading-[1.8] mb-10 lg:mb-12 font-display font-light">
                {about.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-5 lg:gap-y-6">
                {about.bullets.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <rect width="20" height="2" fill="#C9A84C"/>
                    </svg>
                    <span className="text-[#5E5248] font-display font-normal italic text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Side (45%) */}
          <div className="lg:w-[45%] w-full grid grid-cols-2 gap-4 lg:gap-6">
            {about.stats.map((stat, i) => (
              <StatCard 
                key={stat.label} 
                icon={icons[i]} 
                value={stat.value} 
                label={stat.label} 
                delay={0.1 * (i + 1)} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/30 skew-x-12 translate-x-32 z-0 pointer-events-none hidden lg:block" />
    </section>
  );
};

export default About;
