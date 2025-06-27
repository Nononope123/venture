// components/ContactForm.js
import React from 'react';

export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/merci" // Créez une page /merci.js ou /merci.tsx pour la redirection
      className="w-[50%] p-8 bg-[#4CAF50] shadow-lg rounded-lg space-y-6 grid grid-cols-1 md:grid-cols-2 gap-5 dark:bg-gray-800"
    >
      {/* Champ Honeypot pour Netlify, caché visuellement */}
      <p className="hidden">
        <label>
          Ne remplissez pas ce champ : <input name="bot-field" />
        </label>
      </p>

      {/* Champ Nom Complet (première colonne sur grand écran) */}
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-white text-sm font-bold mb-2 dark:text-gray-300">
          Nom Complet:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 placeholder-gray-400"
          placeholder="Votre nom"
        />
      </div>

      {/* Champ Email (deuxième colonne sur grand écran) */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2 dark:text-gray-300">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 placeholder-gray-400"
          placeholder="votre.email@example.com"
        />
      </div>

      {/* Champ Service (première colonne sur grand écran) */}
      <div className="mb-4">
        <label htmlFor="service" className="block text-white text-sm font-bold mb-2 dark:text-gray-300">
          Service qui vous intéresse:
        </label>
        <select
          id="service"
          name="service"
          required
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
        >
          <option value="">-- Veuillez choisir un service --</option>
          <option value="Coaching Individuel">Coaching Individuel</option>
          <option value="Coaching Collectif">Coaching Collectif</option>
          <option value="Développement Individuel">Développement Individuel</option>
          <option value="Transformation Organisationnelle">Transformation Organisationnelle</option>
          <option value="Formation des Équipes">Formation des Équipes</option>
          <option value="Coaching Stratégique">Coaching Stratégique</option>
        </select>
      </div>
       
      {/* Champ Contact (Téléphone) (deuxième colonne sur grand écran) */}
      <div className="mb-4">
        <label htmlFor="contactPhone" className="block text-white text-sm font-bold mb-2 dark:text-gray-300">
          Contact (Téléphone):
        </label>
        <input
          type="tel" // Changer type en tel pour une meilleure sémantique
          id="contactPhone"
          name="contactPhone"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 placeholder-gray-400"
          placeholder="Votre Contact"
        />
      </div>

      {/* Champ Message (prend toute la largeur) */}
      <div className="mb-6 md:col-span-2"> {/* `col-span-2` pour qu'il prenne les deux colonnes sur écran moyen/grand */}
        <label htmlFor="message" className="block text-white text-sm font-bold mb-2 dark:text-gray-300">
          Votre Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 placeholder-gray-400"
          placeholder="Bonjour, je souhaite en savoir plus sur..."
        ></textarea>
      </div>

      {/* Bouton d'envoi (centré et prend toute la largeur) */}
      <div className="md:col-span-2 flex justify-center"> {/* Centrage du bouton */}
        <button
          type="submit"
          className="bg-[#A4DE02] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}