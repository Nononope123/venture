"use client";

import React from 'react';
import { motion } from 'framer-motion'; 
import { Icon } from "@iconify/react"; 
import { Eye } from "lucide-react"; 


export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{ backgroundImage: "url('/bgv.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center text-white py-20 sm:py-32 pb-20 ">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 mt-20">
              Bienvenue chez K-venture
            </h1>

            <motion.p
              className="text-xl sm:text-2xl leading-8 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              Libérez votre potentiel et faites évoluer votre organisation grâce à notre coaching et nos conseils
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-34"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="mailto:info@ecmac-gabon.org"
                className="px-6 py-3 flex justify-center items-center gap-2 text-[#419b60] bg-white hover:bg-white/90 rounded-md shadow-lg transition-colors duration-300 font-semibold"
              >
                <Icon className="text-xl" icon="line-md:email-twotone" />
                Nous contacter
              </a>
              <a
                href="/nos-services"
                className="px-6 flex justify-center items-center gap-2 py-3 text-white bg-[#4CAF50] hover:bg-[#1E5631] rounded-md shadow-lg transition-colors duration-300 font-semibold"
              >
                <Eye className="w-4 h-4 mr-1" />
                Voir nos services
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </>
  );
}