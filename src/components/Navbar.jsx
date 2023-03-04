import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import RAlogo from '../assets/RA_logo.png';

export const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={RAlogo} alt="Website logo" style={{ width: '80px' }}></img>
      </div>
    </div>
  );
};
