import React from 'react'

const Header = () => {
  return (
    <div className='navbarDiv'>
      <nav className='flex items-center  px-[20px] py-[26px] justify-between bg-primary text-white h-[77px]'>
        <div>
        <img className='h-[30px]' src='./assets/atlogo.png'/>
        </div>
        <div>
          <img src='./assets/toggle.png'/>
        </div>
      </nav>
    </div>
  )
}

export default Header;