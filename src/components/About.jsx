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
            <p>Hello, I'm Roch. Please, take a look around</p>
          </div>
          <div>
            <p>
              I'm looking for a front-end job, you can take a look at which technologies i'm familiar with and also click on my projects to open them
              up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
