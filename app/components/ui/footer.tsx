
import React from 'react';

const Footer = () => {
  return (
    <div className=' flex flex-col bg-primary text-white'>
      <div className='topdiv lg:flex lg:flex-row lg:items-center lg:justify-between lg:pl-[100px]'>
      <div className='py-[40px] px-[20px] flex gap-[20px] flex-col items-start text-left justify-center md:pl-[40px] w-[413px]'>
        <img className='' src='./assets/atlogo.png' />
        <p className='font-regular'>
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
        </p>
      </div>
      <div className=' pt-[50px] px-[20px] flex gap-[12px] flex-col items-start text-left justify-center md:flex-row items-start gap-[79px] w-[550px] lg:w-[560px] lg:pt-[0px] lg:pr-[60px] '>
          <div className=''>
          <h2 className='font-semibold text-[21px]'>Our Technologies</h2>
          <div className='pt-[12px] w-[56px] h-[104px] flex flex-col gap-[12px] font-medium text-[14px]'>
            <p>ReactJS</p>
            <p>Gatsby</p>
            <p>NextJS</p>
            <p>NodeJS</p>
          </div>
          </div>
          <div className='flex flex-col gap-[12px] pt-[40px] md:pt-[0px]'>
          <h2 className='font-semibold text-[21px]'>Our Services</h2>
          <div className=' w-[216px] h-[112px] flex flex-col gap-[12px] font-medium text-[14px]'>
            <p>Social Media Marketing</p>
            <p>Web & Mobile Development</p>
            <p>Data & Analytics</p>
          </div>
          </div>
      </div>
      </div>
      <div className='privacydiv flex flex-col gap-2 items-center pt-[40px] pb-[30px]'>
        <img className='w-[335px] md:w-[630px]' src='./assets/footerline.png'/>
        <div className='flex items-center gap-[16px] justify-center'>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;