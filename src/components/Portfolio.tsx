"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface Portfolio {
  id: number;
  name: string;
  img: string;
  brand: string;
}
const PortfolioData: Portfolio[] = [
  {
    id: 1,
    name: "Interior Solutions Website Design",
    img: "/images/project1.png",
    brand: "brand name",
  },
  {
    id: 2,
    name: "Dog care Website Design",
    img: "/images/project2.png",
    brand: "brand name",
  },
  {
    id: 3,
    name: "Course Platform",
    img: "/images/project3.png",
    brand: "brand name",
  },
  {
    id: 4,
    name: "Habit Tracking Website Design",
    img: "/images/project4.png",
    brand: "brand name",
  },
  {
    id: 5,
    name: "Tradilib Website Design",
    img: "/images/project5.png",
    brand: "brand name",
  },
  {
    id: 6,
    name: "Dashboard Designs",
    img: "/images/project6.png",
    brand: "brand name",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<Portfolio | null>(null);
  return (
    <section
      id="portfolio"
      className="relative w-full py-20 z-0 min-h-[100vh] bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-5">
        {/* Portfolio Header */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white w-[200px] flex justify-center items-center text-center rounded-2xl py-4 px-6 text-2xl font-semibold">
          <span className="font-light text-[#171717] rounded-xl uppercase shadow-sm p-2 px-4">
            Portfolio
          </span>
        </motion.div>

        {/* Title and Button */}
        <div className="flex justify-between items-center sm:flex-row flex-col mt-10">
          <div className="">
            <h1 className="lg:text-[56px] md:text-[40px] text-[32px] text-[#171717] font-medium">
              View our projects to see our <br /> quality and creativity.
            </h1>
            <p className="text-[#171717] text-[18px] font-mono mt-5">
              Explore the range of services we offer to elevate your online
              presence and drive growth.
            </p>
          </div>
          <a
            href="https://dribbble.com/Shakhari1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
            View Portfolio
          </a>
        </div>

        {/* Portfolio Grid - Dynamic Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-5">
          {PortfolioData.map((project) => (
            <div
              key={project.id}
              className="col-span-1 cursor-pointer"
              onClick={() => setSelectedImage(project)}>
              <div className="rounded-2xl">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <h2 className="text-[18px] font-medium text-[#171717]">
                    {project.name}
                  </h2>
                  {/* <p className="text-[#A3A3A3] text-[12px] uppercase mt-2 font-semibold">
                    {project.brand}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-90 p-4"
              onClick={() => setSelectedImage(null)}>
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl mx-4 mr-14 mt-20"
                onClick={(e) => e.stopPropagation()}>
                <button
                  className="absolute cursor-pointer -top-10 right-0 text-white text-2xl z-10 hover:text-[#8b55ff] transition-colors"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal">
                  <FaTimes />
                </button>

                <div className="relative w-full aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                  <Image
                    src={selectedImage.img}
                    alt={selectedImage.name}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 95vw, 80vw"
                  />
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-b-lg">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    {selectedImage.name}
                  </h2>
                  <p className="text-[#A3A3A3] text-sm sm:text-base uppercase mt-1 font-medium">
                    {selectedImage.brand}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
