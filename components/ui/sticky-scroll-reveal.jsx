"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  interval = 5000, // Intervalle de défilement automatique
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  // On n'utilise plus useScroll pour déclencher le changement de carte
  // mais on le garde si on veut détecter le scroll du conteneur pour mettre en pause l'auto-scroll par exemple.
  // const { scrollYProgress } = useScroll({ container: ref, offset: ["start start", "end start"] });

  const cardLength = content.length;

  // Logique de défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prevActiveCard) => {
        return (prevActiveCard + 1) % cardLength;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [cardLength, interval]);

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      // Pas de overflow-y-auto sur le conteneur principal car le défilement n'est plus manuel pour tout le contenu.
      // La hauteur est fixe, et le contenu interne va transitionner.
      className="relative flex justify-center space-x-10 rounded-md py-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4 overflow-hidden"> {/* Ajout de overflow-hidden ici */}
        <div className="max-w-2xl">
          {/* Utilisation de AnimatePresence pour les transitions entre les cartes de texte */}
          <AnimatePresence mode="wait"> {/* mode="wait" assure qu'une animation se termine avant que la suivante commence */}
            {content.map((item, index) =>
              activeCard === index && ( // N'affiche que la carte active
                <motion.div
                  key={item.title + index}
                  initial={{ opacity: 0, y: 50 }} // Commence en bas et invisible
                  animate={{ opacity: 1, y: 0 }} // Monte et devient visible
                  exit={{ opacity: 0, y: -50 }} // Sort en haut et devient invisible
                  transition={{ duration: 0.7, ease: "easeOut" }} // Durée et easing pour la transition
                  className="my-auto " // La marge sert à espacer le contenu dans la carte, mais la position est gérée par Framer Motion
                >
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }} // Délai pour que le titre apparaisse après la carte
                    className="text-2xl font-bold text-slate-100 mt-10"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }} // Délai pour que le paragraphe apparaisse après le titre
                    className="text-kg mt-10 max-w-sm text-slate-300 text-justify"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {/* Assurez-vous que content[activeCard] existe avant d'accéder à .content */}
        {content[activeCard] && content[activeCard].content ? content[activeCard].content : null}
      </div>
    </motion.div>
  );
};