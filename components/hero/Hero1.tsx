import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

const Hero1 = () => {
  return (
    <ContainerScroll titleComponent={"Find It, Love It, Buy It"}>
      <Image
        src="/assets/hero.png"
        alt="hero"
        className="w-full h-full object-cover"
        width={500}
        height={300}
      />
    </ContainerScroll>
  );
};

export default Hero1;
