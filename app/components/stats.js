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
          node.textContent = start.toString();
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
  }, [isInView, from, to, duration, delay]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function Stats() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // J'ai enlevé 'justify-between' du conteneur flex principal
    // et j'ai ajusté la hauteur minimale
    <div className="w-full min-h-[60vh] md:min-h-[40vh] lg:min-h-[40vh] flex flex-col items-center overflow-hidden bg-[#388E3C] py-10 px-4 sm:px-6 lg:px-8">

      {/* Header text */}
      <div className="flex flex-col items-center text-white text-center mb-8 sm:mb-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Nos réalisations</h3>
        <p className="text-base sm:text-lg">Des chiffres qui témoignent de notre impact</p>
      </div>

      {/* Stats cards container - Ajout d'une marge top responsive pour le rapprocher */}
      <div className="w-full mt-8 md:mt-2 lg:mt-2">
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
              className="flex flex-col bg-white/20 backdrop-blur-md p-6 rounded-lg text-white shadow-xl"
              variants={cardVariants}
              custom={index}
            >
              <dt className="text-lg font-semibold leading-6">{stat.dt}</dt>
              <dd className="order-first text-4xl sm:text-5xl font-semibold tracking-tight mb-2">
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