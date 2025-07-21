"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // La fonction linkClass est déjà bien responsive grâce à `text-md`
  const linkClass = (href, base = "text-md") =>
    `px-3 py-2 rounded-md ${base} font-medium ${
      pathname === href
        ? "bg-green-800 text-white font-semibold hover:bg-gray-200 hover:text-green-800"
        : "text-gray-900 hover:bg-gray-100"
    } block md:inline-block`; // Ajout de 'block' pour mobile, 'md:inline-block' pour desktop

  return (
    // Ajout d'un padding vertical par défaut pour une hauteur constante
    <nav className="bg-white shadow-lg sticky top-0 z-50 py-1">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16"> {/* Ajout d'une hauteur fixe pour la flexbox */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image
              // Rend la largeur du logo responsive
              className="block w-16  h-auto"
              src="/logo_venture.png"
              alt="Logo K-venture"
              width={300}
              height={300}
            />
            <h1 className="text-gray-900 text-base sm:text-lg font-medium">K-VENTURE</h1> {/* Taille de texte responsive pour le titre */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center text-[#2E7D32]">
            <Link href="/" className={linkClass("/")}>Accueil</Link>
            <Link href="/a-propos" className={linkClass("/a-propos")}>A propos</Link>
            <Link href="/services" className={linkClass("/services")}>Services</Link>
            <Link href="/ressources" className={linkClass("/ressources")}>Ressources</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden flex items-center"> {/* Ajout de flex items-center pour aligner le bouton */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className={linkClass("/")} onClick={toggleMobileMenu}>Accueil</Link>
          <Link href="/a-propos" className={linkClass("/a-propos")} onClick={toggleMobileMenu}>A propos</Link>
          <Link href="/services" className={linkClass("/services")} onClick={toggleMobileMenu}>Services</Link>
          <Link href="/ressources" className={linkClass("/ressources")} onClick={toggleMobileMenu}>Ressources</Link>
          <Link href="/contact" className={linkClass("/contact")} onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;