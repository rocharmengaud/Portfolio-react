import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Social } from './Social';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Socials = () => {
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
    <div className="fixed bottom-0 left-0 top-[80%] sm:top-[75%] z-10">
      <ul>
        {social.map((social) => (
          <Social key={social.name} {...social} />
        ))}
      </ul>
    </div>
  );
};
