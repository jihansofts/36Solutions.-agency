import CommitmentCard from "@/common/CommitmentCard";
import Map from "@/common/Map";
import React from "react";

export default function Satisfaction() {
  return (
    <section id="about" className="w-full">
      <div className="relative w-full pt-20 min-h-screen">
        <div
          className="absolute inset-0 z-0 bg-[url('/images/satisfaction.png')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundPosition: "center center",
          }}></div>
        <div className="container mx-auto flex flex-col justify-between relative py-20 px-5 z-5 min-h-screen">
          <div className="text-center max-w-6xl mx-auto px-4">
            <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px]  font-medium md:leading-[70px]">
              We Deliver Innovative Solutions That Drive Business Success.
            </h1>
          </div>
          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-20 px-4">
            {/* Satisfaction Card */}
            <CommitmentCard
              title="Satisfaction"
              percen="100%"
              dec="We are dedicated to delivering high-quality work and exceeding expectations, ensuring a 100% satisfaction rate with every project."
            />
            <CommitmentCard
              title="COMMITMENT"
              percen="101%"
              dec="We are dedicated to meeting deadlines, maintaining clear communication, and ensuring the highest quality in all our work."
            />
            <CommitmentCard
              title="PROJECTS"
              percen="800+"
              dec="With a track record of completing over 800+ projects, We pride ourselves on delivering quality work on time & within budget."
            />
            <CommitmentCard
              title="CLIENTS"
              percen="500+"
              dec="We've had the privilege of working with over 300 clients worldwide, treating each with the utmost respect and professionalism."
            />
          </div>
          <div className="text-center max-w-6xl mx-auto px-4 mt-10">
            <h2 className="lg:text-[56px] md:text-[40px] text-[32px]  text-white  font-medium">
              World domination 25%
            </h2>
          </div>
        </div>
      </div>
      {/* Background container */}
      {/* Content container */}

      <Map />
    </section>
  );
}
