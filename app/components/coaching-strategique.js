// app/coaching/executif/page.js
import FeatureList from '@/components/ui/featurelist'; // Ajustez le chemin
import Link from 'next/link';

export const metadata = {
  title: 'Coaching Exécutif - Mon Site de Leadership',
  description: 'Accompagnement stratégique pour les dirigeants et cadres supérieurs dans leurs défis de leadership.',
};

export default function CoachingExecutifPage() {
  const features = [
    "Vision stratégique",
    "Prise de décision complexe",
    "Gestion du stress et de la pression",
    "Influence et impact",
    "Développement du leadership charismatique",
    "Optimisation de la performance"
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Coaching Exécutif</h1>
          <p className="text-xl text-gray-700">Accompagnement stratégique pour les dirigeants et cadres supérieurs dans leurs défis de leadership.</p>
        </header>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pour qui et pourquoi :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Le coaching exécutif est dédié aux leaders expérimentés qui naviguent des environnements complexes. Il se concentre sur l'amélioration des compétences de haut niveau, la prise de décisions stratégiques et la maximisation de l'impact personnel et organisationnel.
              </p>
              <FeatureList items={features} />
            </div>
            <div>
              {/* Ajoutez ici une image pertinente pour le coaching exécutif */}
              <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
                {/* <Image src="/images/coaching-executif.jpg" alt="Coaching Exécutif" width={400} height={256} className="rounded-md" /> */}
                [Image du coaching exécutif]
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-700 text-white rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Élevez Votre Leadership à un Nouveau Niveau !</h2>
          <p className="text-lg mb-6">
            Développez une vision plus claire et un impact plus puissant en tant que leader.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors text-lg">
            Demander un Devis
          </Link>
        </section>
      </div>
    </div>
  );
}