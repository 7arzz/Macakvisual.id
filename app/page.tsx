'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream selection:bg-brand-rose/20 selection:text-brand-rose">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top Button - Editorial Style */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 w-14 h-14 rounded-[10px] bg-white/80 backdrop-blur-md border border-brand-gold/20 text-brand-gold shadow-2xl flex items-center justify-center z-[80] hover:scale-110 hover:bg-brand-dark hover:text-brand-gold active:scale-95 transition-all text-xl cursor-pointer group"
      >
        <span className="group-hover:-translate-y-1 transition-transform duration-300 font-display">
          ↑
        </span>
      </button>

      {/* Global Background Accents - Very Subtle */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-rose/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 opacity-30" />
      </div>
    </div>
  );
}
