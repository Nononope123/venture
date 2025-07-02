import React from 'react';

const FeatureList = ({ items, iconColorClass = "text-green-500" }) => {
  return (
    <ul className="list-none p-0 m-0">
      {items.map((item, index) => (
        <li key={index} className="flex items-start mb-2 last:mb-0">
          {/* Icône de coche (checkmark) */}
          <svg
            className={`w-5 h-5 mr-2 flex-shrink-0 ${iconColorClass}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;