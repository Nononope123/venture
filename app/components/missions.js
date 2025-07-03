import React from 'react';

export default function Missions() {
  return (
    <div className="bg-[#C8E6C9] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center space-y-4 mb-16">
            <h2 className="md:text-5xl font-bold tracking-tight text-white sm:text-4xl">Nos Missions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative rounded-2xl bg-gray-50 p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.5-.5 1.39-.5 1.89.5L21.75 12M4.5 9.75v10.125c0 .857.714 1.563 1.5 1.563h13.5c.786 0 1.5-.706 1.5-1.563V9.75M4.5 9.75c0-.242.17-.482.485-.687l4.5-4.5c.5-.5 1.25-.5 1.75 0l4.5 4.5c.315.205.485.445.485.687" />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-base text-gray-700">Accompagner les dirigeants et les équipes dans l’atteinte d’une performance optimale et durable.</p>
            </div>

            <div className="relative rounded-2xl bg-gray-50 p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.125h15.003m-15.003-5.857a9.768 9.768 0 016.016-4.089m-6.016 4.089a9.768 9.768 0 006.016 4.089m-15.003-5.857a9.768 9.768 0 01-2.665.318m2.665-.318l-3.477-.318m6.708 3.395l-3.478 3.395m0-6.79l3.478-3.395m-3.478 3.395l6.709-3.395M12 3.75l-8.71 8.71a12.025 12.025 0 001.72 7.78m15.003-10.134l-8.71-8.71A12.025 12.025 0 0120.21 20.25" />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-base text-gray-700">Faire émerger des leaders transformationnels, capables de guider leurs équipes et leurs entreprises vers plus de cohérence, de performance et de croissance durable.</p>
            </div>

            <div className="relative rounded-2xl bg-gray-50 p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V17M15 11V17M11 5V17M5 7a2 2 0 012-2h10a2 2 0 012 2v2H5V7z" />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-base text-gray-700">Former et accompagner les employés, cadres et dirigeants à travers des programmes de montée en compétences, de leadership et de coaching exécutif.</p>
            </div>

            <div className="relative rounded-2xl bg-gray-50 p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V8.25a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v4.5m-15 3v4.5a2.25 2.25 0 012.25 2.25h15a2.25 2.25 0 012.25-2.25V15.75m-15 3l-3-3m0 6l3-3" />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-base text-gray-700">Aider les entreprises à optimiser leur structure interne, conduire le changement et renforcer la culture d’entreprise, en mettant l’accent sur le leadership transformationnel et l’intelligence collective.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}