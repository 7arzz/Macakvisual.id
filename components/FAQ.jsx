'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { siteData } from '../data/data';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 lg:p-8 rounded-[16px] transition-all duration-500 text-left border ${
          isOpen 
            ? 'bg-[#FAF5EF] border-l-[3px] border-l-brand-gold border-border-default shadow-xl shadow-brand-gold/5' 
            : 'bg-white border-[rgba(180,160,140,0.2)]'
        }`}
      >
        <span className={`text-[15px] lg:text-[16px] font-serif italic tracking-tight pr-4 ${isOpen ? 'text-brand-dark' : 'text-brand-dark/80'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-700 ${
          isOpen ? 'bg-brand-gold text-brand-dark rotate-180' : 'bg-brand-rose/5 text-[#B5A898]'
        }`}>
          {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6 lg:p-8 pb-8 lg:pb-10 text-[#6B5F58] leading-[1.8] font-display font-normal text-[14px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const { faq } = siteData;

  return (
    <section className="py-20 lg:py-24 bg-[#FAF5EF] relative overflow-hidden">
      <div className="container-responsive max-w-4xl">
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="text-fluid-h2 text-brand-dark italic mb-4 leading-tight">
            {faq.title} <br /> 
            <span className="font-serif italic font-normal text-brand-gold">{faq.titleAccent}</span>
          </h2>
        </div>

        <div className="space-y-3 lg:space-y-4">
          {faq.list.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
