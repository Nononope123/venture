// components/Navbar.jsx
"use client"; // Indique que ce composant est un composant client dans Next.js App Router

import React, { useState } from 'react';
import Image from 'next/image';
// Si vous utilisez Next.js 13+ avec le dossier `app`, vous pouvez utiliser `next/navigation` pour `usePathname`
// import Link from 'next/link'; // Importez Link si vous voulez une navigation client-side plus performante

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Variables d'état distinctes pour chaque dropdown mobile
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileRessourcesDropdownOpen, setIsMobileRessourcesDropdownOpen] = useState(false);

  // Fonction pour fermer tous les dropdowns mobiles si le menu principal est fermé
  const closeAllMobileDropdowns = () => {
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileRessourcesDropdownOpen(false);
  };

  // Bascule le menu mobile principal et ferme les sous-menus si le menu principal se ferme
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (!newState) {
      closeAllMobileDropdowns(); // Ferme les sous-menus si le menu principal est fermé
    }
  };


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Image
                className="block h-8 w-auto"
                src="/logo.png"
                alt="Logo K-venture"
                width={32}
                height={32}
              />
            </div>
            {/* Desktop Menu - visible sur sm et plus grands écrans */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium">Accueil</a>

                {/* A propos Desktop Dropdown */}
                <div className="relative group">
                  <a href="/a-propos" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium flex items-center">
                    A propos
                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Mega Menu "A propos" */}
                  <div
                    className="absolute left-0 mt-2 w-[500px] max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                      <div>
                        <a href="/a-propos/k-venture" className="text-lg font-semibold text-gray-900 mb-10">K-venture</a>
                        <ul className="space-y-3">
                          <li><a href="/a-propos/k-venture/histoire" className="text-gray-600 hover:text-indigo-600 text-md">Histoire</a></li>
                          <li><a href="/a-propos/k-venture/missions" className="text-gray-600 hover:text-indigo-600 text-md">Missions</a></li>
                          <li><a href="/a-propos/k-venture/valeurs" className="text-gray-600 hover:text-indigo-600 text-md">Valeurs</a></li>
                        </ul>
                      </div>
                      <div>
                        <a href="/a-propos/sylvere-boussamba" className="text-lg font-semibold text-gray-900 mb-4">Sylvère Boussamba</a>
                        <ul className="space-y-3">
                          <li><a href="/a-propos/sylvere-boussamba/parcours" className="text-gray-600 hover:text-indigo-600 text-md">Parcours</a></li>
                          <li><a href="/a-propos/sylvere-boussamba/expertise" className="text-gray-600 hover:text-indigo-600 text-md">Expertise</a></li>
                          <li><a href="/a-propos/sylvere-boussamba/photos&videos" className="text-gray-600 hover:text-indigo-600 text-md">Photos et vidéos</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Desktop Dropdown */}
                <div className="relative group">
                  <a href="/services/page" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium flex items-center">
                    Services
                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Mega Menu "Services" */}
                  <div
                    className="absolute left-0 mt-2  w-[500px] max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                      <div>
                        <a href="/services/coaching/page" className="text-lg font-semibold text-gray-900 mb-2">Coaching</a>
                        <ul className="space-y-3">
                          <li><a href="/services/coaching/coaching-individuel" className="text-gray-600 hover:text-indigo-600 text-md">Coaching individuel</a></li>
                          <li><a href="/services/coaching/coaching-collectif" className="text-gray-600 hover:text-indigo-600 text-md">Coaching collectif</a></li>
                          <li><a href="/services/coaching/coaching-stratégique" className="text-gray-600 hover:text-indigo-600 text-md">Coaching stratégique</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900  text-md">Formations</h3>
                        <ul className="space-y-3">
                          <li><a href="/services/formations/formation-des-equipes" className="text-gray-600 hover:text-indigo-600 text-md">Formation des équipes</a></li>
                          <li><a href="/services/formations/developpement-individuel" className="text-gray-600 hover:text-indigo-600 text-md">Développement individuel</a></li>
                          <li><a href="/services/formations/transformation-organisationnelle" className="text-gray-600 hover:text-indigo-600 text-md">Transformation organisationnelle</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ressources Desktop Dropdown */}
                <div className="relative group">
                  <button className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium flex items-center">
                    Ressources
                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {/* Mega Menu "Ressources" */}
                  <div
                    className="absolute left-0 mt-2  w-[500px] max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-md">Blog</h3>
                        <ul className="space-y-3">
                          <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-md">Articles</a></li> {/* Texte mis à jour */}
                          <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-md">Actualités</a></li> {/* Texte mis à jour */}
                          <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-md">Tutoriels</a></li> {/* Texte mis à jour */}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-md">Livres</h3>
                        <ul className="space-y-3">
                          <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-md">Nos publications</a></li> {/* Texte mis à jour */}
                          <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-md">Recommandations</a></li> {/* Texte mis à jour */}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-md">E-books</h3>
                        <ul className="space-y-3">
                          <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-md">Téléchargements gratuits</a></li> {/* Texte mis à jour */}
                          <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-md">Guides thématiques</a></li> {/* Texte mis à jour */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="/contact" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium">Contact</a>
              </div>
            </div>
          </div>

          {/* Mobile menu button - visible sur les petits écrans (jusqu'à sm-max) */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu content - show/hide based on menu state */}
      <div className={`sm:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="bg-gray-100 text-gray-900 block px-3 py-2 rounded-md text-md font-medium">Accueil</a>

          {/* Mobile "A propos" Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium flex items-center justify-between"
              onClick={() => setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen)}
            >
              A propos
              <svg className={`h-5 w-5 transform transition-transform duration-200 ${isMobileAboutDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`${isMobileAboutDropdownOpen ? 'block' : 'hidden'} px-4 py-2`}>
              <div className="border-l-2 border-indigo-500 pl-2 mb-4">
                <h4 className="font-medium text-gray-900 mb-2 text-md">K-venture</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Histoire</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Missions</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Valeurs</a></li>
                </ul>
              </div>
              <div className="border-l-2 border-indigo-500 pl-2">
                <h4 className="font-medium text-gray-900 mb-2 text-md">Sylvère Boussamba</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Parcours</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Expertise</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Photos et vidéos</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile "Services" Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
            >
              Services
              <svg className={`h-5 w-5 transform transition-transform duration-200 ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`${isMobileServicesDropdownOpen ? 'block' : 'hidden'} px-4 py-2`}>
              <div className="border-l-2 border-indigo-500 pl-2 mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Coaching</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Coaching individuel</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Coaching collectif</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Coaching stratégique</a></li>
                </ul>
              </div>
              <div className="border-l-2 border-indigo-500 pl-2">
                <h4 className="font-medium text-gray-900 mb-2">Formations</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Formation des équipes</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Développement individuel</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Transformation organisationnelle</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile "Ressources" Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              onClick={() => setIsMobileRessourcesDropdownOpen(!isMobileRessourcesDropdownOpen)}
            >
              Ressources
              <svg className={`h-5 w-5 transform transition-transform duration-200 ${isMobileRessourcesDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`${isMobileRessourcesDropdownOpen ? 'block' : 'hidden'} px-4 py-2`}>
              <div className="border-l-2 border-indigo-500 pl-2 mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Blog</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Articles</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Actualités</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Tutoriels</a></li>
                </ul>
              </div>
              <div className="border-l-2 border-indigo-500 pl-2">
                <h4 className="font-medium text-gray-900 mb-2">Livres</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Nos publications</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Recommandations</a></li>
                </ul>
              </div>
              <div className="border-l-2 border-indigo-500 pl-2">
                <h4 className="font-medium text-gray-900 mb-2">E-books</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Téléchargements gratuits</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Guides thématiques</a></li>
                </ul>
              </div>
            </div>
          </div>

          <a href="/contact" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Contact</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;