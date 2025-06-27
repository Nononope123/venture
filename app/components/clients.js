"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"; // Assurez-vous que ce chemin est correct
import Image from "next/image"; // Pas strictement nécessaire ici si Image n'est pas utilisé directement

// L'import d'image statique de Next.js
import AfgbankImage from "@/public/afgbank.png";
import UnescoImage from "@/public/unesco.png";
import SEEGImage from "@/public/SEEG_logo.jpg";
import UE1Image from "@/public/UE1.png";
import TrianonImage from "@/public/trianonblanc.png";
import banquemondialeImage from "@/public/banquemondiale.png";
import OrabankImage from "@/public/orabank2.jpeg";

// Assurez-vous que le chemin est correct

export function Clients() {
  const testimonials = [
    {
      name: "Afgbank", 
      title: "Bank",
      image: AfgbankImage,
    },
    {
      name: "Banque mondiale",
      title: "Tech Firm",
      image: banquemondialeImage
    },
    {
      name: "Unesco",
      title: "Retail",
      image: UnescoImage,
    },
    {
        name: "Orabank",
        title: "Services",
        image: OrabankImage,

    },
    {
        name: "SEEG",
        title: "Consulting",
        image: SEEGImage,
    },
    {
        name: "TRIANON",
        title: "Consulting",
        image: TrianonImage,
    },
    {
        name: "Union Européenne",
        title: "Consulting",
        image: UE1Image,
    },

  ];

  return (
    <div
      className="h-[30rem] rounded-md flex flex-col antialiased bg-[#4CAF50] items-center justify-center relative overflow-hidden">
    <h3 className="text-4xl font-bold text-white mb-10">Ils nous ont fait confiance</h3>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

