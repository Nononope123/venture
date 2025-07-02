// app/telechargements/page.js
import EbookCard from '@/components/ui/ebookcard'; 
import Newsletter from '../components/newsletter';

export const metadata = {
  title: 'Téléchargements Gratuits - E-books Leadership',
  description: 'Téléchargez nos guides pratiques et e-books gratuits pour booster votre leadership.',
};

export default function FreeEbooks() {
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
    {
      id: 4,
      title: "Maîtriser la Prise de Décision Stratégique",
      description: "Apprenez les cadres de pensée pour prendre des décisions efficaces sous pression.",
      pages: 45,
    },
    {
      id: 5,
      title: "Le Guide du Manager Inspirant",
      description: "Développez les compétences pour motiver, engager et inspirer vos équipes vers l'excellence.",
      pages: 60,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Téléchargements Gratuits</h1>
          <p className="text-xl text-gray-700">Accédez instantanément à nos ressources et e-books pour votre développement.</p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeEbooks.map(ebook => (
              <EbookCard key={ebook.id} {...ebook} />
            ))}
          </div>
        </section>

        {/* Formulaire de newsletter pour accéder aux téléchargements */}
        <section className="py-10">
          <Newsletter />
        </section>
      </div>
    </div>
  );
}