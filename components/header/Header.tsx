"use client";
import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";

const Header = () => {
  return (
    <div className="w-screen">
      <CardSpotlight className="text-white flex justify-center items-center font-bold text-5xl font-mono h-[350px]   rounded-3xl ">
        Discover Your Style, Redefine Your Wardrobe
      </CardSpotlight>
    </div>
  );
};

export default Header;
