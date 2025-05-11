import React from "react";
import Image from "next/image";
import CardMenu from "./CardMenu";
import { motion } from "framer-motion";

interface Service {
  id: number;
  name: string;
  icon: string;
  dec: string;
}
const serviceData: Service[] = [
  {
    id: 1,
    name: "Social Media Marketing",
    icon: "/images/service1.svg",
    dec: "At Allmybusinessidea, we offer expert social media services to help your brand grow and engage with your audience effectively.",
  },
  {
    id: 2,
    name: "Business Consulting",
    icon: "/images/service2.svg",
    dec: "At Allmybusinessidea, we provide expert business consulting to help you optimize strategies, increase efficiency, and drive growth for your company.",
  },
  {
    id: 3,
    name: "Lead generation",
    icon: "/images/service3.svg",
    dec: "We specialize in lead generation strategies that help you attract, engage, and convert high-quality prospects into valuable customers.",
  },
  {
    id: 4,
    name: "Web/App Development",
    icon: "/images/service4.svg",
    dec: "Our UX design and web/app development services are focused on creating intuitive, enjoyable, and efficient digital experiences.",
  },
];
export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto py-20 px-5">
        <h1 className="lg:text-[56px] md:text-[40px] text-[32px] text-[#171717] font-medium">
          Services we offer
        </h1>
        <p className="text-[#4A4B54] text-[18px] mt-4 font-mono ">
          Explore our services to boost your online presence and drive growth,
          from web <br /> design, development to SEO and digital marketing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:gap-5 gap-4 mt-10">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl  p-6 py-10 border border-[#E9E9E9] hover:border-none hover:shadow-2xl transition-all duration-300">
              <div className="flex-1 flex-col items-start space-x-4 ">
                <div className="w-[80px] h-[80px] flex items-center justify-center bg-[#E9E8FF] rounded-2xl ">
                  <Image
                    src={item.icon}
                    alt="service icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-[24px] mt-10 font-medium text-[#000000]">
                  {item.name}
                </h3>
              </div>
              <p className="mt-4 text-[#4A4B54] font-mono text-[18px]">
                {item.dec}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-bg-secondary text-center py-16">
        <div className="container mx-auto px-5">
          <CardMenu />
          <div className="mt-5">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="space-x-4 mx-auto">
              <button
                // onClick={() => window.open("tel:+1424323-8570")}
                className="text-[14px] mx-auto uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
                Send Custom Request
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
