import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


const ContactInfoCard = ({ icon, title, details }) => {
  let IconComponent;
  switch (icon) {
    case 'address':
      IconComponent = FaMapMarkerAlt;
      break;
    case 'email':
      IconComponent = FaEnvelope;
      break;
    case 'phone':
      IconComponent = FaPhone;
      break;
    default:
      IconComponent = FaMapMarkerAlt; 
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-4xl text-indigo-600 mb-4">
        <IconComponent />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="text-gray-600 space-y-1">
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCard;