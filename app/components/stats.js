import React from 'react';

export default function StatsSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">K-venture c'est ...</h2>
            <p className="text-lg leading-8 text-gray-300">
                K-Venture est un cabinet de coaching et de conseil dirigé par Sylvère Boussamba, certifié John C.
                Maxwell, qui accompagne les dirigeants et les équipes dans l’atteinte d’une performance optimale et
                durable.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">Années d&apos;expérience</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">8+</dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">Organisations locales et internationales soutenues </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">20+</dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">Retours clients positifs</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">80+</dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">Entreprises et leaders transformés</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">100+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}