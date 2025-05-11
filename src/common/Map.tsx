import React from "react";

export default function Map() {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-[url('/images/bgmap.png')] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundPosition: "center center",
        }}></div>
    </div>
  );
}
