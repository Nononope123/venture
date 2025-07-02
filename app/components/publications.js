// app/publications/page.js
import ArticleCard from '@/components/ui/articlecard'; 
import BookCard from '@/components/ui/bookcard'; 
import Link from "next/link"     

export const metadata = {
  title: 'Nos Publications - Mon Site de Leadership',
  description: 'Découvrez nos articles récents et les livres recommandés pour développer votre leadership.',
};

export default function Publications() {
  const articles = [
    {
      id: 1,
      title: "Les 5 Qualités Essentielles d'un Leader Transformationnel",
      description: "Découvrez les caractéristiques qui distinguent les vrais leaders et comment les développer pour transformer votre organisation.",
      tag: "Leadership",
      readTime: 5,
      link: "/blog/articles/leader-transformationnel",
    },
    {
      id: 2,
      title: "Intelligence Émotionnelle : La Clé du Leadership Moderne",
      description: "Développez votre intelligence émotionnelle pour mieux communiquer, motiver et diriger vos équipes.",
      tag: "Développement Personnel",
      readTime: 7,
      link: "/blog/articles/intelligence-emotionnelle",
    },
    {
      id: 3,
      title: "Conduire le Changement : Stratégies et Bonnes Pratiques",
      description: "Les étapes clés pour accompagner votre organisation dans les transitions et transformations importantes.",
      tag: "Transformation",
      readTime: 6,
      link: "/blog/articles/conduire-changement",
    },
    {
      id: 4,
      title: "La Communication Positive au Service du Leadership",
      description: "Techniques de communication pour créer un environnement de travail positif et mobiliser vos équipes.",
      tag: "Communication",
      readTime: 4,
      link: "/blog/articles/communication-positive",
    },
  ];

  const recommendedBooks = [
    {
      id: 1,
      title: "Les 21 Lois Irréfutables du Leadership",
      author: "John C. Maxwell",
      description: "Le livre de référence pour comprendre les principes fondamentaux du leadership efficace.",
      link: "https://example.com/livre1"
    },
    {
      id: 2,
      title: "L'Intelligence Émotionnelle",
      author: "Daniel Coleman",
      description: "Un ouvrage incontournable pour développer sa conscience émotionnelle et ses relations.",
      link: "https://example.com/livre2"
    },
    {
      id: 3,
      title: "Les 7 Habitudes des Gens Efficaces",
      author: "Stephen R. Covey",
      description: "Principes universels pour l'efficacité personnelle et professionnelle.",
      link: "https://example.com/livre3"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Nos Publications</h1>
          <p className="text-xl text-gray-700">Explorez nos ressources pour enrichir vos connaissances en leadership.</p>
        </header>

        {/* Section Articles */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Articles Récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          {/* Optionnel: Bouton pour voir tous les articles si vous avez une page blog dédiée */}
          <div className="text-center mt-12">
            <Link href="/blog/articles" className="inline-block bg-green-500 text-white py-3 px-8 rounded-md font-semibold hover:bg-green-600 transition-colors text-lg">
              Voir tous les articles
            </Link>
          </div>
        </section>

        {/* Section Livres Recommandés */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Livres Recommandés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedBooks.map(book => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
          {/* Optionnel: Bouton pour voir tous les livres si vous avez une page livres dédiée */}
          <div className="text-center mt-12">
            <Link href="@/livres/page" className="inline-block bg-green-500 text-white py-3 px-8 rounded-md font-semibold hover:bg-green-600 transition-colors text-lg">
              Voir plus de livres
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}