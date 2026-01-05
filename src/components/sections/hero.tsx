"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection Component
 * 
 * Features a full-screen background video of a laboratory setting with a 
 * prominent "Innovation for a better world" headline overlay.
 * 
 * Theme: Light
 * Design Style: Modern Scientific Professional
 */

const HeroSection: React.FC = () => {
  const videoUrl = "Hamilton_products_in_a_lab.mp4";

  return (
    <section id="cabinet" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-white">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://assets-web.hamiltoncompany.com/Homepage/UX-Refresh-Homepage/Images/Hamilton_scientific_lab_hero_poster.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle Overlay to ensure text readability */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)' 
          }}
        />
      </div>

      {/* Content Overlay Layer */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-8 lg:px-16">
        <div className="max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-hero font-bold text-black mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              Dr. Fabrice <br />
              BAGNA
            </h1>
            <p className="text-xl md:text-2xl text-black/80 font-medium mb-8">
              Chirurgien Ophtalmologiste <br />
              <span className="text-blue-600">Expert en Chirurgie de la Cataracte et Réfractive</span>
            </p>
            
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 md:py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Prendre rendez-vous
              </button>
              <a href="#pioneering">
              <button  className="bg-white/80 backdrop-blur text-black px-8 md:py-4 rounded-full font-semibold border border-black/10 hover:bg-white transition-colors">
                En savoir plus
              </button>
              </a>
            </div>

            <div className="mt-12">
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#1AE0B1] to-[#007BFF] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom transition gradient to the next section (Deep Navy) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 z-20 pointer-events-none"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(27, 43, 72, 0) 0%, rgba(27, 43, 72, 1) 100%)' 
        }}
      />
    </section>
  );
};

export default HeroSection;