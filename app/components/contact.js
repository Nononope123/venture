"use client";

import React from 'react';
import ContactForm from "../components/formulaire"
import Link from "next/link"

const ContactInfoCard = ({ icon, title, details }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'email': return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4v7a2 2 0 002 2h12a2 2 0 002-2v-7M4 8l7.89-5.26a2 2 0 012.22 0L20 8M4 12V5a2 2 0 012-2h12a2 2 0 012 2v7"></path></svg>;
      case 'phone': return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.134-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
      case 'location': return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
      default: return null;
    }
  };

  return (
    <div className="flex items-center text-gray-700 mb-4 last:mb-0">
      <div className="mr-3">{getIcon(icon)}</div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        {details.map((detail, i) => (
          <p key={i} className="text-sm">{detail}</p>
        ))}
      </div>
    </div>
  );
};


export default function ContactPage() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Informations de Contact</h3>
              <ContactInfoCard
                icon="email"
                title="Email"
                details={["contact@v-venture.com"]}
              />
              <ContactInfoCard
                icon="phone"
                title="Téléphone"
                details={["+241 74002587", "+241 66231478"]}
              />
              <ContactInfoCard
                icon="location"
                title="Adresse"
                details={["Libreville, Estuaire, Gabon"]}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-nous</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="#" className="flex items-center justify-center p-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38-.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm0 2.5h-4.96v16h4.96v-16zm6.22 0h-4.96v16h4.96v-8.399c0-4.666 3.256-5.023 3.487-3.696.075.466.126.967.126 1.543v10.552h4.96v-10.932c0-7.078-3.309-8.487-6.93-8.487z"/></svg>
                  LinkedIn
                </Link>
                <Link href="https://www.facebook.com/Kventureconseil" className="flex items-center justify-center p-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.243-1.333 1.103-1.333h2.897v-5h-4.498c-4.864 0-5.502 4.043-5.502 5.5v2.5z"/></svg>
                  Facebook
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}