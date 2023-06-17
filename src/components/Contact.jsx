import React from 'react';

export const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 ">
      <form
        method="POST"
        action="https://getform.io/f/62705f5e-1a70-4374-b0bb-bbdf52735b5e"
        className="flex flex-col max-w-[600px] w-full"
        data-aos="flip-down"
        data-aos-offset="300"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">Contact</p>
          <p className="py-4 text-gray-300">Submit the form below or send an e-mail to armengaud.roch@live.fr</p>
        </div>
        <input type="text" placeholder="Name" name="name" className="bg-[#ccd6f6] p-2" />
        <input type="email" placeholder="Email" name="email" className="my-4 p-2 bg-[#ccd6f6]" />
        <textarea name="message" rows="8" className="bg-[#ccd6f6] p-2" placeholder="Message"></textarea>
        <button className="hover:bg-pink-600 hover:border-pink-600 z-10 flex items-center px-4 py-3 mx-auto mt-8 text-white border-2">
          Contact me
        </button>
      </form>
    </div>
  );
};
