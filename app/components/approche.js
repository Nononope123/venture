import React from 'react';

export function Valeurs() {
  const valeurs = [
    {
      icon: "T",
      title: "Transformation",
      description: "Nous avons pour ambition de faire émerger des leaders transformationnels, capables de guider leurs équipes et leurs entreprises vers plus de cohérence, de performance et de croissance durable.",
    },
    {
      icon: "M",
      title: "Motivation",
      description: "La motivation est l'un des piliers pour la montée en compétence et l'accomplisement de ses objectifs.",
    },
    {
      icon: "L",
      title: "Leadership",
      description: "Nous croyons qu’un leadership fort, humain et visionnaire est le moteur d’une organisation performante.",
    },
    {
      icon: "L",
      title: "Leadership",
      description: "Nous croyons qu’un leadership fort, humain et visionnaire est le moteur d’une organisation performante.",
    },

  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-2">Nos valeurs</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Ajustement de la grille pour 2 colonnes sur les grands écrans */}
        {valeurs.map((valeurs, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-start border border-gray-200" // p-8 pour plus de padding
          >
            <div className="flex items-center mb-4"> {/* Conteneur pour la pastille et le titre */}
              <div className="bg-green-600 text-white font-bold text-sm h-15 w-15 flex items-center justify-center rounded-full shrink-0 mr-4">
                  {valeurs.letter}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{valeurs.title}</h3> {/* Titre à côté de la pastille */}
            </div>
            <p className="text-gray-600 text-sm pl-19 -mt-5">{valeurs.description}</p> {/* Description en dessous */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Valeurs;