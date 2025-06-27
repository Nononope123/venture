// app/contact/page.jsx (ou pages/contact.jsx)
"use client"; // Nécessaire si vous utilisez des composants clients ou des hooks dans cette page

import React, { Suspense, lazy } from 'react';
import ContactForm from '../components/formulaire'; // Importe ContactForm.js
import ContactInfoCard from '../components/liens'; // Ajustez le chemin si nécessaire

// Importation dynamique pour le composant Map (car il utilise Leaflet, qui est client-side)
const Carte = lazy(() => import('../components/carte')); // Importe carte.js

export default function ContactPage() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">CONTACT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bloc de gauche : Infos de contact et Carte */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Carte Email */}
              <ContactInfoCard
                icon="email"
                title="Laissez-nous un mail"
                details={["info@example.com", "contact@example.com"]}
              />

              {/* Carte Téléphone */}
              <ContactInfoCard
                icon="phone"
                title="Appelez-nous"
                details={["+241 74002587", "+241 66231478"]}
              />
            </div>

            {/* Carte de la Map */}
            {/* Utilisez Suspense pour le chargement paresseux de la carte */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Suspense fallback={<div>Chargement de la carte...</div>}>
                <Carte /> {/* Utilisation de votre composant carte.js */}
              </Suspense>
            </div>
          </div>

          {/* Bloc de droite : Formulaire de contact */}
          <div>
            <ContactForm /> {/* Utilisation de votre composant ContactForm.js */}
          </div>
        </div>
      </div>
    </section>
  );
}