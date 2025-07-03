import React from 'react';
import Image from 'next/image';

export function Biographie() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8  w-full">

      <div className="max-w-6xl mx-auto bg-[#E6F3E6] rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        <div className="p-8 md:w-2/3 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Sylvère Boussamba</h1>
          <h2 className="text-lg text-green-700 font-semibold mb-6">
            Coach Certifié John C. Maxwell | Entrepreneur | Mentor Tony Elumelu
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Entrepreneur visionnaire, formateur et coach certifié en leadership par The John
            Maxwell Company, Sylvère Boussamba fusionne passion et détermination pour
            propulser les potentialités technologiques et humaines en Afrique.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Fort de deux décennies d&apos;expérience en informatique dans le secteur privé et d'une
            décennie dans l&apos;entrepreneuriat innovant, il accompagne les dirigeants et organisations vers
            l&apos;excellence depuis plus de 10 ans.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Mentor d&apos;affaires de la fondation Tony Elumelu depuis 2015, il a accompagné des
            institutions prestigieuses comme l'UNESCO, la Banque Mondiale, l'Union Européenne, ainsi
            que des entreprises leaders comme Orabank, AFG Bank, et SEEG.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Autodidacte passionné, il a commencé la programmation à 11 ans et maîtrise aujourd'hui un
            large éventail de compétences numériques et managériales.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-auto">
            <a href="/contact" className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition duration-300">
              Prendre Rendez-vous
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center p-8 bg-[#E6F3E6]">
          <video controls className="w-full h-150 max-w-[400px] object-cover rounded-lg shadow-md" preload="auto" poster="">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Biographie;