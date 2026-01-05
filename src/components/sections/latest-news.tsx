import { ArrowRight, Linkedin, Calendar, BookOpen, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

const LatestNews = () => {
  const newsData = [
    {
      category: 'Congrès',
      title: 'SFO 2025 - Société Française d\'Ophtalmologie',
      description: 'Retrouvez-moi au prochain congrès de la SFO pour échanger sur les dernières avancées en chirurgie de la cataracte et implants premium.',
      date: 'Mai 2025',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      category: 'Publication',
      title: 'Optimisation des résultats visuels post-opératoires',
      description: 'Nouvelle étude sur l\'utilisation du laser femtoseconde dans la chirurgie du segment antérieur : analyse de 1000 cas cliniques.',
      date: 'Mars 2025',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      category: 'Innovation',
      title: 'Arrivée de la nouvelle plateforme laser au cabinet',
      description: 'Nous sommes fiers d\'annoncer l\'acquisition d\'un nouveau laser de dernière génération pour une précision chirurgicale inégalée.',
      date: 'Février 2025',
      image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80',
      icon: <Newspaper className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-8 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight tracking-tight text-[#1B2B48] mb-4">
            Actualités & Publications
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2 text-blue-600 font-bold text-xs shadow-sm">
                  {item.icon}
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#1B2B48] mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-gray-400 text-xs font-medium border-t border-gray-50 pt-6">
                  <span>{item.date}</span>
                  <span className="flex items-center gap-1 text-blue-600 font-bold cursor-pointer hover:underline">
                    Lire la suite <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Actions */}
        <motion.div 
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <a 
            href="https://linkedin.com/in/fabrice-bagna-52a815ab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex  items-center gap-2 text-[#0077B5] font-bold text-sm hover:underline"
          >
            <Linkedin className="w-5 h-5 fill-current " />
            Suivre sur LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;