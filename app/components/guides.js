import Link from "next/link"

export const metadata = {
  title: 'Guides Thématiques - Approfondissez Votre Leadership',
  description: 'Explorez nos guides détaillés classés par thèmes pour un apprentissage ciblé.',
};

export default function GuidesThematiquesPage() {
  const thematicGuides = [
    {
      id: 1,
      title: "Guide sur la Communication d'Impact",
      description: "Techniques avancées pour une communication claire et persuasive en toute situation.",
      theme: "Communication",
      format: "PDF",
      accessLink: "#" 
    },
    {
      id: 2,
      title: "Gérer les Conflits en Équipe",
      description: "Stratégies efficaces pour désamorcer les tensions et transformer les conflits en opportunités.",
      theme: "Gestion d'Équipe",
      format: "Vidéo",
      accessLink: "#"
    },
    {
      id: 3,
      title: "Leadership Innovant à l'Ère Numérique",
      description: "Comment adapter votre style de leadership pour stimuler l'innovation et la transformation digitale.",
      theme: "Transformation Digitale",
      format: "E-book",
      accessLink: "#"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Guides Thématiques</h1>
          <p className="text-xl text-gray-700">Approfondissez vos connaissances avec nos guides détaillés, classés par thèmes.</p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Nos Thèmes Actuels :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thematicGuides.map(guide => (
              <div key={guide.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>Thème: <span className="font-semibold">{guide.theme}</span></span>
                  <span>Format: <span className="font-semibold">{guide.format}</span></span>
                </div>
                <Link href={guide.accessLink} className="inline-block bg-green-500 text-white py-2 px-5 rounded-md font-semibold hover:bg-green-600 transition-colors">
                  Accéder au Guide
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-gray-600">
            <p>De nouveaux guides sont régulièrement ajoutés. Restez connecté !</p>
          </div>
        </section>
      </div>
    </div>
  );
}