import React from 'react';
import { Linkedin, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Spécialités': [
      { label: 'Chirurgie de la Cataracte', href: '#' },
      { label: 'Chirurgie Réfractive (LASIK)', href: '#' },
      { label: 'Traitement du Glaucome', href: '#' },
      { label: 'DMLA & Rétine', href: '#' },
    ],
    'Patient': [
      { label: 'Prendre rendez-vous', href: '#' },
      { label: 'Préparer votre chirurgie', href: '#' },
      { label: 'Tarifs & Honoraires', href: '#' },
      { label: 'FAQ Patient', href: '#' },
    ],
    'Cabinet': [
      { label: 'Dr. Fabrice Bagna', href: '#' },
      { label: 'Accès & Contact', href: '#' },
      { label: 'Actualités Médicales', href: '#' },
      { label: 'Mentions Légales', href: '#' },
    ],
  };

  const legalLinks = [
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'Gestion des cookies', href: '#' },
    { label: 'Accessibilité', href: '#' },
    { label: 'CGU', href: '#' },
  ];

  return (
    <footer  className="bg-white text-black pt-16 pb-8 font-sans">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[20px] font-bold mb-6 tracking-tight text-blue-400">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[16px] text-black/80 hover:text-black transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social and CTA Section */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-8">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/fabrice-bagna-52a815ab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} fill="blue" stroke="none" />
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition-colors duration-300"
                aria-label="YouTube"
              >
                <MessageCircle size={32} fill="blue" stroke="none" />
              </a>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 flex gap-4 hover:bg-blue-700 text-white font-bold text-[16px] px-12 py-4 rounded-full transition-all duration-300 w-full sm:w-auto shadow-lg">
              Prendre rendez-vous
               <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            </button>
          </div>
        </div>

        {/* Bottom Section Spacer */}
        <div className="mt-20 lg:mt-32 pt-12 border-t border-black/10">
          <div className="flex flex-col space-y-8">
            {/* Location Info */}
            <div className="flex items-center text-black/60 font-medium">
              <MapPin size={18} className="mr-2 text-blue-400" />
              <span className="text-[15px]">Centre d'Ophtalmologie - Dr. Fabrice Bagna</span>
            </div>

            {/* Legal Links and Copyright */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <p className="text-[13px] text-black/40">
                © 2025 Dr. Fabrice Bagna. Tous droits réservés.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-black/40">
                {legalLinks.map((link, idx) => (
                  <React.Fragment key={link.label}>
                    <a href={link.href} className="hover:text-black transition-colors">
                      {link.label}
                    </a>
                    {idx < legalLinks.length - 1 && (
                      <span className="text-black/20 select-none">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;