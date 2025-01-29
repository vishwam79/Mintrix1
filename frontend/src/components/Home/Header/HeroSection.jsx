import React from "react";
import Header from "./Header";

const HeroSection = () => {
  return (

    <div className="flex justify-center">
    <div className="relative w-full max-w-[1440px] h-screen ">
      <div className="relative max-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/header-background.mp4"
          className="w-full h-screen object-cover  "
        ></video>

        <img
          src="/herobg.png"
          alt="Hero Background"
          className="absolute   hidden sm:block -bottom-48 w-full object-cover"
        />

        <Header />
      </div>
    </div>

    </div>
  );
};

export default HeroSection;
