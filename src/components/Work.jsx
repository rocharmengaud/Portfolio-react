import React from 'react';
import WorkIMG from '../assets/projects/workImg.jpeg';
import RealEstate from '../assets/projects/realestate.jpg';
import { WorkItem } from './WorkItem';

export const Work = () => {
  const workItems = [
    {
      img: WorkIMG,
      codeURL: 'https://github.com/rocharmengaud/twitter-clone',
      demoURL: '/',
      name: 'Twitter Clone',
      stacks: 'React, Tailwind, Next, Prisma, MongoDB, Axios, NextAuth & Vercel',
      id: 1,
    },
    {
      img: RealEstate,
      codeURL: 'https://github.com/rocharmengaud/netflix-clone',
      demoURL: '/',
      name: 'Netflix Clone',
      stacks: 'React, Tailwind, Next, Firebase, & Vercel',
      id: 2,
    },
    {
      img: WorkIMG,
      codeURL: 'https://github.com/rocharmengaud/Weather-app',
      demoURL: '/',
      name: 'Weather app',
      stacks: 'React, Next, Typescript, Tailwind, Fetch & Vercel',
      id: 3,
    },
    {
      img: RealEstate,
      codeURL: 'https://github.com/rocharmengaud/Shopping-app',
      demoURL: '/',
      name: 'Shopping app',
      stacks: 'Vite, React, TypeScript, React-Bootstrap, Bootstrap css & Vercel',
      id: 4,
    },
    {
      img: WorkIMG,
      codeURL: 'https://github.com/rocharmengaud/Kasa',
      demoURL: '/',
      name: 'Kasa (AirBNB)',
      stacks: 'React, Tailwind, JSON Data & Vercel',
      id: 5,
    },
    {
      img: RealEstate,
      codeURL: 'https://github.com/rocharmengaud/Sportsee',
      demoURL: '/',
      name: 'Sportsee Stats',
      stacks: 'React, Recharts, Proptypes, Fetch w/ classes & Vercel',
      id: 6,
    },
  ];

  return (
    <div name="work" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">Work</p>
          <p className="py-6">Check out all my recent work</p>
        </div>
        {/* Container */}
        <div className="sm:grid-cols-2 md:grid-cols-3 grid gap-4">
          {workItems.map((workItem) => (
            <WorkItem key={workItem.id} {...workItem} />
          ))}
        </div>
      </div>
    </div>
  );
};
