import React from 'react';

export function Valeurs() {
  const valeurs = [
    {
      letter: "T",
      title: "Transformation",
      description: "Nous avons pour ambition de faire émerger des leaders transformationnels, capables de guider leurs équipes et leurs entreprises vers plus de cohérence, de performance et de croissance durable.",
    },
    {
      letter: "M",
      title: "Motivation",
      description: "La motivation est l'un des piliers pour la montée en compétence et l'accomplisement de ses objectifs.",
    },
    {
      letter: "L",
      title: "Leadership",
      description: "Nous croyons qu’un leadership fort, humain et visionnaire est le moteur d’une organisation performante.",
    },
  ];

  return (
    <section className="bg-[#C8E6C9] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-2">Nos valeurs</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Changed to lg:grid-cols-3 */}
        {valeurs.map((valeur, index) => ( // Changed 'valeurs' to 'valeur' for clarity
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-start border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white font-bold text-lg h-12 w-12 flex items-center justify-center rounded-full shrink-0 mr-4"> {/* Adjusted size for better fit */}
                  {valeur.letter}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{valeur.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{valeur.description}</p> {/* Removed unnecessary padding, will align naturally */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Valeurs;