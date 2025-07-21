"use client";

import React from 'react';
import { motion } from 'framer-motion';

const com = [
  {
    title: "Coaching individuel",
    description: "Accompagnement personnalisé pour développer votre leadership et atteindre vos objectifs.",
    buttonText: "En savoir plus",
    buttonLink: "/services",
  },
  {
    title: "Transformation organisationnelle",
    description: "Accompagnement stratégique pour conduire le changement dans votre entreprise.",
    buttonText: "En savoir plus",
    buttonLink: "/services",
  },
  {
    title: "Formations en leadership",
    description: "Programmes complets pour développer les compétences de leadership de vos équipes.",
    buttonText: "En savoir plus",
    buttonLink: "/services",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Services1 = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold md:text-center text-[#1E5631] mb-3">Nos services</h2>
        <p className="text-base sm:text-lg text-center text-gray-700 mb-10">Des solutions sur mesure adaptées à vos besoins</p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0 sm:p-6">
          {com.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white hover:scale-105 transition-transform duration-300 flex flex-col justify-between items-center p-6 rounded-2xl hover:p-5 hover:shadow-md  hover:border-1 hover:border-[#1E5631] mx-auto w-full max-w-sm sm:max-w-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className={`text-xl font-semibold text-center text-green-600 mb-2`}>{skill.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{skill.description}</p>
              <a href={skill.buttonLink} className="mt-3 border-1 p-2 border-[#1E5631] rounded-sm flex justify-center bg-[#1E5631] text-white hover:bg-white hover:text-[#1E5631] w-full max-w-xs">
                {skill.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services1;