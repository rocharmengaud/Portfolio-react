import React from 'react';
import { Link } from 'react-scroll';
import Lottie from 'lottie-react';
import animationData from '../assets/workAnimation.json';

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div
        className="max-w-[1000px] md:max-h-full max-h-[600px] h-full mx-auto px-8 flex flex-col justify-center"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="relative z-10">
          <p className="text-white">Hello, my name is</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#ccd6f6]">Roch ARMENGAUD</h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0]">I'm a junior front-end developer</h2>
          <p className="text-white py-4 max-w-[770px]">
            I just graduated from {''}
            <a
              href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"
              className="hover:underline text-[#219ebc] cursor-pointer"
            >
              OpenClassRoom's front-end javascript react course
            </a>{' '}
            and I am now looking for a job
          </p>
        </div>
        <div className="z-10">
          <button className="hover:bg-pink-600 hover:border-pink-600 z-50 flex items-center px-6 py-3 my-2 text-white border-2">
            <Link to="work" smooth={true} duration={500}>
              Click to scroll to my work
            </Link>
          </button>
        </div>
        <Lottie
          animationData={animationData}
          className="absolute sm:left-[35%] sm:w-[400px] sm:h-[400px] right-0 top-[50%] h-[400px] w-[250px] opacity-50"
          loop
          autoPlay
        />
      </div>
    </div>
  );
};
