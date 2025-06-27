"use client"; // Important for Next.js App Router if using client-side interactions

import React from 'react';
import { motion } from 'framer-motion';

const com = [
  {
    title: "SEEG",
    description: "Grâce aux formations de K-Venture, nos cadres ont renforcé leurs compétences en leadership transformationnel. Une approche pratique et percutante adaptée aux enjeux du secteur énergétique.",
    color: "text-blue-600",
  },
  {
    title: "TRIANON",
    description: "L’accompagnement stratégique de K-Venture a été déterminant dans la structuration de nos projets internes. Leur expertise nous a permis de fédérer nos équipes autour d’une vision claire.",
    color: "text-green-600",
  },
  {
    title: "Union Européenne ",
    description: "K-Venture fait preuve d’un professionnalisme exemplaire dans la mise en œuvre de programmes orientés vers le développement durable et l’inclusion numérique en Afrique centrale.",
    color: "text-yellow-600",
  },
  {
    title: "UNESCO",
    description: "Nous avons collaboré avec K-Venture dans le cadre de projets éducatifs et numériques. Leur capacité à mobiliser des talents locaux est remarquable.",
    color: "text-pink-600",
  },
  {
    title: "ORABANK",
    description: "L’impact des sessions de formation a été immédiatement visible dans nos équipes. Les outils proposés par K-Venture sont modernes, efficaces et adaptés au contexte africain.",
    color: "text-purple-600",
  },
  {
    title: "AFG BANK",
    description: "Une excellente expérience. K-Venture sait allier rigueur, pédagogie et innovation pour faire émerger une nouvelle génération de leaders.",
    color: "text-red-500",
  },
  {
    title: "Banque Mondiale",
    description: "Dans le cadre de nos initiatives pour le développement du capital humain au Gabon, K-Venture s’est imposé comme un acteur clé, capable de proposer des solutions pertinentes et adaptées aux réalités locales.",
    color: "text-red-500",
  },

];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Use a spring animation for a natural feel
      stiffness: 100,
      damping: 10,
    },
  },
};

const Commentaires = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Les témoignages de nos clients</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {com.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md transform hover:scale-105 transition duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // Animates when the element comes into view
              viewport={{ once: true, amount: 0.8 }} // Animates only once, when 80% of the element is visible
              transition={{ delay: index * 0.1 }} // Apply staggered delay based on index
            >
              <h3 className={`text-xl font-semibold ${skill.color} mb-2`}>{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commentaires;