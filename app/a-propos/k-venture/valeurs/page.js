"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from 'react';
import { Eye } from "lucide-react";


function Valeurs() {
  return (
    <div className="flex justify-center items-center py-10 md:py-20"> 
      <motion.div
        className="bg-cover md:w-[80%] rounded-md bg-center p-5"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-[#388E3C] flex flex-col p-5 md:p-10 rounded-md gap-8 bg-opacity-25"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col gap-2 xl:w-[50%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-white font-bold text-3xl mb-5 text-justify">
            Prêt à transformer votre leadership et à optimiser la performance de votre organisation ?
            </h1>
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="info@ecmac-gabon.org"
              className="px-6 py-3 flex justify-center items-center gap-2 text-[#419b60] bg-white hover:bg-white/80 rounded-md shadow-lg transition-colors duration-300"
            >
            <Icon className="text-xl" icon="line-md:email-twotone" />
            Nous contacter
            </a>
            <a
              href="+24166546874"
              className="px-6 flex justify-center items-center gap-2 py-3 text-white bg-[#A4DE02] hover:bg-[#0e013e] rounded-md shadow-lg transition-colors duration-300"
            >
            <Eye className="w-4 h-4 mr-1 " />
            Voir nos services
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div> 
  )
}

export default Valeurs