import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { useImperativeHandle, useRef } from 'react';

export const MobileMenu = ({ mobileMenuRef }) => {
  const scrollDuration = 500;
  const smoothScroll = true;

  // Here, i'm using refs because of the <dialog> html tag
  const dialogRef = useRef(null);

  // Expose the showModal and close methods to the parent component
  useImperativeHandle(mobileMenuRef, () => ({
    showModal() {
      dialogRef.current.showModal();
    },
    close() {
      dialogRef.current.close();
    },
  }));

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <dialog ref={dialogRef} className="fixed w-full h-screen bg-[#0a192f] outline-none focus:shadow-none max-w-[100vw] max-h-[100vh]">
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <FaTimes className="hover:text-red-500 text-2xl text-white" onClick={closeDialog} />
        </div>
        <ul className="flex flex-col items-center justify-center flex-grow text-gray-300">
          <li className="hover:text-sky-300 py-6 text-4xl">
            <Link onClick={closeDialog} to="home" smooth={smoothScroll} duration={scrollDuration}>
              Home
            </Link>
          </li>
          <li className="hover:text-sky-300 py-6 text-4xl">
            <Link onClick={closeDialog} to="about" smooth={smoothScroll} duration={scrollDuration}>
              About
            </Link>
          </li>
          <li className="hover:text-sky-300 py-6 text-4xl">
            <Link onClick={closeDialog} to="skills" smooth={smoothScroll} duration={scrollDuration}>
              Skills
            </Link>
          </li>
          <li className="hover:text-sky-300 py-6 text-4xl">
            <Link onClick={closeDialog} to="learning" smooth={smoothScroll} duration={scrollDuration}>
              Learning
            </Link>
          </li>
          <li className="hover:text-sky-300 py-6 text-4xl">
            <Link onClick={closeDialog} to="work" smooth={smoothScroll} duration={scrollDuration}>
              Work
            </Link>
          </li>
          <li className="hover:text-sky-300 py-6 text-4xl">
            <Link onClick={closeDialog} to="contact" smooth={smoothScroll} duration={scrollDuration}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </dialog>
  );
};
