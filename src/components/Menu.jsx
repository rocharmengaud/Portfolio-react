import { Link } from 'react-scroll';

export const Menu = () => {
  const scrollDuration = 500;
  const smoothScroll = true;

  return (
    <ul className="md:flex hidden">
      <li>
        {/* Using react-scroll dependencie */}
        {/* This to=home is refering to the menu=home on the homepage component first div prop */}
        <Link to="home" smooth={smoothScroll} duration={scrollDuration}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={smoothScroll} duration={scrollDuration}>
          About
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={smoothScroll} duration={scrollDuration}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="work" smooth={smoothScroll} duration={scrollDuration}>
          Work
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={smoothScroll} duration={scrollDuration}>
          Contact
        </Link>
      </li>
    </ul>
  );
};
