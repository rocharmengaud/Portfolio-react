import React from 'react';

import KasaImg from '../assets/projects/KasaWeb.png';
import ShoppingAppImg from '../assets/projects/ShoppingAppImg.png';
import WeatherAppImg from '../assets/projects/WeatherAppImg.png';
import NetflouixImg from '../assets/projects/NetflouixImg.png';
import TwitturImg from '../assets/projects/TwitturWeb.png';
import Loading from '../assets/projects/loading.jpg';

import KasaMobileImg from '../assets/projects-mobile/kasa-mobile.png';
import ShoppingAppMobileImg from '../assets/projects-mobile/shoppingApp-mobile.png';
import WeatherAppMobileImg from '../assets/projects-mobile/weatherApp-mobile.png';
import NetflouixMobileImg from '../assets/projects-mobile/netflouix-mobile.png';
import TwitturMobileImg from '../assets/projects-mobile/twittur-mobile.png';

import { Carousel } from './Carousel';

export const Work = () => {
  const workItems = [
    {
      img: NetflouixImg,
      mobileImg: NetflouixMobileImg,
      codeURL: 'https://github.com/rocharmengaud/netflix-clone',
      demoURL: 'https://netflouix-rocharmengaud.vercel.app/',
      name: 'Netflix Clone',
      stacks: 'React, Tailwind, Next, Firebase, & Vercel',
      id: 1,
    },
    {
      img: TwitturImg,
      mobileImg: TwitturMobileImg,
      codeURL: 'https://github.com/rocharmengaud/twitter-clone',
      demoURL: 'https://twittur-rocharmengaud.vercel.app/',
      name: 'Twitter Clone',
      stacks: 'React, Tailwind, Next, Prisma, MongoDB, Axios, NextAuth & Vercel',
      id: 2,
    },
    {
      img: WeatherAppImg,
      mobileImg: WeatherAppMobileImg,
      codeURL: 'https://github.com/rocharmengaud/Weather-app',
      demoURL: 'https://weather-app-rocharmengaud.vercel.app/',
      name: 'Weather App',
      stacks: 'React, Next, Typescript, Tailwind, Fetch & Vercel',
      id: 3,
    },
    {
      img: ShoppingAppImg,
      mobileImg: ShoppingAppMobileImg,
      codeURL: 'https://github.com/rocharmengaud/Shopping-app',
      demoURL: 'https://shopping-app-rocharmengaud.vercel.app/',
      name: 'Shopping App',
      stacks: 'Vite, React, TypeScript, React-Bootstrap, Bootstrap css & Vercel',
      id: 4,
    },
    {
      img: KasaImg,
      mobileImg: KasaMobileImg,
      codeURL: 'https://github.com/rocharmengaud/Kasa',
      demoURL: 'https://kasa-rocharmengaud.vercel.app/',
      name: 'Kasa (AirBNB)',
      stacks: 'React, Tailwind, JSON Data & Vercel',
      id: 5,
    },
    {
      img: Loading,
      mobileImg: Loading,
      codeURL: '/',
      demoURL: '/',
      name: 'Music Store',
      stacks: 'Work in progress',
      id: 6,
    },
  ];

  return (
    <div name="work" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      <div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
        data-aos="fade-in"
        data-aos-offset="300"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">Work</p>
          <p className="py-6">Check out all my recent work :</p>
        </div>
        <Carousel workItems={workItems} />
      </div>
    </div>
  );
};
