"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What’s included in the $36/month subscription?",
      answer:
        "Your monthly subscription covers everything you need to keep your site running smoothly: Hosting Domain name renewal Bug fixes Quick content updates Ongoing performance monitoring Support when you need it",
    },
    {
      question: "Can I add more pages later?",
      answer:
        "Yes! We offer additional pages and features as add-ons. You can grow your site at any time — and your $36/month subscription stays the same. ",
    },
    {
      question: "Is it really custom, or do you use templates?",
      answer:
        "Every site we build is 100% custom — designed from scratch based on your brand, content, and goals. No cookie-cutter templates or drag-and-drop builders.",
    },
    {
      question: "What exactly do I get for $36?",
      answer:
        "You get a custom-designed, one-page website built by real UI/UX designers and developers — no templates. Your site will be mobile-responsive, SEO-ready, and delivered within 48 hours of receiving your info.",
    },
    // {
    //   question:
    //     "Will I be able to make changes to the website after it's launched?",
    //   answer:
    //     "Yes, we can create a website or mobile app for you. We have a team of designers and developers who can bring your vision to life. ",
    // },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 bg-b">
          <h1 className="lg:text-[56px] md:text-[40px] text-[32px] text-[#171717] font-medium mt-10">
            Frequently asked questions
          </h1>
          <p className="text-[16px] mt-3 text-[#4A4B54]">
            We&apos;re here to support your journey.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-12  mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F4F4F5] rounded-xl shadow-sm p-4 coursor-pointer overflow-hidden">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex gap-x-4  justify-between items-center lg:px-6 md:px-4 px-4 py-4 text-left ">
                <div className="md:w-full sm:w-3/2 w-2/2">
                  <span className="md:text-[20px] sm:text-[12px] font-medium text-[#171717]">
                    {faq.question}
                  </span>
                </div>
                {
                  <div className="w-[50px] h-[50px]  cursor-pointer flex justify-center items-center border border-[#171717] rounded-full">
                    {activeIndex === index ? <IoClose /> : <FaArrowDown />}
                  </div>
                }
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}>
                    <div className="px-6 pb-5 text-[16px] font-mono font-normal sm:text-base text-[#4A4B54] whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
