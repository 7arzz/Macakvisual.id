'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { Instagram, Facebook, Youtube } from './ui/Icons';
import Logo from '../assets/Logo.jpg';
import { siteData } from '../data/data';

const Footer = () => {
  const { footer, header } = siteData;

  return (
    <footer className="bg-brand-dark text-[#F5EFE7] py-20 lg:py-24 overflow-hidden relative">
      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 mb-20 md:mb-24">
          <div className="lg:col-span-1 text-left">
            <a href="/" className="flex items-center gap-3 md:gap-4 mb-8 lg:mb-10 group">
              <img
                src={Logo.src}
                alt={`${header.logoText} Logo`}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-contain bg-white p-1.5 md:p-2 group-hover:scale-110 transition-transform shadow-xl border border-white/20"
              />
              <span className="font-serif italic text-xl md:text-2xl tracking-tight">
                {header.logoText}<span className="text-brand-gold italic">{header.logoSuffix}</span>
              </span>
            </a>
            <p className="text-[#D4C8BC]/50 leading-relaxed mb-8 lg:mb-10 max-w-sm font-display font-light text-[13px] md:text-sm">
              {footer.description}
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-[#9E8E7E] hover:border-brand-gold hover:text-brand-gold transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-display font-semibold text-white/40 mb-8 lg:mb-10">Arsip</h4>
            <ul className="space-y-4 lg:space-y-6">
              {footer.links.archives.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#D4C8BC]/40 hover:text-brand-gold transition-colors text-[10px] md:text-[11px] uppercase tracking-widest font-display font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-display font-semibold text-white/40 mb-8 lg:mb-10">Layanan</h4>
            <ul className="space-y-4 lg:space-y-6">
              {footer.links.artistry.map((service) => (
                <li key={service}>
                  <a href="#" className="text-[#D4C8BC]/40 hover:text-brand-gold transition-colors text-[10px] md:text-[11px] uppercase tracking-widest font-display font-medium">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-[#D4C8BC]/20 text-[9px] md:text-[10px] text-center md:text-left tracking-widest uppercase font-display font-semibold">
            {footer.copyright} <Heart size={10} className="inline text-brand-rose mx-1" />
          </p>
          <div className="flex gap-8 md:gap-10 text-[9px] uppercase tracking-[0.25em] text-white/20 font-display font-semibold">
            <a href="#" className="hover:text-brand-gold transition-colors">Privasi</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
