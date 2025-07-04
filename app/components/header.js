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

  const linkClass = (href, base = "text-md") =>
    `px-3 py-2 rounded-md ${base} font-medium ${
      pathname === href
        ? "bg-green-800 text-white font-semibold hover:bg-gray-200 hover:text-green-800"
        : "text-gray-900 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image
              className="block h-auto w-20"
              src="/logo_venture.png"
              alt="Logo K-venture"
              width={500}
              height={500}
            />
            <h1 className="text-gray-900 text-md font-medium">K-VENTURE</h1>
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
          <div className="md:hidden">
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
      <div className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className={linkClass("/")}>Accueil</Link>
          <Link href="/a-propos" className={linkClass("/a-propos")}>A propos</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/ressources" className={linkClass("/ressources")}>Ressources</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
