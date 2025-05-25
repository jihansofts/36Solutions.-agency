import React from "react";
import Navbar from "@/common/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Hero({ setIsOpen }: Props) {
  return (
    <section id="home" className="relative w-full min-h-screen  pt-[30px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bghero.svg"
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 min-h-screen flex flex-col overflow-visible">
        {/* Navbar */}
        <Navbar setIsOpen={setIsOpen} />

        {/* Hero Main Grid */}
        <div className=" z-20 flex items-center justify-center px-4 sm:px-6 py-30">
          <div className=" gap-8 w-full items-center">
            {/* Left Text Section */}
            <div className=" flex flex-col justify-center items-center text-center">
              <div className="max-w-[1400px] w-full text-center md:text-center">
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl capitalize sm:text-5xl md:text-[100px] leading-tight text-white font-medium">
                  Website, Domain, Hosting — All Set for{" "}
                  <span className="text-[#7D4EEB]">Just $36!</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="font-mono max-w-7xl text-center mx-auto text-[18px] sm:text-lg md:text-[18px] lg:text-[#A3A3A3] md:text-[#A3A3A3] sm:text-white text-white mt-7">
                  Get a professionally designed mobile responsive and fully
                  functional website for just $36 — including a free domain name
                  and hosting. Perfect for small businesses, start ups,
                  freelancers, and personal brands looking to make a powerful
                  online presence without breaking the bank. Fast delivery,
                  mobile-friendly design, and SEO-ready — everything you need to
                  get started!
                </motion.p>

                <div className="mt-10 sm:flex-col space-x-4">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="space-x-4">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="text-[14px] uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
                      Place Order
                    </button>
                  </motion.div>
                </div>
                <div className="pt-20 max-w-7xl mx-auto rounded-3xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto max-w-full rounded-3xl"
                    src="/video/video.mp4" // <-- replace with your actual path
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
