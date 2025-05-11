import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa"; // Only need full star icon

interface ReviewCardProps {
  username: string;
  country: string;
  comment: string;
  countryCode?: string;
}

export default function ReviewCard({
  username,
  country,
  comment,
  countryCode,
}: ReviewCardProps) {
  const getFlagUrl = (code: string) =>
    `https://flagcdn.com/w20/${code.toLowerCase()}.png`;

  return (
    <div className="bg-white mx-auto max-w-[370px] min-h-[250px] rounded-xl p-6 border border-[#EAEAEA] hover:border-[#7A41F2] transition-all duration-300">
      {/* User info with flag */}
      <div className="flex justify-start items-start gap-3 mb-4">
        {/* Avatar */}
        <div className="rounded-full  flex flex-col items-start justify-center">
          <span className="text-[#000000] font-medium text-[18px]">
            {username}
          </span>
          <div className="flex items-center">
            {countryCode && (
              <div className="w-5 h-3 relative">
                <Image
                  src={getFlagUrl(countryCode)}
                  alt={`${countryCode} flag`}
                  fill
                  className="object-cover rounded-sm"
                  unoptimized={true}
                />
              </div>
            )}
            <h3 className="text-[#A3A3A3] ml-1 font-medium text-[12px]">
              {country}
            </h3>
          </div>
        </div>
      </div>
      {/* Username and Name with Flag */}
      <div></div>

      {/* Comment */}
      <p className="text-[#4A4B54] text-[16px] font-mono ">{comment}</p>
      {/* Fixed 5-star rating */}
      <div className="flex items-center gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
    </div>
  );
}
