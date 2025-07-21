import Image from 'next/image';

export default function PhotoGallery() {
  const images = [
    {
      id: 1,
      src: '/galerie1.jpg',
      alt: '',
    },
    {
      id: 2,
      src: '/galerie2.jpg',
      alt: 'Session de coaching individuel',
    },
    {
      id: 3,
      src: '/galerie3.jpg',
      alt: 'Dirigeant en pleine réflexion',
    },
    {
      id: 4,
      src: '/galerie4.jpg',
      alt: 'Séminaire de développement',
    },
    {
      id: 5,
      src: '/CC2.jpg',
      alt: 'Activité de team building',
    },
    {
      id: 6,
      src: '/CC7.jpg',
      alt: 'Coaching de groupe',
    },
    {
      id: 7,
      src: '/bgv.jpg',
      alt: 'Coaching de groupe',
    },

  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="md:text-5xl text-4xl font-bold text-center text-green-700 mb-12">
          Notre Galerie Photo
        </h2>

        {images.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">
            Aucune image disponible pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative w-full h-48 bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-t-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}