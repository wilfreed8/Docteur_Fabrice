
import { motion } from 'framer-motion';

const PioneeringSolutions = () => {
  return (
    <section id="pioneering"  className="relative w-full bg-slate-50  overflow-hidden py-24 sm:py-32">
      {/* Background Graphic Overlay */}
      <div 
        className="absolute inset-x-0 top-0 h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579154273821-2a9143e0971f?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          mixBlendMode: 'screen'
        }}
      />

      <div className="container relative z-10 px-6 mx-auto lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[2.5rem] lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-black mb-2">
                Une Expertise Chirurgicale de Premier Plan
              </h2>
              <p className="text-lg lg:text-xl text-black/80 leading-relaxed max-w-lg">
                Le Dr. Fabrice Bagna met son excellence technique au service de votre vision, alliant précision chirurgicale et technologies de pointe.
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                  <p className="text-base text-blue-900/80 leading-relaxed">
                    <strong>Chirurgie de la Cataracte :</strong> Utilisation d'implants de dernière génération pour une récupération visuelle optimale.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                  <p className="text-base text-blue-900/80 leading-relaxed">
                    <strong>Chirurgie Réfractive :</strong> Correction de la myopie, l'hypermétropie et l'astigmatisme par Laser (LASIK / PKR).
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                  <p className="text-base text-blue-900/80 leading-relaxed">
                    <strong>Glaucome & Rétine :</strong> Prise en charge experte des pathologies chroniques et chirurgicales.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Overlapping Image Panel Section */}
          <div className="lg:col-span-7 relative flex justify-end items-end min-h-[450px] sm:min-h-[600px]">
            {/* Background Image (Lower Left) */}
            <motion.div 
              className="absolute left-0 top-0 w-3/4 sm:w-[60%] lg:w-[55%] aspect-[4/5] rounded-[12px] overflow-hidden shadow-2xl z-20"
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img
                src="photo-1581594693702-fbdc51b2763b.avif"
                alt="Ophtalmologie moderne"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
                
              />
            </motion.div>

            {/* Foreground Image (Upper Right) */}
            <motion.div 
              className="relative w-[70%] sm:w-[65%] aspect-[3/4] rounded-[12px] overflow-hidden shadow-2xl z-30 translate-y-12 sm:translate-y-24"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src="photo-1551076805-e1869033e561.avif"
                alt="Chirurgie oculaire de précision"
                width={800}
                height={1000}
                className="object-cover w-full h-full scale-110"
              />
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative Graphic Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-10 pointer-events-none" />
          </div>

        </div>

        {/* Supporting Context */}
        <motion.div 
          className="mt-32 lg:mt-48 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/10 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-semibold text-black">Un Parcours d'Excellence</h3>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-black/80 leading-relaxed">
              Ancien Interne des Hôpitaux et titulaire de diplômes de spécialisation en chirurgie oculaire, le Dr. Bagna combine une solide formation académique avec une pratique clinique intensive. Sa philosophie de soin repose sur une écoute attentive et une personnalisation totale du protocole thérapeutique.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1b2b48] to-transparent pointer-events-none" />
    </section>
  );
};

export default PioneeringSolutions;