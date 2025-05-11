"use client";

import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface Faq {
  question: string;
  answer: string;
}
const faqs: Faq[] = [
  {
    question: "Tell me more",
    answer:
      "We ensure open and transparent communication using scheduled updates, shared project boards, and quick response times via preferred communication channels like Slack, email, or Zoom",
  },
  {
    question:
      "How does the team approach clients with complex project requirements?",
    answer: `
When handling clients with complex project requirements, our team follows a structured approach to ensure effective collaboration and successful outcomes:

1. Initial Consultation: We begin with a detailed discussion to understand your specific needs, objectives, and challenges. This helps us gather all the necessary information about your vision and expectations.

2. Needs Assessment: Our team analyzes the details provided to identify key features, functionalities, and any technological requirements. This assessment allows us to clarify the project scope and set realistic goals.

3. Customized Solutions: Based on the assessment, we develop tailored solutions that align with your vision. This might include advanced functionalities, integrations with existing systems, or unique design elements that stand out.

4. Collaborative Planning: We work closely with you to create a project roadmap. This involves timelines, milestones, and deliverables to keep the project on track. Your input is invaluable in this phase to ensure alignment with your expectations.

5. Regular Updates and Communication: Throughout the project, we maintain open lines of communication. Regular check-ins and updates help address any concerns and ensure that the project is progressing as planned.

6. Feedback and Iteration: We value your feedback at every stage, allowing us to refine and adjust our approach as needed. This iterative process fosters collaboration and ensures the final product meets your standards.

7. Testing and Quality Assurance: Before launching, we conduct thorough testing to identify and resolve any issues. This ensures that the website or app functions smoothly and meets all performance standards.

8. Launch and Support: After successful testing, we assist with the launch of your project. Our support doesn’t end there; we provide ongoing maintenance and support options to help you manage and grow your digital presence.

By following this comprehensive approach, we ensure that your complex project is managed efficiently, resulting in a final product that not only meets your needs but also helps you achieve your business goals.
    `,
  },
  {
    question:
      "How does the team ensure effective communication throughout the project?",
    answer:
      "We ensure open and transparent communication using scheduled updates, shared project boards, and quick response times via preferred communication channels like Slack, email, or Zoom.",
  },
];

export default function Creation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-bg-secondary py-20 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto px-5">
        <div className="max-w-8xl mx-auto text-center">
          <h1 className="lg:text-[56px] md:text-[40px] text-[32px] text-[#171717] font-medium">
            Our Web/App Creation Packages
          </h1>
          <p className="text-[#171717] text-base sm:text-lg mt-4 font-mono">
            Our web and app packages are designed for those who have a clear
            vision for their simple website or mobile app business. If you have
            a more complex project in mind, please reach out to us directly for
            personalized assistance.
          </p>
        </div>

        <div className="mt-12  mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex gap-x-4  justify-between items-center lg:px-6 md:px-4 px-4 py-4 text-left ">
                <div className="md:w-full sm:w-3/2 w-2/2">
                  <span className="md:text-[20px] sm:text-[12px] font-medium text-[#171717]">
                    {faq.question}
                  </span>
                </div>
                {
                  <div className="w-[50px] h-[50px]  cursor-pointer flex justify-center items-center border border-[#171717] rounded-full">
                    {openIndex === index ? <IoClose /> : <FaArrowDown />}
                  </div>
                }
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}>
                    <div className="px-6 pb-5 text-[16px] sm:text-base text-[#4A4B54] whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
