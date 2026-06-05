import React from 'react';
import { cn } from '../../lib/utils';

const Button = ({ className, variant = 'primary', size = 'md', children, ...props }) => {
  const variants = {
    primary: 'bg-brand-gold text-brand-dark border-none hover:bg-[#B8973D] shadow-xl shadow-brand-gold/10',
    outline: 'bg-transparent border border-brand-rose/30 text-brand-rose hover:bg-brand-rose hover:text-white',
    whiteOutline: 'bg-transparent border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
    dark: 'bg-brand-dark text-white border-none hover:bg-black',
    ghost: 'bg-transparent text-text-primary border-none hover:bg-brand-surface',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-[10px] uppercase font-bold tracking-widest',
    md: 'px-8 py-3.5 text-[11px] uppercase font-bold tracking-[0.22em]',
    lg: 'px-10 py-5 text-[12px] uppercase font-bold tracking-[0.22em]',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-wedding-button transition-all duration-500 active:scale-[0.98] hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-display',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
