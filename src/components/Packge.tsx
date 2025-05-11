import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import CardMenu from "./CardMenu";

export default function Package() {
  const [activePackage, setActivePackage] = useState<string | null>(null);

  interface Feature {
    name: string;
    standard: boolean | string;
    premium: boolean | string;
    enterprise: boolean | string;
    bg: string;
  }
  const features: Feature[] = [
    // ... (keep your existing features array)
    {
      name: "Functional website",
      standard: true,
      premium: true,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Responsive design",
      standard: true,
      premium: true,
      enterprise: true,
      bg: "#17102F",
    },
    {
      name: "Content upload",
      standard: true,
      premium: true,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Qst in form",
      standard: true,
      premium: true,
      enterprise: true,
      bg: "#17102F",
    },
    {
      name: "Payment processing",
      standard: false,
      premium: true,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Autoresponsor integration",
      standard: false,
      premium: true,
      enterprise: true,
      bg: "#17102F",
    },
    {
      name: "Speed optimization",
      standard: false,
      premium: false,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Hosting setup",
      standard: false,
      premium: false,
      enterprise: true,
      bg: "#17102F",
    },
    {
      name: "Social media route",
      standard: false,
      premium: false,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Number of pages",
      standard: "1",
      premium: "8",
      enterprise: "Unlimited",
      bg: "#17102F",
    },
    {
      name: "Number of products",
      standard: "10",
      premium: "50",
      enterprise: "Unlimited",
      bg: "#2F2741",
    },
    {
      name: "Delivery",
      standard: "7 days",
      premium: "10 days",
      enterprise: "15 days",
      bg: "#17102F",
    },
  ];

  const packages = [
    {
      id: "standard",
      title: "Standard package",
      price: "$99",
      description: "Responsive design + Standard package features + 1 page",
      monthlyPrice: "$99",
    },
    {
      id: "premium",
      title: "Premium package",
      price: "$499",
      description: "Responsive design + Premium Package + 8 pages",
      monthlyPrice: "$499",
      popular: true,
    },
    {
      id: "enterprise",
      title: "Enterprise package",
      price: "$999",
      description: "Responsive design + Enterprise + Unlimited Pages",
      monthlyPrice: "$999",
    },
  ];

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  return (
    <section
      id="packages"
      className="bg-bg-secondary py-10 md:py-20 px-4 md:px-5">
      {/* Desktop View */}
      <div className="hidden md:block container mx-auto bg-[#17102F] rounded-t-2xl overflow-hidden">
        {/* ... (keep your existing desktop layout) */}
        {/* Package Header Row */}
        <div className="grid grid-cols-12 border-b border-[#3D3353]">
          <div className="col-span-12 md:col-span-3 border-r border-[#3D3353] p-4 md:p-8">
            <span className="font-mono text-[18px] md:text-[24px] font-medium text-white">
              Package
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Standard Package */}
              <div className="col-span-1 border-b md:border-b-0 md:border-r border-[#3D3353] p-4 md:p-8">
                <span className="font-mono capitalize text-[18px] md:text-[24px] font-medium text-white">
                  Standard package
                </span>
                <div className="pr-0 md:pr-4">
                  <h1 className="font-mono text-[32px] md:text-[48px] font-medium text-white">
                    $99 <span className="text-[16px] md:text-[24px]">/mo</span>
                  </h1>
                  <p className="font-mono text-[14px] md:text-[16px] mt-2 md:mt-3 font-medium text-[#A3A3A3]">
                    Responsive design + Standard package features + 1 page
                  </p>
                  <div className="mt-3 md:mt-5 py-3 md:py-4 flex justify-between items-center border-y border-[#3D3353]">
                    <span className="font-mono text-[14px] md:text-[16px] font-medium text-white">
                      Billed monthly
                    </span>
                    <p className="font-mono text-[14px] md:text-[16px] font-medium text-white">
                      $99
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium Package */}
              <div className="col-span-1 border-b md:border-b-0 md:border-r border-[#3D3353] p-4 md:p-8">
                <div className="flex justify-between items-center">
                  <span className="font-mono capitalize text-[18px] md:text-[24px] font-medium text-white">
                    Premium package
                  </span>
                  <span className="font-mono text-[10px] md:text-[12px] font-normal uppercase py-1 px-2 md:px-4 rounded-md bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white">
                    Popular
                  </span>
                </div>
                <div className="pr-0 md:pr-4">
                  <h1 className="font-mono text-[32px] md:text-[48px] font-medium text-white">
                    $499 <span className="text-[16px] md:text-[24px]">/mo</span>
                  </h1>
                  <p className="font-mono text-[14px] md:text-[16px] mt-2 md:mt-3 font-medium text-[#A3A3A3]">
                    Responsive design + Premium Package + 8 pages
                  </p>
                  <div className="mt-3 md:mt-5 py-3 md:py-4 flex justify-between items-center border-y border-[#3D3353]">
                    <span className="font-mono text-[14px] md:text-[16px] font-medium text-white">
                      Billed monthly
                    </span>
                    <p className="font-mono text-[14px] md:text-[16px] font-medium text-white">
                      $499
                    </p>
                  </div>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="col-span-1 p-4 md:p-8">
                <div className="flex justify-between items-center">
                  <span className="font-mono capitalize text-[18px] md:text-[24px] font-medium text-white">
                    Enterprise package
                  </span>
                </div>
                <div className="pr-0 md:pr-4">
                  <h1 className="font-mono text-[32px] md:text-[48px] font-medium text-white">
                    $999 <span className="text-[16px] md:text-[24px]">/mo</span>
                  </h1>
                  <p className="font-mono text-[14px] md:text-[16px] mt-2 md:mt-3 font-medium text-[#A3A3A3]">
                    Responsive design + Enterprise + Unlimited Pages
                  </p>
                  <div className="mt-3 md:mt-5 py-3 md:py-4 flex justify-between items-center border-y border-[#3D3353]">
                    <span className="font-mono text-[14px] md:text-[16px] font-medium text-white">
                      Billed monthly
                    </span>
                    <p className="font-mono text-[14px] md:text-[16px] font-medium text-white">
                      $999
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="max-h-[60vh] md:max-h-none overflow-y-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-12 border-b border-[#3D3353] last:border-b-0"
              style={{ backgroundColor: feature.bg }}>
              <div className="col-span-12 md:col-span-3 border-r border-[#3D3353] p-4">
                <p className="text-[14px] md:text-[18px] font-mono font-normal text-white">
                  {feature.name}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="grid grid-cols-3 h-full">
                  {/* Standard */}
                  <div className="col-span-1 border-r border-[#3D3353] p-4 flex items-center justify-center">
                    {typeof feature.standard === "boolean" ? (
                      feature.standard ? (
                        <FaCircleCheck className="text-[#70D421] text-lg md:text-xl" />
                      ) : (
                        <FaTimes className="text-red-500 text-lg md:text-xl" />
                      )
                    ) : (
                      <span className="text-white font-mono text-[14px] md:text-[16px]">
                        {feature.standard}
                      </span>
                    )}
                  </div>

                  {/* Premium */}
                  <div className="col-span-1 border-r border-[#3D3353] p-4 flex items-center justify-center">
                    {typeof feature.premium === "boolean" ? (
                      feature.premium ? (
                        <FaCircleCheck className="text-[#70D421] text-lg md:text-xl" />
                      ) : (
                        <FaTimes className="text-red-500 text-lg md:text-xl" />
                      )
                    ) : (
                      <span className="text-white font-mono text-[14px] md:text-[16px]">
                        {feature.premium}
                      </span>
                    )}
                  </div>

                  {/* Enterprise */}
                  <div className="col-span-1 p-4 flex items-center justify-center">
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? (
                        <FaCircleCheck className="text-[#70D421] text-lg md:text-xl" />
                      ) : (
                        <FaTimes className="text-red-500 text-lg md:text-xl" />
                      )
                    ) : (
                      <span className="text-white font-mono text-[14px] md:text-[16px]">
                        {feature.enterprise}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Row */}
        <div className="grid grid-cols-12 border-b border-[#3D3353] last:border-b-0">
          <div className="col-span-12 md:col-span-3 border-r border-[#3D3353] p-4 md:p-8"></div>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              <div className="col-span-1 p-3 md:p-5 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#3D3353]">
                <button
                  onClick={() =>
                    window.open(
                      "https://calendly.com/allie-allmybusinessideas/30min",
                      "_blank"
                    )
                  }
                  className="font-semibold cursor-pointer uppercase border border-[#6F51FF] py-2 md:py-3 px-4 md:px-8 rounded-lg text-[12px] md:text-[14px] text-[#6F51FF] hover:bg-[#6F51FF] hover:text-white duration-300 translate-all">
                  Request Package
                </button>
              </div>
              <div className="col-span-1 flex justify-center items-center p-3 md:p-5 border-b md:border-b-0 md:border-r border-[#3D3353]">
                <button
                  onClick={() =>
                    window.open(
                      "https://calendly.com/allie-allmybusinessideas/30min",
                      "_blank"
                    )
                  }
                  className="font-semibold cursor-pointer uppercase py-2 md:py-3 px-4 md:px-8 rounded-lg text-[12px] md:text-[14px] text-white bg-[#6F51FF] hover:text-white hover:border hover:border-[#6F51FF] hover:bg-[#2F2741] duration-300 translate-all">
                  Request Package
                </button>
              </div>
              <div className="col-span-1 flex justify-center items-center p-3 md:p-5">
                <button
                  onClick={() =>
                    window.open(
                      "https://calendly.com/allie-allmybusinessideas/30min",
                      "_blank"
                    )
                  }
                  className="font-semibold cursor-pointer uppercase border border-[#6F51FF] py-2 md:py-3 px-4 md:px-8 rounded-lg text-[12px] md:text-[14px] text-[#6F51FF] hover:bg-[#6F51FF] hover:text-white duration-300 translate-all">
                  Request Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden container mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="mb-4 bg-[#17102F] rounded-xl overflow-hidden">
            <div className="p-6">
              {/* Package Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-mono text-[18px] font-medium text-white">
                    {pkg.title}
                  </h3>
                  <h1 className="font-mono text-[32px] font-medium text-white mt-1">
                    {pkg.price} <span className="text-[16px]">/mo</span>
                  </h1>
                  {pkg.popular && (
                    <span className="inline-block mt-2 font-mono text-[10px] font-normal uppercase py-1 px-2 rounded-md bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white">
                      Popular
                    </span>
                  )}
                </div>
                <button
                  onClick={() => togglePackage(pkg.id)}
                  className="text-white text-lg">
                  {activePackage === pkg.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>

              {/* Package Description - Always Visible */}
              <p className="font-mono text-[14px] font-medium text-[#A3A3A3] mt-3">
                {pkg.description}
              </p>

              {/* Billing Info - Always Visible */}
              <div className="mt-4 py-3 flex justify-between items-center border-y border-[#3D3353]">
                <span className="font-mono text-[14px] font-medium text-white">
                  Billed monthly
                </span>
                <p className="font-mono text-[14px] font-medium text-white">
                  {pkg.monthlyPrice}
                </p>
              </div>

              {/* Features List - Collapsible */}
              <AnimatePresence>
                {activePackage === pkg.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="mt-4 space-y-3">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg flex justify-between items-center"
                          style={{ backgroundColor: feature.bg }}>
                          <span className="font-mono text-[14px] text-white">
                            {feature.name}
                          </span>
                          <div className="ml-4">
                            {(() => {
                              const value =
                                pkg.id === "standard"
                                  ? feature.standard
                                  : pkg.id === "premium"
                                  ? feature.premium
                                  : feature.enterprise;

                              if (typeof value === "boolean") {
                                return value ? (
                                  <FaCircleCheck className="text-[#70D421] text-lg" />
                                ) : (
                                  <FaTimes className="text-red-500 text-lg" />
                                );
                              }
                              return (
                                <span className="text-white font-mono text-[14px]">
                                  {value}
                                </span>
                              );
                            })()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Request Button - Always Visible */}
              <button className="w-full mt-6 font-semibold cursor-pointer uppercase py-3 rounded-lg text-[14px] text-white bg-[#6F51FF] hover:bg-[#5a3fd4] duration-300">
                REQUEST PACKAGE
              </button>
            </div>
          </div>
        ))}
      </div>

      <CardMenu />
    </section>
  );
}
