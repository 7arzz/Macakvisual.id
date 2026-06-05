'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import { siteData } from '../data/data';

const PricingCard = ({ title, price, features, popular, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.05 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    className={`p-8 lg:p-10 flex flex-col h-full relative transition-all duration-500 group ${
      popular 
        ? 'bg-brand-dark text-white rounded-[28px] shadow-2xl lg:scale-[1.05] z-10' 
        : 'bg-white text-brand-dark border border-[rgba(180,160,140,0.2)] rounded-[28px]'
    }`}
  >
    {popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 md:px-6 py-2 rounded-full bg-brand-gold text-brand-dark text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] font-display whitespace-nowrap">
        Paling Populer
      </div>
    )}
    
    <div className="mb-8 lg:mb-10 text-center">
      <h3 className={`text-[20px] lg:text-[22px] font-serif mb-5 lg:mb-6 italic ${popular ? 'text-[#F5EFE7]' : 'text-brand-dark'}`}>
        {title}
      </h3>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] font-display font-medium uppercase tracking-[0.25em] text-[#9E8E7E] mb-2">Mulai dari</span>
        <div className="flex items-baseline gap-1">
          <span className={`text-[48px] lg:text-[56px] font-serif leading-none ${popular ? 'text-brand-gold' : 'text-brand-dark'}`}>
            {price}
          </span>
          <span className={`text-base lg:text-lg font-serif ${popular ? 'text-brand-gold/60' : 'text-brand-dark/60'}`}>jt</span>
        </div>
      </div>
    </div>

    <div className="flex-1 mb-8 lg:mb-10">
      <ul className="space-y-3 lg:space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 lg:gap-4">
            <Check size={18} className="text-brand-gold shrink-0" strokeWidth={3} />
            <span className={`text-[12px] lg:text-[13px] font-display font-normal ${popular ? 'text-white/75' : 'text-brand-dark/70'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <Button 
      variant={popular ? 'primary' : 'ghost'} 
      className={`w-full py-4 md:py-6 transition-all duration-500 !rounded-[10px] ${
        popular 
          ? 'bg-brand-gold text-brand-dark hover:bg-[#B8973D]' 
          : 'border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
      }`}
      onClick={() => {
        const featuresText = features.map(f => `- ${f}`).join('%0A');
        const message = encodeURIComponent(`Halo MacakVisual! Saya tertarik untuk reservasi paket:\n\n*${title} (Rp ${price}jt)*\n\nDetail Paket:\n${features.map(f => `- ${f}`).join('\n')}\n\nBisa bantu info selanjutnya?`);
        window.open(`https://wa.me/${siteData.contact.whatsappNumber}?text=${message}`, '_blank');
      }}
    >
      Pilih Paket Ini
    </Button>
  </motion.div>
);

const Pricing = () => {
  const { pricing } = siteData;

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-[#FAF5EF] relative overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="text-fluid-h2 text-brand-dark italic mb-4 leading-tight">
            {pricing.title} <br /> 
            <span className="font-serif italic font-normal text-brand-gold">{pricing.titleAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto items-center">
          {pricing.packages.map((pkg, i) => (
            <PricingCard key={pkg.title} {...pkg} delay={0.1 * (i + 1)} />
          ))}
        </div>
        
        <p className="text-center mt-12 lg:mt-16 text-[#B5A898] text-[9px] md:text-[11px] uppercase tracking-[0.05em] font-display italic">
          {pricing.disclaimer}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
