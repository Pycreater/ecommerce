"use client";
import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";
import { FlipWords } from "../ui/flip-words";

const Header = () => {
  const flipWords = [
    "Redefine Your Wardrobe",
    "Elevate Your Style",
    "Embrace the Trends",
    "Unleash Your Confidence",
    "Find Your Perfect Look",
    "Style That Speaks",
    // "Discover Timeless Fashion",
  ];

  return (
    <div className="w-screen">
      <CardSpotlight className="text-white flex justify-center items-center font-bold text-3xl sm:text-4xl md:text-5xl font-mono h-[300px] sm:h-[350px] rounded-3xl w-[90%] m-auto p-4">
        Discover Your Style,{" "}
        <FlipWords
          words={flipWords}
          duration={3000}
          className="text-blue-500"
        />
      </CardSpotlight>
    </div>
  );
};

export default Header;
