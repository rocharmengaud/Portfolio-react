import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactIMG from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import TailwindCSS from '../assets/tailwind_css.png';
import TypeScript from '../assets/TypeScript.png';

export const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="inline text-4xl text-gray-300 border-b-4 border-pink-600">Skills</p>
          <p className="py-4">These are the technologies I am familiar with</p>
        </div>

        <div className="sm:grid-cols-3 grid w-full grid-cols-2 gap-4 py-6 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="Html icon"></img>
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="Css icon"></img>
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon"></img>
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactIMG} alt="React icon"></img>
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="FireBase icon"></img>
            <p className="my-4">FireBase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon"></img>
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TailwindCSS} alt="TailwindCSS icon"></img>
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="Typescript icon"></img>
            <p className="my-4">Typescript</p>
          </div>
        </div>
      </div>
    </div>
  );
};
