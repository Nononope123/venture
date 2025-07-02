// app/coaching/equipe/page.js
import FeatureList from '@/components/ui/featurelist'; // Ajustez le chemin
import Link from 'next/link';

export const metadata = {
  title: 'Coaching d\'Équipe - Mon Site de Leadership',
  description: 'Transformation collective pour améliorer la cohésion, la communication et la performance de votre équipe.',
};

export default function CoachingEquipePage() {
  const features = [
    "Diagnostic d'équipe",
    "Ateliers de cohésion",
    "Résolution de conflits",
    "Communication efficace",
    "Définition d'objectifs communs",
    "Renforcement de la confiance"
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Coaching d'Équipe</h1>
          <p className="text-xl text-gray-700">Transformation collective pour améliorer la cohésion, la communication et la performance de votre équipe.</p>
        </header>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ce que nous abordons :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Un coaching d'équipe permet de libérer le potentiel collectif, d'harmoniser les relations et d'optimiser les dynamiques de groupe. Il est idéal pour les équipes qui souhaitent améliorer leur collaboration, gérer des tensions ou atteindre des objectifs ambitieux ensemble.
              </p>
              <FeatureList items={features} />
            </div>
            <div>
              {/* Ajoutez ici une image pertinente pour le coaching d'équipe */}
              <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
                {/* <Image src="/images/coaching-equipe.jpg" alt="Coaching d'Équipe" width={400} height={256} className="rounded-md" /> */}
                [Image du coaching d'équipe]
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-700 text-white rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Renforcez les Liens de Votre Équipe !</h2>
          <p className="text-lg mb-6">
            Offrez à votre équipe les outils pour une collaboration plus forte et des résultats exceptionnels.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors text-lg">
            Demander un Devis
          </Link>
        </section>
      </div>
    </div>
  );
}