import EventCard from '../../components/ui/eventcard';

export default function ActualitesPage() {
  const events = [
    {
      id: 1,
      title: "LECTURE EN LIGNE MASTER MIND",
      description: "Partie 1: 19H-20H / GRATUIT. Partie 2: 20H-21H / UNE ENTREVUE AVEC L'AUTEUR + LIVRE.",
      date: "SAMEDI 14 JUIN 2025",
      time: "19H00",
      price: 30000,
      bookTitle: "LES DAMNÉS DE LA RENTE",
      authorName: "Gabriel NTOUGOU",
      imageUrl: "/atelier1.jpg",
      link: "https://bit.ly/coachsylvereboussamba",
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
      imageUrl: "/atelier2.jpg",
      link: "https://bit.ly/coachsylvereboussamba",
    },
    {
      id: 3,
      title: "LECTURE EN LIGNE MASTER MIND",
      description: "Partie 1: 19H-20H / GRATUIT. Partie 2: 20H-21H / UNE ENTREVUE AVEC L'AUTEUR + LIVRE.",
      date: "SAMEDI 14 JUIN 2025",
      time: "19H00",
      price: 30000,
      bookTitle: "POURQUOI LE GABON NE DECOLLE PAS",
      authorName: "Sylvère BOUSSAMBA",
      imageUrl: "/atelier3.jpg",
      link: "https://bit.ly/coachsylvereboussamba",
    },
  ];

  return (
    <div className="py-10 bg-gray-50">
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