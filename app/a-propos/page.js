// app/a-propos/page.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import { MarqueeReviews } from '@/components/ui/marquee-reviews'; // Path to your MarqueeReviews component
import { cn } from "@/lib/utils";

// Data for Testimonials Section
const clientReviews = [
  {
    reviewText: "K-Venture a transformé notre approche du leadership. Les formations sont pertinentes et les résultats tangibles. Hautement recommandé !",
    clientName: "Jean Dupont",
    clientTitle: "CEO, InnovTech Solutions",
    rating: 5,
    avatar: "/Capture d’écran du 2025-06-27 18-11-01.png"
  },
  {
    reviewText: "Grâce au coaching de Sylvère Boussamba, j'ai débloqué un potentiel que je ne soupçonnais pas. Une expérience de croissance incroyable.",
    clientName: "Marie Leblanc",
    clientTitle: "Directrice Marketing, Alpha Corp",
    rating: 5,
    avatar: "/Capture d’écran du 2025-06-27 18-11-01.png"
  },
  {
    reviewText: "Les ateliers sur l'intelligence émotionnelle ont eu un impact profond sur la cohésion de mon équipe. Bravo K-Venture !",
    clientName: "Marc Olivier",
    clientTitle: "Chef de Projet, BuildFast Inc.",
    rating: 5,
    avatar: "/Capture d’écran du 2025-06-27 18-11-01.png"
  },
  {
    reviewText: "Un accompagnement sur mesure qui a propulsé ma carrière. Leur approche personnalisée est un atout majeur.",
    clientName: "Sophie Martin",
    clientTitle: "Consultante Senior",
    rating: 4,
    avatar: "/Capture d’écran du 2025-06-27 18-11-01.png"
  },
  {
    reviewText: "Leur vision du leadership est inspirante et applicable. Nous avons vu des améliorations significatives en peu de temps.",
    clientName: "David Nkogo",
    clientTitle: "Directeur Opérations, Apex Group",
    rating: 5,
    avatar: "/Capture d’écran du 2025-06-27 18-11-01.png"
  },
  {
    reviewText: "Des formateurs passionnés et compétents. Leurs méthodes sont engageantes et les résultats durables.",
    clientName: "Nathalie Dubois",
    clientTitle: "Coordinatrice de Programmes, NGO Africa",
    rating: 5,
    avatar: "/Capture d’écran du 2025-06-27 18-11-01.png"
  },
  {
    reviewText: "J'ai apprécié la clarté et la pertinence des interventions. Une vraie valeur ajoutée pour notre organisation.",
    clientName: "Serge Kouame",
    clientTitle: "Manager, Tech Solutions",
    rating: 5,
    avatar: "/Capture d’écran du 2025-06-27 18-11-01.png"
  },
  {
    reviewText: "K-Venture nous a aidé à bâtir une culture d'entreprise plus forte et plus résiliente. Leur impact est indéniable.",
    clientName: "Amara Cisse",
    clientTitle: "Directrice Générale, Horizon Corp",
    rating: 5,
    avatar: "/Capture d’écran du 2025-06-27 18-11-01.png"
  },
];


export default function AproposPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 ">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-[#C8E6C9] dark:bg-blue-800 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          À Propos de K-Venture
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Votre partenaire pour l'excellence en leadership, transformation et innovation en Afrique et au-delà.
        </p>
      </section>

      {/* Dual-Column Sticky Section */}
      <section className="relative flex flex-col md:flex-row max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 gap-8 justify-center">
        {/* Left Sticky Column: K-Venture */}
        <div className="md:w-1/2 lg:w-2/5 md:sticky md:top-8 self-start h-fit bg-[#C8E6C9] dark:bg-zinc-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Notre Vision : K-Venture
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            K-Venture est un cabinet de conseil en management et en leadership fondé avec la conviction profonde que le succès durable des organisations repose sur la capacité de leurs leaders à inspirer, innover et s'adapter. Nous sommes dédiés à l'accompagnement des dirigeants, des équipes et des entreprises, en leur fournissant les outils et les stratégies nécessaires pour relever les défis complexes du 21e siècle.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Notre approche est holistique, combinant expertise technique, intelligence émotionnelle et une connaissance approfondie des dynamiques africaines. Nous croyons en un leadership qui non seulement excelle, mais qui transforme positivement son environnement, contribuant ainsi à un développement économique et social durable.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            De la stratégie à l'exécution, K-Venture est votre partenaire de confiance pour bâtir des organisations résilientes, agiles et performantes, prêtes à saisir les opportunités de demain.
          </p>
        </div>

        {/* Right Scrolling Column: Sylvère Boussamba and Timeline */}
        <div className="md:w-1/2 lg:w-3/5">
          {/* Sylvère Boussamba Section */}
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Sylvère Boussamba : Le Fondateur
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <Image
                src="/CC8.jpg"
                alt="Sylvère Boussamba"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-lg border-4 border-[#C8E6C9]"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Sylvère Boussamba
                </h3>
                <p className="text-[#2E7D32] dark:text-blue-400 text-lg font-medium">
                  Entrepreneur Technologique, Expert en Leadership, Coach Certifié John C. Maxwell
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sylvère Boussamba est une figure emblématique de l'innovation et du développement des compétences en Afrique. Fort d'une carrière riche et diversifiée dans le secteur de l'informatique et de la technologie, il a toujours été à l'avant-garde des initiatives visant à transformer le paysage numérique et entrepreneurial du continent.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              En tant que fondateur de K-Venture, Sylvère met à profit son expertise unique en leadership et en stratégie pour accompagner les entreprises et les individus vers l'atteinte de leurs objectifs les plus ambitieux. Sa certification John C. Maxwell atteste de sa maîtrise des principes fondamentaux du leadership transformatif, qu'il applique avec passion pour libérer le potentiel de chacun.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Il est également le cerveau derrière des initiatives majeures comme Ogooué Labs, l'École 241 et StarX241, des plateformes qui ont démocratisé l'accès à la formation numérique et soutenu l'émergence de startups innovantes au Gabon et au-delà. Sa vision est de construire une Afrique autonome et prospère par le biais de l'éducation, de l'innovation et d'un leadership éclairé.
            </p>
          </div>
        </div>

      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1E5631] dark:text-white mb-12">
          Ce que disent nos Clients
        </h2>
        <div className="max-w-7xl mx-auto">
          <MarqueeReviews reviews={clientReviews} />
        </div>
      </section>
    </main>
  );
}