
import { motion } from 'framer-motion';

interface ApplicationCardProps {
  title: string;
  image: string;
  description: string;
}

const isMobile = window.innerWidth < 768;

const ApplicationCard = ({ title, image, description }: ApplicationCardProps) => (
  <motion.div 
    className="group relative flex flex-col min-w-[320px] md:min-w-[420px] lg:min-w-[480px] overflow-hidden"
    whileHover={{ y: -10 }}
    whileInView={isMobile ? {y:-10} : {}}
    transition={{ duration: 0.3 }}
  >
    <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden md:min-h-60 bg-white/5 border border-white/10">
      <img
        src={image}
        alt={title}
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        sizes="(max-width: 768px) 420px, (max-width: 1200px) 420px, 480px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b2b48] via-transparent to-transparent opacity-60" />
    </div>
    <div className="mt-6">
      <h3 className="text-black text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-black/60 text-base leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const ApplicationCarousel = () => {
  const specialties = [
    {
      title: "Chirurgie de la Cataracte",
      description: "Restauration d'une vision claire grâce aux technologies d'implants cristalliniens les plus avancées.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
    },
    {
      title: "Chirurgie Réfractive",
      description: "Libérez-vous de vos lunettes et lentilles grâce au traitement laser personnalisé (LASIK, PKR).",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80"
    },
    {
      title: "Maladies de la Rétine",
      description: "Diagnostic et traitement expert de la DMLA, de la rétinopathie diabétique et des déchirures.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80"
    },
    {
      title: "Suivi du Glaucome",
      description: "Préservation de votre champ visuel par une prise en charge médicale et chirurgicale précoce.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="specialites" className="bg-slate-50 py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="container px-6 md:px-16 mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Spécialités & Expertises
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex space-x-8 md:space-x-12 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar">
            {specialties.map((spec, index) => (
              <div key={index} className="snap-start">
                <ApplicationCard 
                  title={spec.title}
                  description={spec.description}
                  image={spec.image}
                />
              </div>
            ))}
            
            {/* Spacer for horizontal scroll alignment */}
            <div className="min-w-[40px] h-full" />
          </div>
        </div>
      </div>
      
      <style  >{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ApplicationCarousel;
