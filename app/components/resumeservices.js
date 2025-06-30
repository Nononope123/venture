"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Corrected from "motion/react" to "framer-motion"
import { useOutsideClick } from "@/hooks/use-outside-click";



export function ResumeServices() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
    <h3 className="flex justify-center text-4xl font-bold text-[#1E5631] py-8 ">Nos services</h3>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white  dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 py-2"
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul
        className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-4" // Retour à la grille, 3 colonnes sur lg
      >
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col items-start hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={250} // Taille de l'image ajustée
                  height={200}
                  src={card.src}
                  alt={card.title}
                  className="h-52 w-full rounded-lg object-cover object-top" // Hauteur de l'image ajustée
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col w-full text-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-[#1E5631] dark:text-neutral-200 text-base"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Coaching individuel",
    src: "https://www.horizonrh.ma/wp-content/uploads/2020/04/coaching_ind.jpg",
    ctaText: "En savoir plus",
    ctaLink: "https://www.horizonrh.ma/wp-content/uploads/2020/04/coaching_ind.jpg",
    content: () => {
      return (
        <p>
          Ce service est dédié à l'accompagnement personnalisé, permettant à chaque individu de maximiser son potentiel et d'atteindre ses objectifs professionnels ou personnels.
           Il offre un espace de réflexion confidentiel pour surmonter les défis, développer de nouvelles compétences et renforcer la confiance en soi.
        </p>
      );
    },
  },
  {
    title: "Développement individuel",
    src: "https://f.maformation.fr/edito/sites/3/2021/10/developpement-personnel.jpeg",
    ctaText: "En savoir plus",
    ctaLink: "https://f.maformation.fr/edito/sites/3/2021/10/developpement-personnel.jpeg",
    content: () => {
      return (
        <p>
        Ce service se concentre sur l'épanouissement personnel et professionnel à travers l'acquisition de connaissances et le renforcement de compétences spécifiques.
        Il inclut souvent des ateliers, des formations et des outils pour favoriser la croissance continue et l'adaptabilité.        </p>
      );
    },
  },

  {
    title: "Formation des équipes",
    src: "https://evolutis-formation.fr/wp-content/uploads/2022/03/Formation-reussir-la-cohesion-dequipe.jpg",
    ctaText: "En savoir plus",
    ctaLink: "https://evolutis-formation.fr/wp-content/uploads/2022/03/Formation-reussir-la-cohesion-dequipe.jpg",
    content: () => {
      return (
        <p>
         La formation des équipes est conçue pour doter les groupes de travail des compétences et des outils nécessaires pour améliorer leur productivité et leur cohésion. 
         Elle peut couvrir des sujets variés, allant de la gestion de projet à la communication interpersonnelle, en passant par le leadership.
        </p>
      );
    },
  },
  {
    title: "Transformation organisationnelle",
    src: "https://abylon-conseil.com/wp-content/uploads/2023/06/image.jpg",
    ctaText: "En savoir plus",
    ctaLink:"https://abylon-conseil.com/wp-content/uploads/2023/06/image.jpg",
    content: () => {
      return (
        <p>
        Ce service accompagne les entreprises dans leurs changements majeurs, qu'ils soient technologiques, structurels ou culturels.
         Il aide à définir une vision claire, à mobiliser les équipes et à mettre en œuvre des stratégies efficaces pour une transition réussie et durable.
                 </p>
      );
    },
  },
  {
    title: "Coaching stratégique",
    src: "https://www.bayonne.cci.fr/sites/g/files/mwbcuj1516/files/2021-07/Innover-grace-au-coaching-strategique-ADN-cci-bayonne-pays-basque.jpg",
    ctaText: "En savoir plus",
    ctaLink: "https://www.bayonne.cci.fr/sites/g/files/mwbcuj1516/files/2021-07/Innover-grace-au-coaching-strategique-ADN-cci-bayonne-pays-basque.jpg",
    content: () => {
      return (
        <p>
        Ce service s'adresse aux dirigeants et aux décideurs qui souhaitent affiner leur vision, élaborer des stratégies innovantes et piloter leur organisation vers le succès à long terme. 
        Il offre un soutien expert pour l'analyse des défis, l'identification des opportunités et la prise de décisions éclairées.
                </p>
      );
    },
  },
  { 
    title: "Coaching collectif",
    src: "https://whyness.ch/wp-content/uploads/2022/07/entreprises-domaines-competences-1024x624.jpg",
    ctaText: "En savoir plus",
    ctaLink: "https://whyness.ch/wp-content/uploads/2022/07/entreprises-domaines-competences-1024x624.jpg",
    content: () => {
      return (
        <p>
          Axé sur la dynamique de groupe, le coaching collectif vise à optimiser la collaboration et la performance d'une équipe. 
          Il aide les membres à mieux communiquer, à résoudre les conflits et à travailler ensemble de manière plus efficace pour atteindre des objectifs communs.
        </p>
      );
    },
  },
];