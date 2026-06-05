'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import gambar1 from "../assets/gambar1.jpg";
import { siteData } from "../data/data";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const { portfolio } = siteData;

  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  // 3D State
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(-10);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(0.2);
  const [zDistance, setZDistance] = useState("500px");
  const [sensitivity, setSensitivity] = useState(0.5);

  const lastX = useRef(0);
  const lastY = useRef(0);
  const lastRotY = useRef(0);
  const lastRotX = useRef(-10);
  const wasDragging = useRef(false);

  useEffect(() => {
    setZDistance(window.innerWidth < 768 ? "350px" : "500px");
    setSensitivity(window.innerWidth < 768 ? 0.35 : 0.5);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (isRotating && !isDragging) {
        setRotationY((prev) => prev + currentSpeed);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRotating, isDragging, currentSpeed]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    wasDragging.current = false;
    lastX.current = e.pageX || e.touches?.[0].pageX;
    lastY.current = e.pageY || e.touches?.[0].pageY;
    lastRotY.current = rotationY;
    lastRotX.current = rotationX;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    wasDragging.current = true;

    const x = e.pageX || e.touches?.[0].pageX;
    const y = e.pageY || e.touches?.[0].pageY;

    const deltaX = x - lastX.current;
    const deltaY = y - lastY.current;

    setRotationY(lastRotY.current + deltaX * sensitivity);
    setRotationX(
      Math.max(-60, Math.min(60, lastRotX.current - deltaY * sensitivity)),
    );
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[600px] bg-[#141218] overflow-hidden flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-brand-gold/20 via-transparent to-brand-gold/20 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-radial from-brand-gold/10 to-transparent blur-[120px]" />
      </div>

      <div className="absolute top-12 md:top-16 left-0 w-full text-center z-10 pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <span className="eyebrow text-white/90">{portfolio.eyebrow}</span>
          <h2 className="text-3xl md:text-fluid-h2 text-white italic mb-4">
            {portfolio.title}{" "}
            <span className="text-brand-gold font-serif">
              {portfolio.titleAccent}
            </span>
          </h2>
          <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-display">
            {portfolio.instructional}
          </p>
        </motion.div>
      </div>

      {/* 3D Slider Container */}
      <motion.div
        className="w-full h-full flex items-center justify-center perspective-[1500px] md:perspective-[2000px]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div
          ref={sliderRef}
          className="relative w-[180px] h-[260px] md:w-[220px] md:h-[320px] transition-transform duration-100 ease-out preserve-3d"
          style={{
            transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          }}
        >
          {portfolio.projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "absolute inset-0 bg-[#1A1714] rounded-wedding-card border border-white/5 shadow-2xl transition-all duration-500 hover:border-brand-gold/40 hover:brightness-110 preserve-3d group cursor-pointer",
                isInView ? "item-entrance" : "item-exit",
              )}
              style={{
                "--i": index + 1,
                "--total": portfolio.projects.length,
                "--delay": `${index * 0.1}s`,
                "--exit-delay": `${(portfolio.projects.length - index) * 0.1}s`,
                "--z": zDistance,
                transformOrigin: "center",
                transform: `rotateY(calc((${index}) * (360 / ${portfolio.projects.length}) * 1deg)) translateZ(var(--z))`,
              }}
              onClick={() => {
                if (!wasDragging.current) {
                  setSelectedProject(project);
                  setIsRotating(false);
                }
              }}
            >
              <img
                src={gambar1.src}
                alt={project.title}
                className="w-full h-full object-cover rounded-wedding-card pointer-events-none"
              />

              {/* Refined Glass Info Card */}
              <div className="absolute inset-x-2 md:inset-x-3 bottom-2 md:bottom-3 p-3 md:p-4 bg-brand-dark/60 backdrop-blur-md rounded-[16px] border border-white/5 opacity-0 lg:group-hover:opacity-100 translate-y-2 lg:group-hover:translate-y-0 transition-all duration-500 pointer-events-none text-left">
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-display font-medium mb-1 text-brand-gold">
                  {project.category}
                </p>
                <h3 className="text-white text-[12px] md:text-[14px] font-serif italic">
                  {project.title}
                </h3>
              </div>

              {/* Reflection Effect */}
              <div className="absolute top-[102%] left-0 w-full h-1/2 bg-linear-to-b from-white/10 to-transparent blur-sm rotate-x-180 opacity-5 pointer-events-none rounded-wedding-card" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal - Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-brand-dark/95 backdrop-blur-2xl"
            onClick={() => {
              setSelectedProject(null);
              setIsRotating(true);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1A1714] border border-brand-gold/15 rounded-wedding-card max-w-4xl w-full max-h-[90vh] overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-1/2 h-64 md:h-[500px]">
                <img
                  src={gambar1.src}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-8 md:p-14 relative flex flex-col justify-center text-left">
                <button
                  className="absolute top-6 md:top-8 right-6 md:right-8 text-white/40 hover:text-white transition-colors"
                  onClick={() => {
                    setSelectedProject(null);
                    setIsRotating(true);
                  }}
                >
                  <X size={28} strokeWidth={1} />
                </button>
                <span className="text-[9px] md:text-[10px] font-display font-semibold uppercase tracking-[0.3em] mb-3 md:mb-4 text-brand-gold">
                  {selectedProject.category}
                </span>
                <h2 className="text-[28px] md:text-[40px] font-serif text-white mb-4 md:mb-6 leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-white/60 font-display font-light leading-relaxed mb-8 md:mb-10 text-[14px] md:text-[16px]">
                  {selectedProject.desc}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Photography", "Curated"].map((tag) => (
                    <div
                      key={tag}
                      className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[9px] md:text-[10px] text-brand-gold uppercase tracking-widest font-bold font-display"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .item-entrance {
          animation: entrance 1.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
          animation-delay: var(--delay);
        }
        .item-exit {
          animation: exitAnim 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--exit-delay);
        }
        @keyframes entrance {
          0% { transform: translateX(-100vw) rotateY(0deg) translateZ(0px); opacity: 0; }
          40% { transform: translateX(0) rotateY(0deg) translateZ(0px); opacity: 1; }
          70% { transform: translateX(0) rotateY(0deg) translateZ(0px); opacity: 1; }
        }
        @keyframes exitAnim {
          0% { opacity: 1; }
          30% { transform: translateX(0) rotateY(0deg) translateZ(0px); opacity: 1; }
          100% { transform: translateX(-100vw) rotateY(0deg) translateZ(0px); opacity: 0; }
        }
      `,
        }}
      />
    </section>
  );
};

export default Portfolio;
