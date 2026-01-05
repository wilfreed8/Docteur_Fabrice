
import { motion } from 'framer-motion';

const BioprocessInnovation = () => {
  const cards = [
    {
      title: "Précision Diagnostique",
      description: "Utilisation des dernières technologies d'imagerie (OCT, Topographie, Biométrie) pour un bilan pré-opératoire d'une précision absolue.",
      imageUrl: `photo-1516549655169-df83a0774514.avif`,
      alt: "Équipement ophtalmologique de pointe"
    },
    {
      title: "Excellence Chirurgicale",
      description: "Des interventions réalisées dans des blocs opératoires de haute technicité, garantissant sécurité, confort et résultats visuels d'excellence.",
      imageUrl: "photo-1551076805-e1869033e561.avif",
      alt: "Chirurgie oculaire de précision"
    },
    {
      title: "Accompagnement Personnalisé",
      description: "Une équipe dédiée vous accompagne à chaque étape de votre parcours de soin, du premier rendez-vous au suivi post-opératoire à long terme.",
      imageUrl: "photo-1581594693702-fbdc51b2763b.avif",
      alt: "Consultation ophtalmologique"
    }
  ];

  return (
    <section id="actualites" className="bg-white py-16 lg:py-24 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1440px]">
        {/* Header Section */}
        <motion.div 
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[28px] lg:text-[40px] font-bold text-[#1b2b48] leading-[1.2] tracking-tight mb-4">
            L'Innovation au Service de votre Regard
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col bg-[#F8FAFC] rounded-[24px] overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="p-8 lg:p-10 flex flex-col h-full">
                {/* Text Content Area */}
                <div className="mb-8">
                  <h3 className="text-[22px] lg:text-[26px] font-bold text-[#1b2b48] mb-4 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[16px] text-[#4B5563] leading-[1.6]">
                    {card.description}
                  </p>
                </div>

                {/* Image Area - Pushed to Bottom */}
                <div className="mt-auto relative w-full h-full lg:h-full rounded-[16px] overflow-hidden shadow-inner">
                  <img
                    src={card.imageUrl}
                    alt={card.alt}
                    
                    className="object-cover h-full transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BioprocessInnovation;