// Votre fichier Clients.jsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

import AfgbankImage from "@/public/afgbank.png";
import UnescoImage from "@/public/unesco.png";
import SEEGImage from "@/public/SEEG_logo.jpg";
import UE1Image from "@/public/UE1.png";
import TrianonImage from "@/public/trianonblanc.png";
import banquemondialeImage from "@/public/banquemondiale.png";
import OrabankImage from "@/public/orabank2.jpeg";

export function Clients() {
  const testimonials = [
    {
      name: "AFG BANK",
      title: "Bank",
      image: AfgbankImage,
    },
    {
      name: "BANQUE MONDIALE",
      title: "Tech Firm",
      image: banquemondialeImage
    },
    {
      name: "UNESCO",
      title: "Retail",
      image: UnescoImage,
    },
    {
        name: "ORABANK",
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
        name: "UNION EUROPÉENNE",
        title: "Consulting",
        image: UE1Image,
    },
  ];

  return (
    <div
      className="h-[25rem] rounded-md flex flex-col antialiased bg-[#1E5631] items-center justify-start relative overflow-hidden">
      <h3 className="text-4xl font-bold text-white mb-10 flex justify-center">Ils nous ont fait confiance</h3>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}