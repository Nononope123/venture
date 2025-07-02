// app/actualites/page.js
import EventCard from '../../components/ui/eventcard'; // Ajustez le chemin si nécessaire

// Metadata pour la page Actualités (App Router)
export const metadata = {
  title: 'Actualités - Nos Masterminds et Événements',
  description: 'Découvrez nos prochaines lectures en ligne et masterminds sur le leadership.',
};

export default function ActualitesPage() {
  const events = [
    {
      id: 1,
      title: "LECTURE EN LIGNE MASTER MIND",
      description: "Partie 1: 19H-20H / GRATUIT. Partie 2: 20H-21H / UNE ENTREVUE AVEC L'AUTEUR + LIVRE.",
      date: "SAMEDI 14 JUIN 2025",
      time: "19H00",
      price: 30000, // En FCFA
      bookTitle: "LES DAMNÉS DE LA RENTE",
      authorName: "Gabriel NTOUGOU",
      imageUrl: "/images/atelier1.jpg", // Chemin relatif vers votre image dans /public
      link: "https://bit.ly/coachsylvereboussamba", // Lien réel du QR code
    },
    {
      id: 2,
      title: "LECTURE EN LIGNE MASTER MIND",
      description: "Partie 1: 19H-20H / GRATUIT. Partie 2: 20H-21H / PRIX : 30.000F UNE ENTREVUE AVEC L'AUTEURE + LIVRE.",
      date: "SAMEDI 24 MAI 2025",
      time: "19H00",
      price: 30000,
      bookTitle: "INVESTIR AU GABON",
      authorName: "Hélène ZOUA-ONDO",
      imageUrl: "/images/atelier2.jpg", // Chemin relatif vers votre image dans /public
      link: "https://bit.ly/coachsylvereboussamba", // Lien réel du QR code
    },
    // Si vous avez plus d'événements, ajoutez-les ici
    {
      id: 3,
      title: "LECTURE EN LIGNE MASTER MIND",
      description: "Partie 1: 19H-20H / GRATUIT. Partie 2: 20H-21H / UNE ENTREVUE AVEC L'AUTEUR + LIVRE.",
      date: "SAMEDI 14 JUIN 2025", // La même date que le premier, si c'est la même session
      time: "19H00",
      price: 30000,
      bookTitle: "POURQUOI LE GABON NE DECOLLE PAS", // Titre du livre visible sur atelier3.jpg
      authorName: "Sylvère BOUSSAMBA", // L'auteur mentionné sur l'image si c'est bien lui
      imageUrl: "/images/atelier3.jpg", // Chemin relatif vers votre image dans /public
      link: "https://bit.ly/coachsylvereboussamba", // Lien réel du QR code
    },
  ];

  return (
    <div className="py-10 bg-gray-50"> {/* Ajout d'un fond clair et padding vertical */}
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Actualités & Événements</h1>
          <p className="text-lg text-gray-600">Ne manquez pas nos prochains masterminds et sessions de lecture en ligne !</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              price={event.price}
              imageUrl={event.imageUrl}
              link={event.link}
              bookTitle={event.bookTitle}
              authorName={event.authorName}
            />
          ))}
        </section>
      </div>
    </div>
  );
}