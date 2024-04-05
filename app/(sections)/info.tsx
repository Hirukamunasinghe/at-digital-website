import Image from "next/image";
import React from "react";
import Button from "../components/ui/button";

const Info = () => {
  return (
    <div className="py-[60px] px-5 flex flex-col gap-[60px] md:px-10">
      <div className="flex flex-col gap-5 items-center justify-center max-w-[875px] mx-auto md:flex-row">
        <div className="flex justify-center w-[275px] h-[275px] md:flex-[40]">
          <Image
            className="w-[275px] h-[275px]"
            src="/assets/newspaper.png"
            alt="newspaper-graphic"
            width={275}
            height={275}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-[60]">
          <h1 className="text-primary font-semibold text-[27px] text-center md:text-left">
            Web & Mobile App Development
          </h1>
          <p className="text-[16px] text-center md:text-left">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button>LEARN MORE</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center max-w-[875px] mx-auto md:flex-row-reverse">
        <div className="flex justify-center w-[275px] h-[275px] md:flex-[40]">
          <Image
            className="w-[275px] h-[275px]"
            src="/assets/magnify.png"
            alt="newspaper-graphic"
            width={275}
            height={275}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-[60]">
          <h1 className="text-primary font-semibold text-[27px] text-center md:text-left">
            Digital Strategy Consulting
          </h1>
          <p className="text-[16px] text-center md:text-left">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button>LEARN MORE</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
