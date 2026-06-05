'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import gambar1 from '../assets/gambar1.jpg';
import { siteData } from '../data/data';

const Hero = () => {
  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
  const { hero } = siteData;

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src={gambar1.src}
          alt="Wedding Luxury"
          className="w-full h-full object-cover"
        />
        {/* Adjusted Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)' 
          }}
        ></div>
      </div>

      <div className="container-responsive relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="flex flex-col items-center"
          >
            <span className="eyebrow text-white/90 !mb-6 md:!mb-8">
              {hero.eyebrow}
            </span>
            
            <h1 className="text-fluid-hero text-white mb-6 md:mb-8 font-serif font-normal italic">
              {hero.title}
            </h1>
            
            <p className="text-white/90 text-[15px] md:text-[17px] max-w-[560px] mx-auto mb-10 md:mb-12 font-display font-light leading-relaxed">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-brand-gold text-brand-dark hover:bg-[#B8973D] border-0"
                onClick={() => {
                  const message = encodeURIComponent(`Halo MacakVisual! Saya melihat website Anda dan ingin konsultasi eksklusif untuk acara saya.`);
                  window.open(`https://wa.me/${siteData.contact.whatsappNumber}?text=${message}`, '_blank');
                }}
              >
                {hero.primaryCta}
              </Button>
              <Button variant="whiteOutline" size="lg" className="w-full sm:w-auto">
                {hero.secondaryCta}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 text-white/60"
      >
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-display">{hero.exploreText}</span>
        <div className="w-px h-8 md:h-12 bg-linear-to-b from-white/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
