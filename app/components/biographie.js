"use client";

import {Timeline} from "@/components/ui/timeline";
import Image from "next/image"

const timelineData = [
  {
    title: "1979",
    content: (
      // Utilisez flex justify-between et items-start pour aligner l'image à droite et le texte à gauche
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Naissance de Sylvère Boussamba au Gabon.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Les débuts d'un visionnaire."</span>
        </div>
        <div className="flex-shrink-0"> {/* Conteneur pour l'image */}
          <Image
            src="/CC1.jpg" // Remplacez par l'image de naissance de Sylvère
            alt="Naissance de Sylvère Boussamba"
            width={250} // Augmenter la taille
            height={150} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0" // mb-2 remplacé par mt-4/mt-0 pour l'espacement
          />
        </div>
      </div>
    ),
  },
  {
    title: "1979",
    content: (
      // Utilisez flex justify-between et items-start pour aligner l'image à droite et le texte à gauche
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Naissance de Sylvère Boussamba au Gabon.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Les débuts d'un visionnaire."</span>
        </div>
        <div className="flex-shrink-0"> {/* Conteneur pour l'image */}
          <Image
            src="/CC1.jpg" // Remplacez par l'image de naissance de Sylvère
            alt="Naissance de Sylvère Boussamba"
            width={250} // Augmenter la taille
            height={150} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0" // mb-2 remplacé par mt-4/mt-0 pour l'espacement
          />
        </div>
      </div>
    ),
  },
  {
    title: "1979",
    content: (
      // Utilisez flex justify-between et items-start pour aligner l'image à droite et le texte à gauche
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Naissance de Sylvère Boussamba au Gabon.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Les débuts d'un visionnaire."</span>
        </div>
        <div className="flex-shrink-0"> {/* Conteneur pour l'image */}
          <Image
            src="/CC1.jpg" // Remplacez par l'image de naissance de Sylvère
            alt="Naissance de Sylvère Boussamba"
            width={250} // Augmenter la taille
            height={150} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0" // mb-2 remplacé par mt-4/mt-0 pour l'espacement
          />
        </div>
      </div>
    ),
  },
  {
    title: "1979",
    content: (
      // Utilisez flex justify-between et items-start pour aligner l'image à droite et le texte à gauche
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Naissance de Sylvère Boussamba au Gabon.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Les débuts d'un visionnaire."</span>
        </div>
        <div className="flex-shrink-0"> {/* Conteneur pour l'image */}
          <Image
            src="/CC1.jpg" // Remplacez par l'image de naissance de Sylvère
            alt="Naissance de Sylvère Boussamba"
            width={250} // Augmenter la taille
            height={150} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0" // mb-2 remplacé par mt-4/mt-0 pour l'espacement
          />
        </div>
      </div>
    ),
  },
  {
    title: "1979",
    content: (
      // Utilisez flex justify-between et items-start pour aligner l'image à droite et le texte à gauche
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Naissance de Sylvère Boussamba au Gabon.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Les débuts d'un visionnaire."</span>
        </div>
        <div className="flex-shrink-0"> {/* Conteneur pour l'image */}
          <Image
            src="/CC1.jpg" // Remplacez par l'image de naissance de Sylvère
            alt="Naissance de Sylvère Boussamba"
            width={250} // Augmenter la taille
            height={150} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0" // mb-2 remplacé par mt-4/mt-0 pour l'espacement
          />
        </div>
      </div>
    ),
  },
  {
    title: "1979",
    content: (
      // Utilisez flex justify-between et items-start pour aligner l'image à droite et le texte à gauche
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Naissance de Sylvère Boussamba au Gabon.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Les débuts d'un visionnaire."</span>
        </div>
        <div className="flex-shrink-0"> {/* Conteneur pour l'image */}
          <Image
            src="/CC1.jpg" // Remplacez par l'image de naissance de Sylvère
            alt="Naissance de Sylvère Boussamba"
            width={250} // Augmenter la taille
            height={150} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0" // mb-2 remplacé par mt-4/mt-0 pour l'espacement
          />
        </div>
      </div>
    ),
  },
  {
    title: "1979",
    content: (
      // Utilisez flex justify-between et items-start pour aligner l'image à droite et le texte à gauche
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Naissance de Sylvère Boussamba au Gabon.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Les débuts d'un visionnaire."</span>
        </div>
        <div className="flex-shrink-0"> {/* Conteneur pour l'image */}
          <Image
            src="/CC1.jpg" // Remplacez par l'image de naissance de Sylvère
            alt="Naissance de Sylvère Boussamba"
            width={250} // Augmenter la taille
            height={150} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0" // mb-2 remplacé par mt-4/mt-0 pour l'espacement
          />
        </div>
      </div>
    ),
  },

  {
    title: "2013",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <h3 className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Création de Ogooué Labs, hub technologique.</h3>
          <p className="text-neutral-700 dark:text-neutral-300">Un incubateur, espace de coworking et école de programmation à Libreville, posant les bases de l'innovation gabonaise.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Le point de départ d'une révolution numérique."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg" // Remplacez par une image représentative d'Ogooué Labs
            alt="Création d'Ogooué Labs"
            width={300} // Augmenter la taille
            height={180} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2013",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <h3 className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Co-fondation de Digitech Africa.</h3>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Élargir l'impact à travers le continent."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg" // Remplacez par une image de Digitech Africa
            alt="Co-fondation de Digitech Africa"
            width={280} // Augmenter la taille
            height={170} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <h3 className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-15">Fondation d'Ecole 241, démocratisant l'accès aux compétences numériques.</h3>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"L'éducation pour tous, une priorité."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg" // Remplacez par une image d'École 241
            alt="Fondation d'Ecole 241"
            width={270} // Augmenter la taille
            height={160} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <h3 className="text-neutral-700 dark:text-neutral-300 font-semibold text-2xl mt-15">Fondation de StarX241, accélérateur de startups.</h3>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Soutenir l'émergence des talents entrepreneurs."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg" // Remplacez par une image de StarX241
            alt="Fondation de StarX241"
            width={280} // Augmenter la taille
            height={170} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <h3 className="text-neutral-700 dark:text-neutral-300 text-2xl font-semibold mt-5">Participation à des initiatives régionales pour renforcer l'impact numérique en Afrique.</h3>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Un engagement continu pour le développement continental."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg" // Remplacez par une image d'initiatives régionales 2024
            alt="Participation à des initiatives régionales"
            width={300} // Augmenter la taille
            height={180} // Augmenter la taille
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300">Poursuite des participations à des initiatives régionales, soulignant le leadership de Sylvère.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"L'Afrique, future usine digitale du monde."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg"
            alt="Participation continue aux initiatives régionales"
            width={280}
            height={170}
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300">Élargissement des partenariats et des actions de mentorat à l'échelle régionale.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Construire des ponts pour l'innovation."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg"
            alt="Extension des partenariats régionaux"
            width={270}
            height={160}
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300">Travail continu sur l'inclusion numérique et l'accès à la formation pour tous.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Une vision pour une Afrique connectée et compétente."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg"
            alt="Promotion de l'inclusion numérique"
            width={290}
            height={175}
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300">Interventions lors de conférences internationales, partageant son expertise et sa vision.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Une voix influente pour le numérique africain."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg"
            alt="Conférences et leadership d'opinion"
            width={260}
            height={155}
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300">Lancement de nouveaux projets innovants, consolidant l'écosystème tech gabonais.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"L'innovation sans limite."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg"
            alt="Développement de nouveaux projets"
            width={275}
            height={165}
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="flex flex-col md:flex-row items-start md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="flex-1 text-left">
          <p className="text-neutral-700 dark:text-neutral-300">Poursuite de l'objectif de transformer l'Afrique en une "digital factory" mondiale.</p>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 italic">"Un avenir radieux pour le continent."</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/CC1.jpg"
            alt="Vision 2030 pour l'Afrique"
            width={290}
            height={175}
            className="rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </div>
    ),
  },
];

export default function Biographie() {
  return (
    <main className="min-h-screen bg-white dark:bg-black py-20 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">Biographie de Sylvère Boussamba</h1>
      <Timeline data={timelineData} />
    </main>
  );
}