import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import RAlogo from '../assets/RA_logo.png';
import { Social } from './Social';
import { Menu } from './Menu';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const social = [
    { name: 'Linked In', icon: <FaLinkedin size={30} />, url: '/', bgColor: 'bg-blue-600' },
    { name: 'Github', icon: <FaGithub size={30} />, url: 'https://github.com/rocharmengaud', bgColor: 'bg-[#333333]' },
    {
      name: 'Resume',
      icon: <BsFillPersonLinesFill size={30} />,
      url: 'https://mega.nz/file/19MFSZ5C#lKgR-DZwBGZeW5ohIw6D6eQuIAjVx4227-JoeYG0j-s',
      bgColor: 'bg-[#6fc2b0]',
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={RAlogo} alt="Website logo" style={{ width: '80px' }}></img>
      </div>
      <Menu />
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <MobileMenu handleClick={handleClick} nav={nav} />
      {/* Social icons */}
      <div className="fixed bottom-0 right-0 sm:left-0 sm:top-[75%]">
        <ul>
          {social.map((social) => (
            <Social key={social.name} {...social} />
          ))}
        </ul>
      </div>
    </div>
  );
};
