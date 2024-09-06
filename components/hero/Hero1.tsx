import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

const Hero1 = () => {
  return (
    <ContainerScroll titleComponent={"Find It, Love It, Buy It"}>
      <img
        src="/assets/hero.png"
        alt="hero"
        className="w-full h-full object-cover"
      />
    </ContainerScroll>
  );
};
// sm:mt-10 // md:mt-20
export default Hero1;
