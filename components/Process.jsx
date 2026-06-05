'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, ClipboardCheck, HeartHandshake } from 'lucide-react';
import { siteData } from '../data/data';

const ProcessStep = ({ icon: Icon, number, title, description, isLast, index }) => (
  <div className="relative flex flex-col items-center text-center group">
    {/* Connector Line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-10 lg:top-12 left-[60%] w-[80%] h-px bg-brand-gold/30 z-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-brand-gold/40" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-brand-gold/40" />
      </div>
    )}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#FAF5EF] border border-brand-gold/25 flex items-center justify-center text-brand-gold mb-8 lg:mb-10 relative z-10 group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-700 shadow-xl shadow-brand-gold/5"
    >
      <Icon size={30} className="lg:scale-110" strokeWidth={1} />
      <div className="absolute -top-1 -right-1 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-brand-gold text-brand-dark text-[10px] lg:text-[11px] font-bold flex items-center justify-center border-[3px] border-[#FDF8F3] font-display">
        {number}
      </div>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 + 0.2 }}
      className="relative z-10"
    >
      <h3 className="text-[17px] lg:text-[18px] font-serif italic text-brand-dark mb-3 lg:mb-4 tracking-tight">{title}</h3>
      <p className="text-[#7A6D63] text-[13px] leading-[1.75] max-w-[200px] lg:max-w-[220px] font-display font-normal">
        {description}
      </p>
    </motion.div>
  </div>
);

const Process = () => {
  const { process } = siteData;
  const icons = [Search, PenTool, ClipboardCheck, HeartHandshake];

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#FDF8F3] relative overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <span className="eyebrow">{process.eyebrow}</span>
          <h2 className="text-fluid-h2 text-brand-dark mb-4 leading-tight">
            {process.title} <br /> 
            <span className="font-serif italic font-normal text-brand-gold">{process.titleAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-x-12 lg:gap-0 mt-12 lg:mt-16 relative">
          {process.steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              index={index}
              icon={icons[index % icons.length]}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === process.steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
