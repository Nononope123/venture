"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Keep motion for text and button animations
import { Icon } from "@iconify/react"; // Keep Icon for contact button
import { Eye } from "lucide-react"; // Keep Eye for services button
import Link from "next/link"

export default function Message() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-[#1E5631]">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center text-white py-20 sm:py-32 pb-20 ">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 mt-30">
              Prêt à travailler avec nous ?
            </h1>
            <motion.p
              className="text-xl sm:text-2xl leading-8 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
>
                Rejoignez les leaders qui ont choisi K-venture pour développer leur potentiel et leurs organisations
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-34 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="mailto:info@ecmac-gabon.org"
                className="px-6 py-3 flex justify-center items-center gap-2 text-[#419b60] bg-white hover:bg-white/80 rounded-md shadow-lg transition-colors duration-300 font-semibold"
              >
                <Icon className="text-xl" icon="line-md:email-twotone" />
                Nous contacter
              </Link>
              <Link
                href="/nos-services"
                className="px-6 flex justify-center items-center gap-2 py-3 text-white bg-[#A4DE02] hover:bg-[#8bc340] rounded-md shadow-lg transition-colors duration-300 font-semibold"
              >
                <Eye className="w-4 h-4 mr-1" />
                Voir nos services
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </>
  );
}