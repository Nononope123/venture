"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Icon } from "@iconify/react";
import { Eye } from "lucide-react";

function AnimatedCounter({ from, to, duration = 2, delay = 0 }) {
  const nodeRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      if (!node) return;

      const animateNumber = () => {
        let start = from;
        const increment = to > from ? 1 : -1;
        const totalDuration = duration * 1000;
        const stepTime = Math.abs(totalDuration / (to - from));

        const timer = setInterval(() => {
          start += increment;
          if (increment > 0 && start >= to) {
            start = to;
            clearInterval(timer);
          } else if (increment < 0 && start <= to) {
            start = to;
            clearInterval(timer);
          }
          node.textContent = start;
          if (start === to) {
            clearInterval(timer);
          }
        }, stepTime);
      };

      const timeout = setTimeout(animateNumber, delay * 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isInView, from, to, duration, delay, controls]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function HeroSectionWithStats() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image d'arrière-plan */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-50" // brightness-50 pour assombrir l'image
        style={{ backgroundImage: "url('/votre-image-hero.jpg')" }} // Remplacez par le chemin de votre image
      ></div>
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Calque sombre supplémentaire pour le contraste */}

      {/* Contenu principal de la section Hero */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center text-white py-20 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Votre Titre de Hero Impactant Ici
          </h1>
          
          <motion.p
            className="text-xl sm:text-2xl leading-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            K-Venture est un cabinet de coaching et de conseil dirigé par Sylvère Boussamba, certifié John C.
            Maxwell, qui accompagne les dirigeants et les équipes dans l’atteinte d’une performance optimale et
            durable.
          </motion.p>

          {/* Section des boutons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-24" // Ajustement de la marge inférieure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="mailto:info@ecmac-gabon.org"
              className="px-6 py-3 flex justify-center items-center gap-2 text-[#419b60] bg-white hover:bg-white/90 rounded-md shadow-lg transition-colors duration-300 font-semibold"
            >
              <Icon className="text-xl" icon="line-md:email-twotone" />
              Nous contacter
            </a>
            <a
              href="/nos-services"
              className="px-6 flex justify-center items-center gap-2 py-3 text-white bg-[#A4DE02] hover:bg-[#8bc34a] rounded-md shadow-lg transition-colors duration-300 font-semibold"
            >
              <Eye className="w-4 h-4 mr-1" />
              Voir nos services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Les cartes de statistiques positionnées absolument en bas de la section hero */}
      <div className="absolute bottom-0 left-0 right-0 z-50 px-6 lg:px-8 pb-10"> {/* z-50 ici */}
        <motion.dl
          className="mx-auto max-w-7xl grid grid-cols-1 gap-4 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
              visible: {
                  transition: {
                      staggerChildren: 0.2
                  }
              }
          }}
        >
          {[
            { dt: "Années d'expérience", ddPrefix: "+ ", ddValue: 8, ddSuffix: "" },
            { dt: "Organisations locales et internationales soutenues", ddPrefix: "+ ", ddValue: 20, ddSuffix: "" },
            { dt: "Retours clients positifs", ddPrefix: "+", ddValue: 80, ddSuffix: "%" },
            { dt: "Entreprises et leaders transformés", ddPrefix: "+", ddValue: 100, ddSuffix: "" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-white/20 backdrop-blur-md p-6 rounded-lg text-white shadow-xl" // Légèrement transparent avec effet de flou
              variants={cardVariants}
              custom={index}
            >
              <dt className="text-lg font-semibold leading-6">{stat.dt}</dt>
              <dd className="order-first text-5xl font-semibold tracking-tight mb-2">
                {stat.ddPrefix}
                <AnimatedCounter
                  from={0}
                  to={stat.ddValue}
                  duration={2}
                  delay={index * 0.2}
                />
                {stat.ddSuffix}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}