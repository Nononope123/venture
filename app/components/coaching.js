import React from 'react';

export function Coaching() {
  const coachingServices = [
    {
      title: "Coaching Individuel sur Mesure",
      description: "Accompagnement personnalisé pour développer votre leadership, clarifier vos objectifs et maximiser votre potentiel.",
      includes: [
        "Sessions 1:1 personnalisées",
        "Plan de développement sur mesure",
        "Suivi régulier des progrès",
        "Outils d'auto-évaluation",
      ],
      duration: "Durée: 3-6 mois",
      priceType: "Sur devis", // Indicateur pour le texte du bouton
    },
    {
      title: "Coaching d'Équipe",
      description: "Transformation collective pour améliorer la cohésion, la communication et la performance de votre équipe.",
      includes: [
        "Diagnostic d'équipe",
        "Ateliers de cohésion",
        "Résolution de conflits",
        "Communication efficace",
      ],
      duration: "Durée: 2-4 mois",
      priceType: "Sur devis",
    },
    {
      title: "Coaching Exécutif",
      description: "Accompagnement stratégique pour les dirigeants et cadres supérieurs dans leurs défis de leadership.",
      includes: [
        "Vision stratégique",
        "Prise de décision",
        "Gestion du stress",
        "Influence et impact",
      ],
      duration: "Durée: 6-12 mois",
      priceType: "Sur devis",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16"> {/* Conteneur global de la section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-2">Services de Coaching</h2>
        <p className="text-gray-700 text-lg">Accompagnement personnalisé pour votre développement</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coachingServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between border border-gray-200"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>

              <p className="text-gray-800 font-semibold mb-2">Inclus :</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mb-6 ml-4 space-y-1">
                {service.includes.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-gray-500 text-sm">{service.duration}</span>
              <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 text-sm">
                {service.priceType === "Sur devis" ? "Sur devis" : "Demander un Devis"}
                {/* Le libellé du bouton est ici "Sur devis" d'après votre capture, mais j'ai laissé l'option si vous voulez "Demander un Devis" pour d'autres cas */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Coaching;