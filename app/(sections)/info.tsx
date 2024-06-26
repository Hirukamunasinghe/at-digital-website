import Image from "next/image";
import React from "react";
// button component
import Button from "../components/ui/button";

// info component
const Info = () => {
  return (
    // services
    <div
      id="services"
      className=" w-full py-[60px] px-5 flex flex-col gap-[70px] md:px-10"
    >
      {/* mobile and web development service div */}
      <div className="flex flex-col gap-5 items-center justify-center max-w-[875px] mx-auto md:flex-row">
        {/* image div */}
        <div className="flex justify-center w-[275px] h-[275px] md:flex-[40]">
          <Image
            className="w-[275px] h-[275px]"
            src="/assets/newspaper.png"
            alt="newspaper-graphic"
            width={275}
            height={275}
          />
        </div>
        {/* text div */}
        <div className="flex flex-col gap-5 md:flex-[60] lg:ml-[50px]">
          <h1 className="text-primary font-semibold text-[27px] text-center md:text-left">
            Web & Mobile App Development
          </h1>
          <p className="text-[16px] text-center md:text-left">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          {/* Button component */}
          <div className="flex justify-center md:justify-start">
            <Button>LEARN MORE</Button>
          </div>
        </div>
      </div>
      {/* digital stratergy consulting div */}
      <div className="flex flex-col gap-5 items-center justify-center max-w-[875px] mx-auto md:flex-row-reverse">
        {/* image div */}
        <div className="flex justify-center w-[275px] h-[275px] md:flex-[40]">
          <Image
            className="w-[275px] h-[275px]"
            src="/assets/magnify.png"
            alt="newspaper-graphic"
            width={275}
            height={275}
          />
        </div>
        {/* text div */}
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
          {/* Button component */}
          <div className="flex justify-center md:justify-start">
            <Button>LEARN MORE</Button>
          </div>
        </div>
      </div>
      {/* FAQs div */}
      <div className="flex flex-col items-center justify-center gap-[28px]">
        <h1 className="text-primary font-semibold text-[27px] text-center md:text-left">
          Frequently asked questions
        </h1>
        <div className="flex gap-[15px] flex-col items-center justify-center">
          {/* FAQ1 */}
          <div className="flex flex-col gap-[13px] text-left bg-light-10 px-[24px] py-[24px] rounded-[7px] lg:w-[896px] md:w-[686px] sm:w-[334px] lg:h-[150px]">
            <div className="flex justify-between">
              <div className="flex flex-col gap-[13px]">
                <h3 className="text-primary font-medium  text-[20px] leading-7">
                  Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                </h3>
                <p className="leading-[30px] text-[16px] font-regular text-primary md:text-med-10 ">
                  Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                  suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                  sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                </p>
              </div>
              <Image
                className="py-[12px] pb-[7px] text-[18px] cursor-pointer"
                src="/assets/minus.png" alt="image" width={13} height={13}
              />
            </div>
          </div>
          {/* FAQ 2 */}
          <div className="flex flex-col gap-[13px] text-left bg-light-10 px-[24px] py-[24px] rounded-[7px] text-black lg:w-[896px] md:w-[686px] sm:w-[334px] lg:h-[80px]">
            <div className="flex justify-between">
              <h3 className="text-black font-medium text-[20px] leading-7">
                Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
                integer?
              </h3>
              <Image
                className="py-[8px] cursor-pointer"
                src="/assets/plus.png" alt="image"
                width={13} height={13}
              />
            </div>
          </div>
          {/* FAQ 3 */}
          <div className="flex flex-col gap-[13px] text-left bg-light-10 px-[24px] py-[24px] rounded-[7px] text-black lg:w-[896px] md:w-[686px] sm:w-[334px] lg:h-[80px]">
            <div className="flex justify-between ">
              <h3 className="text-black font-medium text-[20px] leading-7">
                Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque
                nunc?
              </h3>
              <Image
                className="py-[8px] cursor-pointer"
                src="/assets/plus.png"
                alt="image"
                width={13} height={13}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
