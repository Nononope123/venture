// pages/index.js (ajout à la suite des autres sections)

import Head from 'next/head';
import EbookCard from '@/components/ui/ebookcard';
import Newsletter from '../components/newsletter';

export default function Ebook() {
  const freeEbooks = [
    {
      id: 1,
      title: "Guide Complet du Leadership Transformationnel",
      description: "Un guide pratique de 50 pages pour développer votre leadership et transformer votre organisation.",
      pages: 50,
    },
    {
      id: 2,
      title: "Les 10 Habitudes des Leaders Exceptionnels",
      description: "Découvrez les habitudes quotidiennes qui font la différence dans l'exercice du leadership.",
      pages: 30,
    },
    {
      id: 3,
      title: "Toolkit de l'Intelligence Émotionnelle",
      description: "Outils pratiques et exercices pour développer votre intelligence émotionnelle au quotidien.",
      pages: 40,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">

      <main className="container mx-auto px-4">
        {/* Vos autres sections (Articles, Livres Recommandés) peuvent être ici */}

        <section className="mt-20"> {/* Marge supérieure pour séparer des autres sections */}
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">E-books Gratuits</h2>
            <p className="text-lg text-gray-600">Téléchargez nos guides pratiques pour développer votre leadership</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> {/* Ajout de marge en bas */}
            {freeEbooks.map(ebook => (
              <EbookCard
                key={ebook.id}
                title={ebook.title}
                description={ebook.description}
                pages={ebook.pages}
              />
            ))}
          </div>

          <Newsletter/>
        </section>
      </main>
    </div>
  );
}