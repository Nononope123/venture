// components/EventCard.js (ou .jsx / .tsx)
import React from 'react';
import Image from 'next/image'; // Optimise les images pour Next.js
import Link from 'next/link';

const EventCard = ({ title, date, time, price, description, imageUrl, link, bookTitle, authorName }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill" // Remplace 'layout="fill"' pour Next.js 13+ par 'fill'
            objectFit="cover" // Remplace 'objectFit="cover"' par 'style={{ objectFit: "cover" }}'
            className="rounded-t-lg"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        {bookTitle && authorName && (
          <p className="text-sm text-gray-600 mb-2">
            Livre de la semaine : <span className="font-semibold text-green-700">{bookTitle}</span> par {authorName}
          </p>
        )}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M16 11h.01M9 15h.01M15 15h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>{date} à {time}</span>
        </div>
        <p className="text-green-700 font-bold mb-4">
            {price === 0 ? 'GRATUIT' : `${price.toLocaleString('fr-FR')}F`}
            {price > 0 && <span className="text-gray-500 text-sm font-normal ml-2">(Entrevue + Livre)</span>}
        </p>
        <p className="text-gray-600 text-base mb-4 flex-grow">
          {description}
        </p>
        {link && (
          <Link href={link} className="inline-block bg-green-500 text-white py-2 px-5 rounded-md font-semibold text-center hover:bg-green-600 transition-colors self-start mt-auto">
            Participer
          </Link>
        )}
      </div>
    </div>
  );
};

export default EventCard;