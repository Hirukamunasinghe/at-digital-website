import React from "react";
import Button from "../components/ui/button";

const Hero = () => {
  return (
    <div>
      <div className="bg-hero-pattern w-full h-[260px] bg-cover bg-no-repeat md:h-[450px]"></div>
      <div className="bg-gradient px-5 pt-6 pb-8 flex flex-col gap-5">
        <h1 className="font-bold text-[36px] tracking-tight text-white leading-tight md:text-[48px]">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <div>
          <Button>GET FREE CONSULTATION</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
