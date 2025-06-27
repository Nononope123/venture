// components/ui/infinite-moving-cards.jsx
// N'oubliez pas le "use client"; en haut si ce n'est pas déjà fait
"use client";

import { cn } from "@/lib/utils"; // Assurez-vous que ce chemin est correct
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Importez le composant Image de Next.js

export const InfiniteMovingCards = ({
  items, // Vos items qui ont { name, title, image }
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  overflow-hidden",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            // Classes Tailwind pour centrer et styliser la carte
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]
                       flex flex-col items-center justify-center text-center"
            key={item.name || idx}> {/* Utiliser idx comme fallback si name n'est pas toujours unique */}
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>

              {/* Affichage de l'image si elle existe */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name || "Item image"} // Utiliser item.name comme alt
                  width={200}  // Largeur de l'image en pixels
                  height={100} // Hauteur de l'image en pixels
                  className=" object-cover mb-4" // Classes Tailwind pour le style de l'image
                />
              )}

              {/* Affichage du nom */}
              <div className="relative z-20 flex flex-col items-center">
                  <span
                      className="text-lg leading-[1.6] font-semibold text-neutral-800 dark:text-gray-100"
                  >
                      {item.name}
                  </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};