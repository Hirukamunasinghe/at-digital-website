"use client"; 
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false); // State to handle link visibility in mobile

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to toggle link visibility
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className='navbarDiv'>
      <nav className='flex items-center px-[20px] py-[26px] justify-between bg-primary text-white h-[auto]'>
        <div className="flex items-center">
          <img className='h-[30px]' src='./assets/atlogo.png' alt='Logo'/>
          {windowWidth < 768 && showLinks && (
            <ul className='flex flex-col position: absolute '> 
              <li><a href=''>SERVICES</a></li>
              <li><a href=''>ABOUT US</a></li>
              <li><a href=''>CONTACT US</a></li>
              <li><a href=''>CAREERS</a></li>
            </ul>
          )}
        </div>
        <div className='textcontent'>
          {windowWidth >= 768 ? (
            <ul className='flex gap-[28px] text-lg'>
              <li><a href=''>SERVICES</a></li>
              <li><a href=''>ABOUT US</a></li>
              <li><a href=''>CONTACT US</a></li>
              <li><a href=''>CAREERS</a></li>
            </ul>
          ) : (
            <img onClick={toggleLinks} src='./assets/toggle.png' alt='Toggle'/>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
