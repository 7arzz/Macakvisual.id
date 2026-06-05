'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Instagram, Facebook, Youtube } from './ui/Icons';
import Button from './ui/Button';
import { siteData } from '../data/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    vision: ''
  });

  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
  const { contact } = siteData;
  const icons = [Phone, Mail, MapPin];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, date, vision } = formData;
    
    // Validasi sederhana
    if (!name || !phone) {
      alert('Mohon isi nama dan nomor telepon Anda.');
      return;
    }

    const message = `*Reservasi Baru - MacakVisual.id*%0A%0A` +
      `*Nama:* ${name}%0A` +
      `*Telepon:* ${phone}%0A` +
      `*Tanggal Acara:* ${date || 'Belum ditentukan'}%0A` +
      `*Visi Acara:* ${vision || '-'}%0A%0A` +
      `Halo MacakVisual! Saya tertarik untuk menggunakan layanan Anda. Mohon info lebih lanjut.`;
    
    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative flex flex-col lg:flex-row min-h-[600px] overflow-hidden bg-[#FAF5EF]">
      {/* Left Column - Info (40%) */}
      <div className="lg:w-[40%] bg-brand-dark p-8 md:p-16 lg:p-20 flex flex-col justify-between rounded-b-[40px] lg:rounded-r-[48px] lg:rounded-b-none relative z-30 shadow-2xl shadow-black/20 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={transition}
        >
          <span className="eyebrow text-white/40 !mb-8 after:hidden">{contact.eyebrow}</span>
          <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-serif text-[#F5EFE7] mb-6 md:mb-8 leading-[1.1] italic font-normal">
            {contact.title} <br /> 
            <span className="text-brand-gold">{contact.titleAccent}</span>
          </h2>
          <p className="text-[#D4C8BC]/60 mb-10 md:mb-12 leading-relaxed text-[15px] md:text-[16px] font-display font-light">
            {contact.description}
          </p>

          <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
            {contact.info.map((item, i) => (
              <div key={i} className="flex items-center gap-5 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-[10px] bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500 shrink-0">
                  {React.createElement(icons[i % icons.length], { size: 20, strokeWidth: 1.5 })}
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-[#5E5248] mb-1">{item.label}</p>
                  <p className="text-[#D4C8BC] font-display font-normal text-[13px] md:text-[14px] tracking-tight">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#1eb053] border-none shadow-xl shadow-green-500/10 text-white gap-3 rounded-[10px] px-8 py-5 font-display font-bold"
            onClick={() => {
              const message = encodeURIComponent("Halo MacakVisual! Saya ingin konsultasi reservasi pernikahan.");
              window.open(`https://wa.me/${contact.whatsappNumber}?text=${message}`, '_blank');
            }}
          >
            <MessageCircle size={18} />
            {contact.whatsappCta}
          </Button>
        </motion.div>

        {/* Social Icons Bottom Left */}
        <div className="flex gap-4 mt-12 lg:mt-0">
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/15 flex items-center justify-center text-[#9E8E7E] hover:border-brand-gold hover:text-brand-gold transition-all duration-500"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Right Column - Form (60%) */}
      <div className="lg:w-[60%] p-8 md:p-16 lg:p-24 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ ...transition, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-[#7A6D63] ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-[10px] bg-white border border-[rgba(180,160,140,0.35)] focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all font-display text-[14px] text-brand-dark"
                  placeholder={contact.form.placeholders.name}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-[#7A6D63] ml-1">Nomor Telepon</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-[10px] bg-white border border-[rgba(180,160,140,0.35)] focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all font-display text-[14px] text-brand-dark"
                  placeholder={contact.form.placeholders.phone}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-[#7A6D63] ml-1">Rencana Tanggal Acara</label>
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-[10px] bg-white border border-[rgba(180,160,140,0.35)] focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all font-display text-[14px] text-brand-dark"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-[#7A6D63] ml-1">Visi Singkat Acara</label>
              <textarea 
                rows="4"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-[10px] bg-white border border-[rgba(180,160,140,0.35)] focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all font-display text-[14px] text-brand-dark resize-none"
                placeholder={contact.form.placeholders.vision}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full h-[48px] md:h-[52px] rounded-[10px] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.22em] font-display bg-brand-dark text-[#F5EFE7] hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
            >
              {contact.form.submitText}
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
