// Votre fichier Clients.jsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

import AfgbankImage from "@/public/afgbank.png";
import UnescoImage from "@/public/unesco1.png";
import SEEGImage from "@/public/SEEG_logo.jpg";
import UE1Image from "@/public/UE1.avif";
import TrianonImage from "@/public/trianonblanc.png";
import banquemondialeImage from "@/public/banquemondiale.png";
import OrabankImage from "@/public/orabank2.jpeg";

export function Clients() {
  const testimonials = [
    {
      image: AfgbankImage,
    },
    {
      image: banquemondialeImage
    },
    {
      image: UnescoImage,
    },
    {
        image: OrabankImage,

    },
    {
        image: SEEGImage,
    },
    {
        image: TrianonImage,
    },
    {
        image: UE1Image,
    },
  ];

  return (
    <div
      className="min-h-[20rem] sm:min-h-[25rem] md:min-h-[30rem] rounded-md flex flex-col antialiased py-12 sm:py-16 md:py-20">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 flex justify-center text-center text-[#2E7D32]">Ils nous ont fait confiance</h3>
      <div className="items-start justify-start relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
  );
}