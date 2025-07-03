"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

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
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", animationDirection);
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let animationDuration;
      if (speed === "fast") {
        animationDuration = "20s";
      } else if (speed === "normal") {
        animationDuration = "40s";
      } else {
        animationDuration = "80s";
      }
      containerRef.current.style.setProperty("--animation-duration", animationDuration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
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
            className="relative w-30 max-w-full shrink-0 px-4 py-6 md:w-[300px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]
                       flex flex-col items-center justify-center text-center"
            key={item.name || idx}>
            <blockquote>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name || "Item image"}
                  width={150}
                  height={100}
                  className="object-cover mb-4"
                />
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};