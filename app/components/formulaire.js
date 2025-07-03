// components/ContactForm.js
import React from 'react';

export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/merci"
      className="bg-[#2E7D32] p-8 shadow-lg rounded-lg text-white space-y-4"
    >
      {/* Champ Honeypot pour Netlify, caché visuellement */}
      <p className="hidden">
        <label>
          Ne remplissez pas ce champ : <input name="bot-field" />
        </label>
      </p>

      {/* Titre et sous-titre du formulaire */}
      <h2 className="text-2xl font-bold mb-2">Demande De Contact</h2>
      <p className="text-sm text-gray-200 mb-6">Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.</p>

      {/* Conteneur de la grille 2x2 pour les champs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Champ Prénom */}
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium mb-1">Prénom*</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            className="w-full p-2 rounded-md bg-white/8 text-white placeholder-gray-500 outline-none" 
          />
        </div>

        {/* Champ Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium mb-1">Nom*</label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            className="w-full p-2 rounded-md bg-white/8 text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Champ Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 rounded-md bg-white/8 text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Champ Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium mb-1">Téléphone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            className="w-full p-2 rounded-md bg-white/8 text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Champ Entreprise/Organisation */}
        <div>
          <label htmlFor="entreprise" className="block text-sm font-medium mb-1">Entreprise/Organisation</label>
          <input
            type="text"
            id="entreprise"
            name="entreprise"
            className="w-full p-2 rounded-md bg-white/8 text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Champ Service d'intérêt */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1">Service d'intérêt</label>
          <select
            id="service"
            name="service"
            className="w-full p-2 rounded-md bg-white/8 text-white outline-none"
          >
            {/* Les options ont déjà bg-white et text-black */}
            <option value="" className="bg-white text-black">Sélectionnez un service</option>
            <option value="Coaching Individuel" className="bg-white text-black">Coaching Individuel</option>
            <option value="Coaching Collectif" className="bg-white text-black">Coaching Collectif</option>
            <option value="Développement Individuel" className="bg-white text-black">Développement Individuel</option>
            <option value="Transformation Organisationnelle" className="bg-white text-black">Transformation Organisationnelle</option>
            <option value="Formation des Équipes" className="bg-white text-black">Formation des Équipes</option>
            <option value="Coaching Stratégique" className="bg-white text-black">Coaching Stratégique</option>
            <option value="Autre" className="bg-white/8 text-black">Autre</option>
          </select>
        </div>
      </div>

      {/* Champ Sujet */}
      <div>
        <label htmlFor="sujet" className="block text-sm font-medium mb-1">Sujet*</label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          required
          className="w-full p-2 rounded-md bg-white/8 text-white placeholder-gray-500 outline-none"
        />
      </div>

      {/* Champ Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message*</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full p-2 rounded-md bg-white/7 placeholder-gray-500 outline-none resize-y"
        ></textarea>
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        className="w-full bg-[#A3D900] text-[#1E5631] font-bold py-3 px-6 rounded-md hover:bg-[#8CC600] transition-colors duration-300"
      >
        Envoyer le Message
      </button>
    </form>
  );
}