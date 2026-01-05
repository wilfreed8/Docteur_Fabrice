"use client";

import { ChevronRight, Award, History } from 'lucide-react';
import { motion } from 'framer-motion';

const FutureExcellence = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* Top Image Section */}
      <motion.div 
        className="relative w-full h-[300px] md:h-[500px] lg:h-[650px]"
        initial={{ opacity: 0 , scale: 0.95}}
        whileInView={{ opacity: 1 , scale: 1}}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src="photo-1516549655169-df83a0774514.avif"
          alt="Modern ophthalmology clinic"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
      </motion.div>

      {/* Content Section */}
      <div className="container  mx-auto px-4 py-16 md:py-24 max-w-[1440px] -translate-y-20 md:-translate-y-32 lg:-translate-y-40">
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] z-100 md:text-[3.5rem] font-bold tracking-tight text-black md:text-white mb-2">
            Une Vision de Demain.
          </h2>
          <p className="text-gray-900/80 md:text-gray-100/80 z-100 leading-[1.6] text-base md:text-xl px-4 font-medium">
            "Ma mission est d'allier l'innovation technologique à une approche humaine et personnalisée, pour offrir à chaque patient la meilleure qualité de vision possible."
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Expertise & Diplômes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="group flex items-start p-8 bg-[#f8fafc] border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                <Award className="w-8 h-8 text-black md:text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-[#1b2b48] text-xl font-bold mb-2">Expertise & Diplômes</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Diplômé d'Études Spécialisées en Ophtalmologie et expert en chirurgie du segment antérieur.
                </p>
                <span className="flex items-center text-blue-600 text-sm font-semibold cursor-pointer">
                  Consulter mon CV
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Innovation Médicale */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="group flex items-start p-8 bg-[#f8fafc] border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200">
              <div className="flex-shrink-0 w-16 h-16 bg-[#1b2b48] rounded-full flex items-center justify-center mr-6 shadow-lg">
                <History className="w-8 h-8 text-black md:text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-[#1b2b48] text-xl font-bold mb-2">Innovation Médicale</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Engagement constant dans l'adoption des nouvelles techniques chirurgicales et protocoles de soin.
                </p>
                <span className="flex items-center text-blue-600 text-sm font-semibold cursor-pointer">
                  Découvrir les technologies
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureExcellence;