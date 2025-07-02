// app/formations/organisationnelle/page.js
import FeatureList from '@/components/ui/featurelist'; // Ajustez le chemin
import Link from 'next/link';
// import Image from 'next/image'; // Si vous voulez ajouter une image

export const metadata = {
  title: 'Formation en Transformation Organisationnelle - Mon Site de Leadership',
  description: 'Accompagnez votre organisation dans les changements majeurs et assurez une transition réussie vers l\'avenir.',
};

export default function FormationOrganisationnellePage() {
  const includedFeatures = [
    "Stratégies de conduite du changement",
    "Développement d'une culture d'innovation",
    "Gestion de projets de transformation complexes",
    "Leadership en période de crise",
    "Optimisation des processus et de l'efficience",
    "Mesure de l'impact de la transformation",
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Formation en Transformation Organisationnelle</h1>
          <p className="text-xl text-gray-700">Accompagnez votre organisation dans les changements majeurs et assurez une transition réussie.</p>
        </header>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Notre Approche :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                La transformation organisationnelle est un défi complexe. Nos formations offrent aux leaders et aux équipes les outils et les cadres nécessaires pour naviguer ces périodes de changement, minimiser les résistances et maximiser l'adhésion pour une réussite durable.
              </p>
              <FeatureList items={includedFeatures} />
            </div>
            <div>
              {/* Placeholder pour une image pertinente */}
              <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
                {/* <Image src="/images/formation-organisationnelle.jpg" alt="Formation Transformation Organisationnelle" width={400} height={256} className="rounded-md" /> */}
                [Image Transformation Organisationnelle]
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-700 text-white rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Pilotez le Changement avec Maîtrise !</h2>
          <p className="text-lg mb-6">
            Équipez-vous pour diriger des transformations réussies et propulser votre organisation vers l'avenir.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors text-lg">
            Nous Contacter
          </Link>
        </section>
      </div>
    </div>
  );
}