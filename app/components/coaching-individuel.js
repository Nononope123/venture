// app/coaching/individuel/page.js
import FeatureList from '@/components/ui/featurelist'; // Ajustez le chemin
import Link from 'next/link';

export const metadata = {
  title: 'Coaching Individuel sur Mesure - Mon Site de Leadership',
  description: 'Accompagnement personnalisé pour développer votre leadership, clarifier vos objectifs et maximiser votre potentiel.',
};

export default function CoachingIndividuelPage() {
  const features = [
    "Sessions 1:1 personnalisées",
    "Plan de développement sur mesure",
    "Suivi régulier des progrès",
    "Outils d'auto-évaluation",
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Coaching Individuel sur Mesure</h1>
          <p className="text-xl text-gray-700">Accompagnement personnalisé pour développer votre leadership, clarifier vos objectifs et maximiser votre potentiel.</p>
        </header>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ce que vous allez obtenir :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Le coaching individuel vous offre un espace confidentiel et sur mesure pour explorer vos défis, identifier vos forces et élaborer des stratégies concrètes pour atteindre vos aspirations. Que vous soyez un jeune professionnel ou un leader expérimenté, cet accompagnement vous propulsera vers de nouveaux sommets.
              </p>
              <FeatureList items={features} />
            </div>
            <div>
              {/* Ajoutez ici une image pertinente pour le coaching individuel */}
              <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
                {/* <Image src="/images/coaching-individuel.jpg" alt="Coaching Individuel" width={400} height={256} className="rounded-md" /> */}
                [Image du coaching individuel]
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-700 text-white rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Prêt à Transformer Votre Leadership ?</h2>
          <p className="text-lg mb-6">
            Investissez dans votre développement personnel et professionnel. Nous serons ravis de discuter de vos besoins.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors text-lg">
            Demander un Devis
          </Link>
        </section>
      </div>
    </div>
  );
}