"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link"


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const aboutLinks = [
    { text: "Accueil", href: "#" },
    { text: "À propos", href: "/a-propos" },
    { text: "Services", href: "/services" },
    { text: "Ressources", href: "/ressources" },
    { text: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/Kventureconseil",
      icon: <Icon className="text-xl text-black" icon="ri:facebook-fill" />,
    },
    {
      href: "#",
      icon: (
        <Icon className="text-xl text-black" icon="mingcute:instagram-line" />
      ),
    },
    {
      href: "#",
      icon: <Icon className="text-xl text-black" icon="ri:youtube-fill" />,
    },
    {
      href: "#",
      icon: <Icon className="text-xl text-black" icon="uil:linkedin" />,
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
    <footer className="bg-[#F1F8E9] items-center">
      <div className="container flex justify-center items-center px-5 md:py-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:text-left">
          {/* Section A propos */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">À propos de nous</h2>
            <p>
              Bienvenue chez K-venture
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white hover:text-green-800"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Section Nos liens */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Nos liens</h2>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-green-800">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Section Contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Nous contacter</h2>
            <ul className="space-y-4">
              {contactDetails.map((detail, index) => (
                <li key={index} className="flex items-center justify-center sm:justify-start space-x-4">
                  <div className="text-xl">{detail.icon}</div>
                  <div>{detail.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-10 py-5 border-t flex flex-col md:flex-row gap-6 justify-between items-center bg-[#388e3c] border-gray-700 text-center text-sm">
        <Image
          src="/logo.png"
          alt="k-venture"
          width={50}
          height={30}
        />
        <p className="text-white">
          Copyright &copy; {currentYear}{" "}
          <Link
            href=""
            className="text-blue-900 hover:underline"
          >
            Aurel NTSAME
          </Link>{" "}
          . <span className="font-semibold">K-venture</span> Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;