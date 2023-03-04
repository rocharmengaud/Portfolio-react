import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className="text-white">Hello, my name is</p>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#ccd6f6]">Roch ARMENGAUD</h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0]">I'm a junior front-end developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[750px]">
          I just graduated from {''}
          <a
            href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"
            className="hover:underline text-[#219ebc] cursor-pointer"
          >
            OpenClassRoom's front-end javascript react course
          </a>{' '}
          {''}
          and now looking for a job
        </p>
        <div>
          {/* The group classname here is to make the rotate-90 effect apply when the user points the button too */}
          <button className="group hover:bg-pink-600 hover:border-pink-600 flex items-center px-6 py-3 my-2 text-white border-2">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
