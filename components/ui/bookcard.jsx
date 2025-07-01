import React from 'react';

const BookCard = ({ title, author, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block"> {/* Ajout de target et rel pour les liens externes */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-green-500 transition-colors duration-300 h-full">
        {/* Icône du livre - Vous pouvez la remplacer par une image ou une icône réelle */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
          {/* Un simple SVG pour simuler une icône de livre */}
          <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.474 9.113 5 7.42 5c-1.63 0-3.23.474-4.58 1.253M12 6.253C13.168 5.474 14.887 5 16.58 5c1.63 0 3.23.474 4.58 1.253M12 6.253v13m0-13c-.958-0.686-2.004-1.127-3.08-1.328M12 6.253c.958-0.686 2.004-1.127 3.08-1.328M12 6.253v13"></path>
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">par {author}</p>
        <p className="text-gray-600 text-base flex-grow">{description}</p>
      </div>
    </a>
  );
};

export default BookCard;