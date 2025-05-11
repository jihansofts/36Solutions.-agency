import React from "react";

interface CommitmentCardProps {
  title: string;
  percen: string;
  dec: string;
}
export default function CommitmentCard({
  title,
  percen,
  dec,
}: CommitmentCardProps) {
  return (
    <div
      className="flex flex-col justify-between rounded-[20px]   bg-gradient-to-b from-[#2F2741] to-[#2F2741]
             px-8 py-12 h-full transition-all duration-300 border border-transparent
             hover:border-t hover:border-l hover:border-[#7A41F2]
             hover:bg-gradient-to-b hover:from-[#03001400] hover:via-[#342582] hover:to-[#7A41F2]
             hover:shadow-[0_0_40px_rgba(122,65,242,0.4)]">
      {/* Title */}
      <p className="text-white uppercase text-[16px] font-medium">{title}</p>

      {/* Content */}
      <div className="mt-8">
        <h2 className="text-white text-4xl font-medium">{percen}</h2>
        <p className="text-[#A3A3A3] mt-6 font-mono text-[16px]">{dec}</p>
      </div>
    </div>
  );
}
