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
      className="h-[20rem] rounded-md flex flex-col antialiased">
      <h3 className="text-4xl font-bold mb-10 flex justify-center mt-10 text-[#2E7D32]">Ils nous ont fait confiance</h3>
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