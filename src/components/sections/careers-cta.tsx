"use client";

import { motion } from 'framer-motion';
import { Phone , MapPin, ExternalLink } from 'lucide-react';

const CareersCTA = () => {
  return (
    <section id="contact" className="bg-white py-[96px] md:py-[120px] border-t border-gray-100">
      <div className="container mx-auto px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.05em] text-blue-600 mb-6">
              Contact & Accès
            </h4>
            
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#1B2B48] mb-8">
              Parlons de votre <br />santé visuelle.
            </h2>
  
            <div className="space-y-8">
              <p className="text-[1.125rem] leading-[1.6] text-gray-600 max-w-[600px]">
                Le Dr. Fabrice Bagna et son équipe vous accueillent dans un cadre moderne et chaleureux pour répondre à toutes vos interrogations concernant votre vision.
              </p>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Téléphone</p>
                    <p className="text-blue-900 font-bold">Consulter le cabinet</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Localisation</p>
                    <p className="text-blue-900 font-bold">Centre Ophtalmologique</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Prendre RDV sur Doctolib
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Area: Decorative / Map Placeholder */}
          <a href="https://maps.app.goo.gl/bghAaqimGgUwLEZu7">
          <motion.div 
            className="relative group h-[400px] lg:h-[550px] bg-blue-50 rounded-[32px] overflow-hidden shadow-inner border border-blue-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3198922886436!2d-6.870176825519318!3d33.98431622131616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76ce7f9462dd1%3A0x2e9c39cfa1d9e8d7!2s%C3%89cole%20Nationale%20Sup%C3%A9rieure%20d&#39;Informatique%20et%20d&#39;Analyse%20des%20Syst%C3%A8mes!5e0!3m2!1sfr!2sma!4v1767575254690!5m2!1sfr!2sma" width="600" height="450" style={{"border":0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-white/20 group-hover:bg-white/80 transition-all p-12">
               <div className="text-center ">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <MapPin className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl transition-all transitio-transform hidden group-hover:block font-bold text-blue-900 mb-2">Centre d'Ophtalmologie</h3>
                  <p className="text-gray-500 transition-all transitio-transform hidden group-hover:flex  max-w-[300px] mx-auto">Veuillez consulter le site googleMap pour l'adresse exacte et les horaires d'ouverture.</p>
               </div>
            </div>
          </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;