import React, { useRef } from 'react';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import RAlogo from '../assets/RA_logo.png';
import { Social } from './Social';
import { Menu } from './Menu';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const mobileMenuRef = useRef(null);

  const openDialog = () => {
    console.log('test');
    mobileMenuRef.current.showModal();
  };

  const social = [
    { name: 'Linked In', icon: <FaLinkedin size={30} />, url: 'https://www.linkedin.com/in/roch-armengaud-07b433277/', bgColor: 'bg-blue-600' },
    { name: 'Github', icon: <FaGithub size={30} />, url: 'https://github.com/rocharmengaud', bgColor: 'bg-[#333333]' },
    {
      name: 'Resume',
      icon: <BsFillPersonLinesFill size={30} />,
      url: 'https://drive.google.com/file/d/16OdkQde1ox2f2PANccYkf2Y_GOQKog4v/view?usp=drive_link',
      bgColor: 'bg-[#6fc2b0]',
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <a href="/">
        <img src={RAlogo} alt="Website logo" style={{ width: '80px' }}></img>
      </a>
      <Menu />
      {/* Social icons */}
      <div className="fixed bottom-0 right-0 sm:left-0 sm:top-[75%]">
        <ul>
          {social.map((social) => (
            <Social key={social.name} {...social} />
          ))}
        </ul>
      </div>
      {/* Hamburger */}
      <FaBars className="hover:text-sky-300 text-2xl" onClick={openDialog} />
      <MobileMenu mobileMenuRef={mobileMenuRef} />
    </div>
  );
};
