import React from 'react';
import Firebase from '../assets/firebase.png';
import MongoDB from '../assets/mongo.png';
import MaterialUI from '../assets/MUI.png';
import Redux from '../assets/reduxlogo.png';
import Prisma from '../assets/Prisma.png';
import TypeScript from '../assets/TypeScript.png';
import { Skill } from './Skill';

export const Learning = () => {
  const skills = [
    { name: 'TypeScript', icon: TypeScript },
    { name: 'Material UI', icon: MaterialUI },
    { name: 'Redux', icon: Redux },
    { name: 'Prisma', icon: Prisma },
    { name: 'Mongo DB', icon: MongoDB },
    { name: 'Firebase', icon: Firebase },
  ];

  return (
    <div name="learning" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div>
          <p className="inline text-4xl text-gray-300 border-b-4 border-pink-600">Learning</p>
          <p className="py-4">These are the technologies I recently used and still learning about them :</p>
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
