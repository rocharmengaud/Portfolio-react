import React, { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import RAlogo from '../assets/RA_logo.png';
import { Menu } from './Menu';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const mobileMenuRef = useRef(null);

  const openDialog = () => {
    console.log('test');
    mobileMenuRef.current.showModal();
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <a href="/">
        <img src={RAlogo} alt="Website logo" style={{ width: '80px' }}></img>
      </a>
      <Menu />
      <FaBars className="md:hidden hover:text-sky-300 text-2xl" onClick={openDialog} />
      <MobileMenu mobileMenuRef={mobileMenuRef} />
    </div>
  );
};
