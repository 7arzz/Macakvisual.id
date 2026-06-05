'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { siteData } from '../data/data';

const TestimonialCard = ({ name, role, content, rating, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.05 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    className="bg-white p-8 lg:p-10 rounded-[28px] border border-[rgba(180,160,140,0.2)] flex flex-col items-center text-center group relative overflow-hidden transition-all duration-500 hover:border-l-[4px] hover:border-l-brand-gold"
  >
    <div className="absolute top-6 right-8 text-[rgba(201,168,76,0.12)]">
      <Quote size={40} className="lg:hidden" />
      <Quote size={60} className="hidden lg:block" />
    </div>

    <div className="flex gap-1 mb-6 lg:mb-8 relative z-10">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          fill={i < rating ? "#C9A84C" : "none"} 
          stroke="#C9A84C" 
          strokeWidth={1.5}
        />
      ))}
    </div>

    <blockquote className="text-[14px] lg:text-[15px] font-serif text-[#3D3530] italic leading-[1.8] lg:leading-[1.9] mb-8 lg:mb-10 flex-1 px-2 lg:px-4 relative z-10">
      "{content}"
    </blockquote>

    <div className="flex flex-col items-center gap-3 lg:gap-4 relative z-10">
      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full p-[2px] bg-linear-to-tr from-[#E8C4A0] to-[#C9A84C]">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-display font-bold text-brand-dark text-base lg:text-lg">
          {name[0]}
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="font-display font-semibold text-brand-dark text-[10px] md:text-[11px] uppercase tracking-[0.18em]">{name}</h4>
        <p className="text-[9px] md:text-[10px] font-display font-medium uppercase tracking-[0.2em] text-brand-gold">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const { testimonials } = siteData;

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-[#FDF8F3] relative overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 className="text-fluid-h2 text-brand-dark italic mb-4 leading-tight">
            {testimonials.title} <br /> 
            <span className="font-serif italic font-normal text-brand-gold">{testimonials.titleAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.list.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={0.1 * (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
