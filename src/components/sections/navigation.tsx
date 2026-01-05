"use client";

import  { useState, useEffect } from "react";
import { ChevronRight, Search, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Spécialités", hasMega: true, href: "#specialites" },
    { name: "Le Cabinet", hasMega: false, href: "#cabinet" },
    { name: "Parcours Patient", hasMega: false, href: "#parcours-patient" },
    { name: "Actualités", hasMega: false, href: "#actualites" },
    { name: "Contact", hasMega: false, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] print:hidden max-w-screen">
      {/* Announcement Bar */}
      {/* <div className="bg-blue-600 text-white py-1.5 px-4 text-center text-[12px] font-semibold tracking-wider">
        Bilan de vision et chirurgie réfractive : Prenez rendez-vous en ligne sur Doctolib.{" "}
        <a href="#" className="underline font-bold hover:text-blue-100 transition-colors">
          Réserver maintenant
        </a>
      </div> */}

      {/* Main Navigation Container */}
      <div
        className={`w-full transition-all duration-500 ease-in-out border-b border-white/10 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-0 lg:px-16">
          {/* Top Utility Bar (Hidden on Mobile) */}
          <div className="flex lg:flex justify-end items-center gap-6 mb-2 text-[13px] font-medium transition-colors duration-300">
            <a
              href="https://linkedin.com/in/fabrice-bagna-52a815ab"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-500 flex items-center gap-1`}
            >
              LinkedIn
            </a>
            <a
              href="#"
              className={`${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-500`}
            >
              Accès Cabinet
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-sm">
              Urgence
            </button>
          </div>

          {/* Main Nav Items */}
          <div className="grid grid-cols-2 lg:grid-cols-[280px_1fr_max-content] items-center">
            {/* Logo / Name */}
            <a href="/" className="inline-block">
              <div className={`flex flex-col transition-colors duration-300 ${isScrolled ? "text-blue-900" : "text-white"}`}>
                <span className="text-xl lg:text-2xl font-bold tracking-tight leading-none">DR. FABRICE BAGNA</span>
                <span className="text-[10px] lg:text-[12px] font-bold tracking-[0.2em] uppercase text-blue-500">Ophtalmologie</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex justify-center items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.hasMega && setActiveMenu(link.name)}
                  onMouseLeave={() => link.hasMega && setActiveMenu(null)}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-1.5 py-4 text-[16px] xl:text-[17px] font-bold transition-colors duration-300 ${
                      isScrolled ? "text-blue-900" : "text-white"
                    } hover:text-blue-500 relative group/span`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-[50%] right-[50%] h-[3px] bg-blue-600 transition-all duration-300 group-hover/span:left-0 group-hover/span:right-0 ${
                        activeMenu === link.name ? "left-0 right-0" : ""
                      }`}
                    ></span>
                  </a>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Toggle & Search */}
            <div className="flex justify-end items-center gap-4">
              <button
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-blue-900" : "text-white"
                } hover:text-blue-500`}
              >
                <Search size={22} />
              </button>
              <button
                className={`lg:hidden ${isScrolled ? "text-blue-900" : "text-white"}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={22} />
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M4 6H20M4 12H20M4 18H20" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        className={`fixed top-[125px] left-0 w-full transition-all duration-300 transform ${
          activeMenu === "Spécialités"
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        }`}
        onMouseEnter={() => setActiveMenu("Spécialités")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-4 lg:px-16">
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-2xl p-10 grid grid-cols-5 gap-6">
            <div className="col-span-1 border-r border-gray-100 pr-6">
              <h4 className="text-blue-600 font-bold text-[12px] uppercase tracking-wider mb-6">
                Spécialités Chirurgicales
              </h4>
              <ul className="space-y-4">
                {[
                  "Chirurgie de la Cataracte",
                  "LASIK & Chirurgie Réfractive",
                  "Chirurgie du Glaucome",
                  "Chirurgie du Ptérygion",
                  "Injections Intravitréennes",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center justify-between text-blue-900 font-bold hover:text-blue-600 transition-colors"
                    >
                      <span className="text-[15px]">{item}</span>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-3 grid grid-cols-2 gap-x-10">
              <div>
                <h4 className="text-gray-400 font-bold text-[12px] uppercase tracking-wider mb-4">
                  Examens Techniques
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-600 text-[15px]">OCT (Tomographie)</a>
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-600 text-[15px]">Champ Visuel</a>
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-600 text-[15px]">Topographie Cornéenne</a>
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-600 text-[15px]">Angiographie</a>
                </div>
              </div>
              <div>
                <h4 className="text-gray-400 font-bold text-[12px] uppercase tracking-wider mb-4">
                  Suivi Médical
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-600 text-[15px]">Suivi Glaucome</a>
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-600 text-[15px]">DMLA</a>
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-600 text-[15px]">Rétinopathie Diabétique</a>
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-600 text-[15px]">Pédiatrie Oculaire</a>
                </div>
              </div>
            </div>

            <div className="col-span-1 bg-blue-50 rounded-[20px] p-6 flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-[14px] font-bold text-blue-900">Besoin d'un avis ?</p>
                <p className="text-[13px] text-gray-500">Le Dr. Bagna et son équipe vous conseillent sur le meilleur traitement adapté à votre vue.</p>
                <a href="#" className="inline-block bg-blue-600 text-white text-center text-[13px] font-bold py-3 px-6 w-full rounded-full hover:bg-blue-700 transition-colors">Prendre RDV</a>
              </div>
            </div>
            
            <button 
                onClick={() => setActiveMenu(null)}
                className="absolute top-6 right-8 text-gray-300 hover:text-blue-900 transition-colors"
            >
                <X size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white z-[999] flex flex-col items-start p-6 shadow-lg overflow-y-auto">
          <button
            className="self-end text-gray-500 hover:text-blue-900 mb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={22} />
          </button>
          <div className="flex flex-col items-center w-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-blue-900 text-lg font-bold py-2 w-full text-center hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;