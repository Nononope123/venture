
import Head from 'next/head';
import BookCard from '@/components/ui/bookcard'; 

export default function LivresRecommandes() { 
  const recommendedBooks = [
    {
      id: 1,
      title: "Les 21 Lois Irréfutables du Leadership",
      author: "John C. Maxwell",
      description: "Le livre de référence pour comprendre les principes fondamentaux du leadership efficace.",
    },
    {
      id: 2,
      title: "Les 7 Habitudes des Gens Efficaces",
      author: "Stephen R. Covey",
      description: "Principes universels pour l'efficacité personnelle et professionnelle.",
      link: "https://example.com/livre3" 
    },
    {
      id: 3,
      title: "La psychologie de l'argent",
      author: "Morgan Housel",
      description: "Principes universels pour l'efficacité personnelle et professionnelle.",
      link: "https://example.com/livre3" 
    },
    {
      id: 4,
      title: "Atomic Habits (Un rien peut tout changer)",
      author: "James Clear",
      description: "Le guide ultime pour créer de bonnes habitudes et éliminer les mauvaises.",
    },
    {
      id: 5,
      title: "L'art de l'essentiel",
      author: "Greg McKeown",
      description: "Ce livre vous aide à identifier ce qui est vraiment essentiel et à éliminer le reste pour maximiser votre impact et votre satisfaction.",
    },
    {
      id: 6,
      title: "Thinking, Fast and Slow (Système 1 / Système 2 : Les deux vitesses de la pensée) ",
      author: "Daniel Kahneman",
      description: " Un prix Nobel d'économie qui explore les deux systèmes de pensée qui guident nos décisions : l'un rapide et intuitif, l'autre lent et réfléchi.",
    },


  ];

  return (
    <div className="min-h-screen bg-[#C8E6C9] py-10">
      <main className="container mx-auto px-4">

        <section className="mt-20">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Livres Recommandés</h2>
            <p className="text-lg text-gray-600">Ma sélection de livres incontournables sur le leadership</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedBooks.map(book => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}