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

export default Hero1;
