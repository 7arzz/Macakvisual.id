'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '../lib/utils';
import Button from './ui/Button';
import Logo from '../assets/Logo.jpg';
import { siteData } from '../data/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { header } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header role="banner">
      <nav
        aria-label="Navigasi utama"
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-6 px-6 md:px-12 lg:px-24',
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-xl py-4 border-b border-brand-gold/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 md:gap-4 group" aria-label="Halaman utama MacakVisual.id">
            <Image
              src={Logo}
              alt="Logo MacakVisual.id"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-contain bg-white p-1 md:p-1.5 group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/20"
              priority
            />
            <div className="flex flex-col">
              <span
                className={cn(
                  'font-serif italic text-lg md:text-xl tracking-tight leading-none transition-colors duration-500',
                  isScrolled ? 'text-brand-dark' : 'text-white'
                )}
              >
                {header.logoText}
                <span className="text-brand-gold italic">{header.logoSuffix}</span>
              </span>
              <span
                className={cn(
                  'text-[8px] uppercase tracking-[0.2em] font-display font-medium mt-1 leading-none opacity-50',
                  isScrolled ? 'text-brand-dark' : 'text-white'
                )}
              >
                hanya contoh by 7arzz
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10" role="menubar">
            {header.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                role="menuitem"
                className={cn(
                  'text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:text-brand-gold font-display focus-visible:outline-brand-gold focus-visible:outline-2 focus-visible:rounded-sm',
                  isScrolled ? 'text-brand-dark/60' : 'text-white/80'
                )}
              >
                {link.name}
              </a>
            ))}
            <Button
              size="lg"
              className="w-full bg-brand-dark text-white rounded-[10px] py-4 text-[12px] font-bold tracking-[0.2em] font-display"
              aria-label="Konsultasi reservasi via WhatsApp"
              onClick={() => {
                const message = encodeURIComponent('Halo MacakVisual! Saya ingin konsultasi reservasi.');
                window.open(
                  `https://wa.me/${siteData.contact.whatsappNumber}?text=${message}`,
                  '_blank',
                  'noopener,noreferrer'
                );
              }}
            >
              {header.ctaText}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-brand-gold',
              isScrolled ? 'text-brand-dark' : 'text-white'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          >
            {isMobileMenuOpen
              ? <X size={24} strokeWidth={1.5} aria-hidden="true" />
              : <Menu size={24} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi mobile"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-brand-cream z-[110] lg:hidden flex flex-col items-center justify-start p-8 md:p-12 overflow-y-auto"
            >
              <div className="min-h-full flex flex-col items-center justify-center py-20 w-full">
                <button
                  className="fixed top-8 right-8 text-brand-dark/40 hover:text-brand-dark z-[120] focus-visible:outline-2 focus-visible:outline-brand-gold rounded-full p-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Tutup menu navigasi"
                >
                  <X size={32} strokeWidth={1} aria-hidden="true" />
                </button>
                <nav aria-label="Menu mobile" className="flex flex-col items-center gap-8 md:gap-10">
                  {header.navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                      key={link.name}
                      href={link.href}
                      className="text-xl md:text-2xl font-serif italic text-brand-dark hover:text-brand-gold transition-colors focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:rounded-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      size="lg"
                      className="mt-6 md:mt-8 !rounded-[10px] px-10 md:px-12 bg-brand-dark text-white"
                      aria-label="Konsultasi reservasi via WhatsApp"
                      onClick={() => {
                        const message = encodeURIComponent('Halo MacakVisual! Saya ingin konsultasi reservasi.');
                        window.open(
                          `https://wa.me/${siteData.contact.whatsappNumber}?text=${message}`,
                          '_blank',
                          'noopener,noreferrer'
                        );
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {header.mobileCtaText}
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
