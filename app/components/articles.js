// app/page.js
import ArticleCard from '@/components/ui/articlecard';

export const metadata = {
  title: 'Articles Récents',
  description: 'Conseils pratiques et insights sur le leadership',
};

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Les 5 Qualités Essentielles d'un Leader Transformationnel",
      description: "Découvrez les caractéristiques qui distinguent les vrais leaders et comment les développer pour transformer votre organisation.",
      tag: "Leadership",
      readTime: 5,
      link: "/articles/leader-transformationnel",
    },
    {
      id: 2,
      title: "Intelligence Émotionnelle : La Clé du Leadership Moderne",
      description: "Développez votre intelligence émotionnelle pour mieux communiquer, motiver et diriger vos équipes.",
      tag: "Développement Personnel",
      readTime: 7,
      link: "/articles/intelligence-emotionnelle",
    },
    {
      id: 3,
      title: "Conduire le Changement : Stratégies et Bonnes Pratiques",
      description: "Les étapes clés pour accompagner votre organisation dans les transitions et transformations importantes.",
      tag: "Transformation",
      readTime: 6,
      link: "/articles/conduire-changement",
    },
    {
      id: 4,
      title: "La Communication Positive au Service du Leadership",
      description: "Techniques de communication pour créer un environnement de travail positif et mobiliser vos équipes.",
      tag: "Communication",
      readTime: 4,
      link: "/articles/communication-positive",
    },
    {
      id: 5,
      title: "Développer la Confiance en Soi pour Mieux Leader",
      description: "Comment renforcer votre confiance personnelle pour exercer un leadership authentique et inspirant.",
      tag: "Développement Personnel",
      readTime: 5,
      link: "/articles/confiance-en-soi",
    },
    {
      id: 6,
      title: "Les Erreurs de Leadership à Éviter Absolument",
      description: "Identifiez et évitez les pièges courants qui peuvent nuire à votre efficacité en tant que leader.",
      tag: "Leadership",
      readTime: 6,
      link: "/articles/erreurs-leadership",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <main className="container mx-auto px-4">
        <div className="">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Articles Récents</h2>
          <p className="text-lg text-gray-600">Conseils pratiques et insights sur le leadership</p>
          </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              tag={article.tag}
              readTime={article.readTime}
              link={article.link}
            />
          ))}
        </section>
      </main>

    </div>
  );
}