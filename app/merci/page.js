// app/merci/page.js

import Link from "next/link"


export default function MerciPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Merci pour votre message !</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">Nous vous répondrons dans les plus brefs délais.</p>
      <Link href="/" className="mt-8 px-6 py-3 bg-[#A4DE02] text-white rounded-lg hover:bg-blue-600 transition-colors">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}