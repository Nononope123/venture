"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileRessourcesDropdownOpen, setIsMobileRessourcesDropdownOpen] = useState(false);

  const closeAllMobileDropdowns = () => {
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileRessourcesDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (!newState) {
      closeAllMobileDropdowns();
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
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
            <div className="flex space-x-4 text-[#2E7D32] ">
              <a href="/" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium">Accueil</a>

              {/* A propos Desktop Dropdown */}
              <div className="relative group">
                <a href="/a-propos" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium flex items-center">
                  A propos
                </a>
              </div>

              {/* Services Desktop Dropdown */}
              <div className="relative group">
                <a href="/services" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium flex items-center">
                  Services
                </a>
              </div>

              {/* Ressources Desktop Dropdown */}
              <div className="relative group">
                <a href="/ressources" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium flex items-center">
                  Ressources
                </a>
              </div>

              <a href="/contact" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium">Contact</a>
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
            <a href="/a-propos"
              className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-md font-medium flex items-center justify-between"
              onClick={() => setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen)}
            >
              A propos
            </a>
          </div>

          {/* Mobile "Services" Dropdown */}
          <div className="relative">
            <a href="/services"
              className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
            >
              Services
            </a>
          </div>

          {/* Mobile "Ressources" Dropdown */}
          <div className="relative">
            <a href="/ressources"
              className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              onClick={() => setIsMobileRessourcesDropdownOpen(!isMobileRessourcesDropdownOpen)}
            >
              Ressources
            </a>
          </div>

          <a href="/contact" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Contact</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;