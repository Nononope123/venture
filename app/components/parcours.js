import React from 'react';

export function Parcours() {
  const initiatives = [
    {
      year: "2013",
      title: "Ogooué Labs Gabon",
      description: "Création de l'un des premiers incubateurs et espaces de coworking à Libreville",
    },
    {
      year: "2018",
      title: "École 241",
      description: "Lancement du programme de formation aux métiers du numérique",
    },
    {
      year: "2020",
      title: "École 241 business",
      description: "Lancement du programme de formation aux métiers du numérique",
    },
    {
      year: "2021",
      title: "Start X 241",
      description: "Programme panafricain d'accelération de start-up technologiques.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-2">Parcours & Initiatives Clés</h2>
        <p className="text-gray-700 text-lg">Un parcours d'innovation et de transformation</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Ajustement de la grille pour 2 colonnes sur les grands écrans */}
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-start border border-gray-200" // p-8 pour plus de padding
          >
            <div className="flex items-center mb-4"> {/* Conteneur pour la pastille et le titre */}
              {/* Pastille Année - Maintenant circulaire et interne */}
              <div className="bg-green-600 text-white font-bold text-sm h-15 w-15 flex items-center justify-center rounded-full shrink-0 mr-4">
                {initiative.year === "aujourd'hui" ? (
                  <span className="text-[10px] leading-none text-center">aujourd'<br/>hui</span> // Taille de police plus petite pour "aujourd'hui" sur deux lignes
                ) : (
                  initiative.year
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{initiative.title}</h3> {/* Titre à côté de la pastille */}
            </div>
            <p className="text-gray-600 text-sm pl-19 -mt-5">{initiative.description}</p> {/* Description en dessous */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Parcours;