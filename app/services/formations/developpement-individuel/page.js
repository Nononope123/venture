import FeatureList from '@/components/ui/featurelist';
import Link from 'next/link';


export const metadata = {
  title: 'Formation en Développement Individuel - Mon Site de Leadership',
  description: 'Nos formations personnalisées vous aident à renforcer vos compétences clés et à accélérer votre croissance professionnelle.',
};

export default function FormationIndividuelPage() {
  const includedFeatures = [
    "Gestion du temps et des priorités",
    "Développement de l'intelligence émotionnelle",
    "Renforcement de la confiance en soi",
    "Techniques de communication assertive",
    "Développement de la résilience",
    "Plan de carrière et objectifs personnels",
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Formation en Développement Individuel</h1>
          <p className="text-xl text-gray-700">Renforcez vos compétences clés et accélérez votre croissance professionnelle.</p>
        </header>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ce que vous apprendrez :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Ces formations sont conçues pour les individus désireux d'acquérir de nouvelles compétences ou d'affiner celles qu'ils possèdent déjà. Elles sont hautement interactives et centrées sur des outils pratiques pour une application immédiate dans votre vie professionnelle et personnelle.
              </p>
              <FeatureList items={includedFeatures} />
            </div>
            <div>
              {/* Placeholder pour une image pertinente */}
              <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
                {/* <Image src="/images/formation-individuelle.jpg" alt="Formation Développement Individuel" width={400} height={256} className="rounded-md" /> */}
                [Image Formation Individuelle]
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-700 text-white rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Prenez le Contrôle de Votre Potentiel !</h2>
          <p className="text-lg mb-6">
            Investissez en vous-même pour un impact durable sur votre carrière et votre épanouissement.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors text-lg">
            Nous Contacter
          </Link>
        </section>
      </div>
    </div>
  );
}