import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactIMG from '../assets/react.png';
import NextJs from '../assets/NextJs.png';
import TailwindCss from '../assets/tailwind_css.png';
import { Skill } from './Skill';

export const Skills = () => {
  const skills = [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'JavaScript', icon: JavaScript },
    { name: 'React', icon: ReactIMG },
    { name: 'Next JS', icon: NextJs },
    { name: 'Tailwind CSS', icon: TailwindCss },
  ];

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="inline text-4xl text-gray-300 border-b-4 border-pink-600">Acquired Skills</p>
          <p className="py-4">These are the technologies I am the most comfortable with :</p>
        </div>
        <div className="sm:grid-cols-3 grid w-full grid-cols-2 gap-4 py-6 text-center">
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
