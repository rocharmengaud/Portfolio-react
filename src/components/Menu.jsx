import { Link } from 'react-scroll';

export const Menu = () => {
  const scrollDuration = 500;
  const smoothScroll = true;

  return (
    <ul className="md:flex hidden">
      <li className="hover:text-sky-300">
        {/* Using react-scroll dependencie */}
        {/* This to=home is refering to the menu=home on the homepage component first div prop */}
        <Link to="home" smooth={smoothScroll} duration={scrollDuration}>
          Home
        </Link>
      </li>
      <li className="hover:text-sky-300">
        <Link to="about" smooth={smoothScroll} duration={scrollDuration}>
          About
        </Link>
      </li>
      <li className="hover:text-sky-300">
        <Link to="skills" smooth={smoothScroll} duration={scrollDuration}>
          Skills
        </Link>
      </li>
      <li className="hover:text-sky-300">
        <Link to="learning" smooth={smoothScroll} duration={scrollDuration}>
          Learning
        </Link>
      </li>
      <li className="hover:text-sky-300">
        <Link to="work" smooth={smoothScroll} duration={scrollDuration}>
          Work
        </Link>
      </li>
      <li className="hover:text-sky-300">
        <Link to="contact" smooth={smoothScroll} duration={scrollDuration}>
          Contact
        </Link>
      </li>
    </ul>
  );
};
