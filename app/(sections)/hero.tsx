import React from "react";
import Button from "../components/ui/button";
import Header from "../components/ui/header";

// hero component that contains the header, the background image and the description
const Hero = () => {
  return (
    <div>
      {/* navbar */}
      <Header></Header>
      {/* hero section */}
      <div className="bg-hero-pattern w-full h-[260px] bg-cover bg-no-repeat md:h-[450px] lg:h-[1020px]"></div>
      <div className="bg-gradient px-5 pt-6 pb-8 flex flex-col gap-5 lg:w-[630px]  lg:mt-[-400px] lg:ml-[250px]">
        <h1 className="font-bold text-[36px] tracking-tight text-white leading-tight md:text-[48px] ">
          We crush your competitors, goals, And sales records - without the B.S.
        </h1>
        <div>
          <Button>GET FREE CONSULTATION</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
