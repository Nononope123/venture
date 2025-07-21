"use client";

import React from 'react';
import { motion } from 'framer-motion'; 
import { Icon } from "@iconify/react"; 
import { Eye } from "lucide-react"; 
import Link from "next/link"



export default function Heroressources() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{ backgroundImage: "url('/webographie.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center text-white py-20 sm:py-32 pb-20 ">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-3 mt-20">
              Découvrez notre webographie 
            </h1>

            <motion.p
              className="text-xl sm:text-2xl leading-8 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
             Accédez à nos ressources pour booster votre croissance.
            </motion.p>
          </div>
        </div>

      </div>
    </>
  );
}