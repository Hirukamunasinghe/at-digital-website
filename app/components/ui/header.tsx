// use client
"use client"; 
// import react and useeffect hook
import React, { useState, useEffect } from 'react';
import Image from "next/image";

// header component with use state
const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState('auto');
  const [toggleActive, setToggleActive] = useState(false);

  // use effect hook used for window resizing
  useEffect(() => {
    // updates the windowWidth state with the current inner width of the screen
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // resizing
    window.addEventListener('resize', handleResize);

    // removing - cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // toggleLinks function
  const toggleLinks = () => {
    setShowLinks(!showLinks);
    setNavbarHeight(showLinks ? 'auto' : 'auto');
    setToggleActive(!toggleActive);
  };

  return (
    <div className='navbarDiv'>
      <nav className={`flex items-center px-[20px] py-[26px] justify-between bg-primary text-white h-[${navbarHeight}] ${showLinks && windowWidth < 768 ? '' : ''}`}>
        <div className="flex items-center">
          <Image className=' lg:ml-[10px] md:ml-[10px] cursor-pointer' src='/assets/atlogo.png' alt='Logo' width={200} height={200}/>
          {/* checking whether the window width is less than 768px to show the navbar links */}
          {(windowWidth < 768 && showLinks) && (
            <ul className='flex flex-col gap-[30px] pl-[20px]  position: absolute left-0 mt-[255px] w-full bg-primary lg:mr-[10px] md:mr-[10px]'> 
              <li><a href='#services'>SERVICES</a></li>
              <li><a href=''>ABOUT US</a></li>
              <li><a href=''>CONTACT US</a></li>
              <li><a href=''>CAREERS</a></li>
            </ul>
          )}
        </div>
        <div className='textcontent'>
          {/* if the window size is greater than 768px, the navlinks will be displayed */}
          {windowWidth >= 768 ? (
            <ul className='flex gap-[28px] text-lg pr-[10px]'>
              <li><a href='#services'>SERVICES</a></li>
              <li><a href=''>ABOUT US</a></li>
              <li><a href=''>CONTACT US</a></li>
              <li><a href=''>CAREERS</a></li>
            </ul>
          ) : (
            toggleActive ? (
              <Image className='h-[25px]' onClick={toggleLinks} src='/assets/close.png' alt='Cross' width={30} height={40}/>
            ) : ( 
              // else the toggle image will be displayed 
              <Image onClick={toggleLinks} src='/assets/toggle.png' alt='Toggle'  width={30} height={30}/>
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
