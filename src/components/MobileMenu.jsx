import { Link } from 'react-scroll';

export const MobileMenu = ({ handleClick, nav }) => {
  const scrollDuration = 500;
  const smoothScroll = true;

  return (
    <>
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={smoothScroll} duration={scrollDuration}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={smoothScroll} duration={scrollDuration}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={smoothScroll} duration={scrollDuration}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="learning" smooth={smoothScroll} duration={scrollDuration}>
            Learning
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={smoothScroll} duration={scrollDuration}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={smoothScroll} duration={scrollDuration}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};
