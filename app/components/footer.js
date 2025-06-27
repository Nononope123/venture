"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const actualites = [
    {
      title: "Bonne journée nationale de la femme",
      date: "7 Mars, 2024",
      imgSrc: "/femme.jpg",
      link: "actualites.php",
    },
    {
      title: "La communauté des ECMACIENS",
      date: "09 Juillet, 2024",
      imgSrc: "/pays.jpg",
      link: "actualites.php",
    },
  ];

  const aboutLinks = [
    { text: "Accueil", href: "#" },
    { text: "À propos", href: "/" },
    { text: "Services", href: "/" },
    { text: "Blog", href: "/" },
    { text: "Contact", href: "/" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/Kventureconseil",
      icon: <Icon className="text-xl text-white" icon="ri:facebook-fill" className="text-black" />,
    },
    {
      href: "#",
      icon: (
        <Icon className="text-xl text-white" icon="mingcute:instagram-line" className="text-black"/>
      ),
    },
    {
      href: "#",
      icon: <Icon className="text-xl text-white" icon="ri:youtube-fill" className="text-black"/>,
    },
    {
      href: "#",
      icon: <Icon className="text-xl text-white" icon="uil:linkedin" className="text-black"/>,
    },
  ];

  const contactDetails = [
    {
      icon: <Icon className="text-xl" icon="line-md:phone-call-loop" />,
      content: (
        <span>
          <a href="tel:+24166546874">+241 XX XX XX XX</a>
          <br />
          <a href="tel:+241283188">+241 XX XX XX XX</a>
        </span>
      ),
    },
    {
      icon: <Icon className="text-xl" icon="line-md:email-twotone" />,
      content: <a href="mailto:info@ecmac-gabon.org">kventure@exemple.com</a>,
    },
    {
      icon: <Icon icon="ph:map-pin-duotone" />,
      content: (
        <span>
          Quartier Ancien sobraga
          <br />
          Libreville, Gabon
        </span>
      ),
    },
  ];

  return (
    <footer className="bg-[#F1F8E9] ">
      <div className="container p-5 md:py-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section A propos */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">À propos de nous</h2>
            <p>
              Bienvenue à K-venture
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white hover:text-blue-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section Nos liens */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Nos liens</h2>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-400">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Section Contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Nous contacter</h2>
            <ul className="space-y-4">
              {contactDetails.map((detail, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="text-xl">{detail.icon}</div>
                  <div>{detail.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-10 py-5 border-t flex flex-col md:flex-row gap-6 justify-between items-center bg-[#51be78] border-gray-700 text-center text-sm">
        <Image
          src="/logo.png"
          alt="k-venture"
          width={50}
          height={30}
        />
        <p>
          Copyright &copy; {currentYear}{" "}
          <a
            href=""
            className="text-blue-900 hover:underline"
          >
            Aurel NTSAME
          </a>{" "}
          . <span className="font-semibold">K-venture</span> Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
