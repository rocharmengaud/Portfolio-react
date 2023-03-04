import React from 'react';
import WorkIMG from '../assets/projects/workImg.jpeg';
import RealEstate from '../assets/projects/realestate.jpg';

export const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] text-gray-300 w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">Work</p>
          <p className="py-6">Check out all my recent work</p>
        </div>
        {/* Container */}
        <div className="sm:grid-cols-2 md:grid-cols-3 grid gap-4">
          {/* The reason backticks are needed here instead of regular quotes is because the style property is a JavaScript object, 
        and the backgroundImage property needs to be written as a CSS-style string with a URL value. */}
          {/* content-div is a custom property set in index.css */}
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${WorkIMG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="group-hover:opacity-100 opacity-0">
              <span className="text-2xl font-bold tracking-wider text-white">PLACEHOLDER</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="group-hover:opacity-100 opacity-0">
              <span className="text-2xl font-bold tracking-wider text-white">PLACEHOLDER</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkIMG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="group-hover:opacity-100 opacity-0">
              <span className="text-2xl font-bold tracking-wider text-white">PLACEHOLDER</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="group-hover:opacity-100 opacity-0">
              <span className="text-2xl font-bold tracking-wider text-white">PLACEHOLDER</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkIMG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="group-hover:opacity-100 opacity-0">
              <span className="text-2xl font-bold tracking-wider text-white">PLACEHOLDER</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="group-hover:opacity-100 opacity-0">
              <span className="text-2xl font-bold tracking-wider text-white">PLACEHOLDER</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
