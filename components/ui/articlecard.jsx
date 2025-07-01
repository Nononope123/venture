
import Link from 'next/link'; // Utilisez next/link pour la navigation côté client

const getTagColors = (tag) => {
  switch (tag.toLowerCase()) {
    case 'leadership':
      return 'bg-green-100 text-green-700'; // bg-d1e7dd text-28a745
    case 'développement personnel':
      return 'bg-orange-100 text-orange-600'; // bg-ffe0b2 text-ff9800
    case 'transformation':
      return 'bg-blue-100 text-blue-700'; // bg-cce5ff text-007bff
    case 'communication':
      return 'bg-red-100 text-red-700'; // bg-f8d7da text-dc3545
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const ArticleCard = ({ title, description, tag, readTime, link }) => {
  const tagColors = getTagColors(tag);

  return (
    <article className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tagColors}`}>
          {tag}
        </span>
        <span className="text-gray-500 text-sm">
          {readTime} min
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-base mb-6 flex-grow">{description}</p>
      <Link href={link} className="inline-block bg-green-500 text-white py-2 px-5 rounded-md font-semibold hover:bg-green-600 transition-colors self-start">
        Lire plus
      </Link>
    </article>
  );
};

export default ArticleCard;