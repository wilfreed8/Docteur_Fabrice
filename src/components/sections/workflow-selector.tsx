
import { ChevronDown, ArrowRight, Clock, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const WorkflowSelector = () => {
  return (
    <section className="bg-white py-0 overflow-hidden border-t border-gray-100">
      <div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto">
        {/* Left Pane: Finding the Right Solution Selector */}
        <motion.div 
          className="w-full lg:w-[30%]  p-8 lg:p-12 xl:p-16 flex flex-col justify-start text-black "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[28px] lg:text-[36px] font-bold leading-tight mb-6">
            Votre Parcours de Soin Personnalisé
          </h2>
          <p className="text-black /80 text-[16px] mb-10 leading-relaxed">
            Découvrez les étapes de votre prise en charge, du diagnostic initial au suivi post-opératoire.
          </p>

          <div className="space-y-8">
            <div className="space-y-2 bg-slate-100 px-5 rounded-xl py-4 hover:shadow-lg transition-shadow">
              <label className="text-[12px] font-bold uppercase tracking-wider text-black /60">JE SOUHAITE</label>
              <div className="border-b border-white/20 flex items-center justify-between py-2 cursor-pointer group  transition-colors">
                <span className="text-[20px] font-semibold">Prendre un rendez-vous</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </div>

            <div className="space-y-2 bg-slate-100 px-5 rounded-xl py-4 hover:shadow-lg transition-shadow">
              <label className="text-[12px] font-bold uppercase tracking-wider text-black /60">MA PATHOLOGIE</label>
              <div className="border-b border-white/20 flex items-center justify-between py-2 cursor-pointer group  transition-colors">
                <span className="text-[20px] font-semibold">Cataracte / Vision</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </div>

            <div className="pt-4">
              <button className="flex hover:shadow-xl items-center gap-3 px-8 py-4 bg-blue-600 text-white group  rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg">
                Consulter les tarifs & accès
                <div className="w-6 h-6 rounded-full group-hover:translate-x-2 bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 " />
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Pane: Patient Journey Grid */}
        <div className="w-full lg:w-[70%] bg-[#F8FAFC] p-8 lg:p-12 xl:p-16">
          <motion.h2 
            className="text-[32px] lg:text-[40px] font-bold text-[#1B2B48] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pourquoi nous faire confiance ?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Sécurité */}
            <motion.div 
              className="flex flex-col bg-white p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <ShieldCheck className="w-8 h-8 text-blue-600 group-hover:text-black  transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1B2B48] mb-4">Sécurité Maximale</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protocoles d'hygiène rigoureux et utilisation de matériel à usage unique pour chaque intervention chirurgicale.
              </p>
            </motion.div>

            {/* Card 2: Rapidité */}
            <motion.div 
              className="flex flex-col bg-white p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Zap className="w-8 h-8 text-blue-600 group-hover:text-black  transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1B2B48] mb-4">Prise en Charge Rapide</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Optimisation des délais de rendez-vous et des parcours opératoires pour minimiser votre attente.
              </p>
            </motion.div>

            {/* Card 3: Suivi */}
            <motion.div 
              className="flex flex-col bg-white p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Clock className="w-8 h-8 text-blue-600 group-hover:text-black  transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1B2B48] mb-4">Suivi Post-Opératoire</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Disponibilité constante et contrôles réguliers pour garantir la pérennité de vos résultats visuels.
              </p>
            </motion.div>
          </div>

          {/* Bottom CTA Area */}
          <motion.div 
            className="mt-12 p-8 bg-blue-600 rounded-[24px] text-black  flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-2xl font-bold mb-2 text-white">Prêt à retrouver une vision claire ?</h4>
              <p className="text-white/80">Réservez votre consultation bilan en ligne dès maintenant.</p>
            </div>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Prendre rendez-vous
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSelector;
