import React from 'react';

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 items-center">
          <div className="sm:text-right text-4xl font-bold">
            <p>Please, take a look around</p>
          </div>
          <div>
            <p>
              I'm looking for a front-end job, you can scroll down to see which technologies i'm familiar with and which am I learning. Also, feel
              free to click on any of my projects in the work section to visit the website or the associated coding repository
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
