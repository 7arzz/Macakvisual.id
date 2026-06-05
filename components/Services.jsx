'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  Palette, 
  Camera, 
  Utensils, 
  Music, 
  Sparkles 
} from 'lucide-react';
import { siteData } from '../data/data';

const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.05 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    className="bg-white border border-border-default rounded-wedding-card p-8 lg:p-10 group relative transition-all duration-500 hover:border-[rgba(201,168,76,0.5)] hover:scale-[1.015]"
  >
    <div className="relative z-10 text-left">
      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[10px] bg-[#FAF0F4] text-[#C9A05A] flex items-center justify-center mb-8 lg:mb-10 group-hover:bg-brand-dark group-hover:text-brand-gold transition-all duration-700">
        <Icon size={28} className="lg:scale-110" strokeWidth={1} />
      </div>
      
      <h3 className="text-[18px] lg:text-[20px] font-serif italic font-normal text-brand-dark mb-4 tracking-tight">
        {title}
      </h3>
      
      <p className="text-[#6B5F58] leading-[1.8] font-display font-normal text-[14px] mb-8">
        {description}
      </p>
      
    </div>
  </motion.div>
);

const Services = () => {
  const { services } = siteData;
  const icons = [ClipboardList, Palette, Camera, Utensils, Music, Sparkles];

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#FDF8F3] relative overflow-hidden">
      <div className="container-responsive text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20 flex flex-col items-center"
        >
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="text-fluid-h2 text-brand-dark mb-6 leading-tight">
            {services.title} <br /> 
            <span className="font-serif italic font-normal text-brand-gold">{services.titleAccent}</span>
          </h2>
          <div className="w-16 h-px bg-brand-gold/40 mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.list.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              icon={icons[index % icons.length]} 
              title={service.title}
              description={service.description}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
