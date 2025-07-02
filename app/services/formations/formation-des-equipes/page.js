import FeatureList from '@/components/ui/featurelist'; 
import Link from 'next/link';


export const metadata = {
  title: 'Formation des Équipes - Mon Site de Leadership',
  description: 'Renforcez la cohésion, la communication et l\'efficacité de vos équipes grâce à nos formations sur mesure.',
};

export default function FormationEquipesPage() {
  const includedFeatures = [
    "Ateliers collaboratifs et interactifs",
    "Développement de la cohésion d'équipe",
    "Amélioration de la communication interne",
    "Gestion des conflits et résolution de problèmes",
    "Mise en place d'objectifs collectifs clairs",
    "Techniques de feedback constructif",
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Formation des Équipes</h1>
          <p className="text-xl text-gray-700">Renforcez la cohésion, la communication et l'efficacité de vos équipes.</p>
        </header>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Objectifs de la Formation :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Nos formations d'équipes sont conçues pour transformer les groupes en équipes hautement performantes. Nous travaillons sur les dynamiques interpersonnelles, la collaboration et les compétences collectives pour atteindre des objectifs communs de manière plus efficace.
              </p>
              <FeatureList items={includedFeatures} />
            </div>
            <div>
              {/* Placeholder pour une image pertinente */}
              <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
                {/* <Image src="/images/formation-equipes.jpg" alt="Formation des Équipes" width={400} height={256} className="rounded-md" /> */}
                [Image Formation des Équipes]
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-700 text-white rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Investissez dans votre Capital Humain !</h2>
          <p className="text-lg mb-6">
            Développez des équipes unies et performantes, prêtes à relever tous les défis.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors text-lg">
            Nous Contacter
          </Link>
        </section>
      </div>
    </div>
  );
}