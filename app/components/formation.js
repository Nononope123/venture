import React from 'react';

export function Formation() {
  const trainings = [
    {
      title: "Formation Leadership Stratégique",
      description: "Développez les compétences essentielles pour diriger avec vision et impact.",
      modules: [
        "Les 21 lois du leadership",
        "Vision et stratégie",
        "Influence et persuasion",
        "Gestion du changement",
      ],
      duration: "2-3 jours",
    },
    {
      title: "Intelligence Émotionnelle au Travail",
      description: "Maîtrisez vos émotions et celles des autres pour une communication plus efficace.",
      modules: [
        "Conscience de soi",
        "Autorégulation",
        "Empathie",
        "Compétences sociales",
      ],
      duration: "1-2 jours",
    },
    {
      title: "Communication Managériale",
      description: "Apprenez à communiquer avec impact et à motiver vos équipes.",
      modules: [
        "Communication assertive",
        "Feedback constructif",
        "Motivation d'équipe",
        "Gestion des conflits",
      ],
      duration: "1-2 jours",
    },
  ];

  return (
    <section className="bg-[#C8E6C9] py-16 px-4 md:px-8 lg:px-16"> {/* Conteneur global de la section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-2">Formations Professionnelles</h2>
        <p className="text-gray-700 text-lg">Programmes de formation pour développer vos compétences</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between border border-gray-200"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{training.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{training.description}</p>

              <p className="text-gray-800 font-semibold mb-2">Modules :</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mb-6 ml-4 space-y-1">
                {training.modules.map((module, modIndex) => (
                  <li key={modIndex}>{module}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-gray-500 text-sm">{training.duration}</span>
              <a href="/contact" className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 text-sm">
                S&apos;inscrire
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Formation;