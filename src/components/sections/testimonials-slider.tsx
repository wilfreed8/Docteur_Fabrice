
import  { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Une prise en charge exceptionnelle et des résultats au-delà de mes espérances.",
    author: "Jean-Pierre M.",
    title: "Patient Opéré de la Cataracte",
    description:
      "Le Dr. Bagna est un chirurgien d'une précision remarquable. Son calme et ses explications claires m'ont mis en confiance immédiatement. Aujourd'hui, j'ai retrouvé une vue parfaite, sans lunettes.",
  },
  {
    quote: "L'excellence technique alliée à une grande humanité.",
    author: "Dr. Sophie L.",
    title: "Médecin Généraliste",
    description:
      "J'adresse mes patients au Dr. Bagna en toute sérénité. Son expertise en chirurgie réfractive est reconnue, et le suivi post-opératoire est exemplaire. Un confrère précieux pour notre réseau de soin.",
  },
  {
    quote: "Une vision claire retrouvée grâce au LASIK.",
    author: "Marie D.",
    title: "Patiente Chirurgie Réfractive",
    description:
      "Plus de 15 ans avec des lentilles et des lunettes... En quelques minutes, ma vie a changé. Merci au Dr. Bagna pour son professionnalisme et à toute son équipe pour leur accueil.",
  },
];

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="parcours-patient" className="bg-white py-24 lg:py-32 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-8 max-w-[1440px]">
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Side: Quote & Attribution */}
              <div className="lg:col-span-7 space-y-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                    <Quote className="w-8 h-8 text-blue-600 fill-current" />
                  </div>
                  <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold text-[#1B2B48] tracking-tight max-w-[650px]">
                    {testimonials[activeIndex].quote}
                  </h2>
                </div>
                <div className="space-y-1">
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-[#4B5563] text-base">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
              </div>

              {/* Right Side: Detailed Paragraph */}
              <div className="lg:col-span-5 pt-4">
                <p className="text-[#4B5563] text-lg leading-[1.8] font-medium italic border-l-4 border-blue-600 pl-8">
                  "{testimonials[activeIndex].description}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Dots and Arrows */}
          <div className="mt-20 flex flex-col items-center justify-center gap-8">
            {/* Dot Navigation */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-blue-600 w-8"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all text-[#1B2B48]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full bg-[#1B2B48] text-white flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
