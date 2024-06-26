import React from "react";
import Image from "next/image";

// footer Component
const Footer = () => {
  return (
    <div className="flex flex-col bg-primary text-white">
      {/* Top Section */}
      <div className="topdiv lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-700px lg:pt-[30px] lg:pr-[60px] lg:pl-[60px] xl:flex xl:justify-between">
        {/* Logo with the description */}
        <div className="md:pl-4 md:pt-[40px] lg:w-[438px] md:w-[413px] lg:pl-[0px] pl-[20px] xl:pl-[60px] sm:pt-[10px]">
          <Image src="/assets/atlogo.png" alt="Logo" width={250} height={250}/>
          <p className="font-regular text-sm mt-2 pt-[20px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        {/* technologies and services div */}
        <div className="md:flex md:flex-row md:gap-[70px] xl:pr-[90px] md:pt-10">
          {/* technologies div */}
          <div className="pt-8 px-4 md:pt-0 lg:pr-[40px] lg:pl-[70px] pl-[20px]">
            <h2 className="font-semibold text-[21px]">Our Technologies</h2>
            <div className="pt-2 flex flex-col gap-2 font-medium ">
              <p>ReactJS</p>
              <p>Gatsby</p>
              <p>NextJS</p>
              <p>NodeJS</p>
            </div>
          </div>
          {/* services div */}
          <div className="pt-8 px-4 md:pt-0 pl-[20px]">
            <h2 className="font-semibold text-[21px]">Our Services</h2>
            <div className="pt-2 flex flex-col gap-2 font-medium">
              <p>Social Media Marketing</p>
              <p>Web & Mobile Development</p>
              <p>Data & Analytics</p>
            </div>
          </div>
        </div>
      </div>
      {/* Privacy div */}
      <div className="privacydiv flex flex-col gap-2 items-center py-6 pb-[10px]">
        <Image
          className="md:w-[630px]"
          src="/assets/footerline.png"
          alt="Footer Line"
          height={10}
          width={300}
        />
        <div className="flex items-center gap-2 justify-center">
          <p className="text-sm">Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
