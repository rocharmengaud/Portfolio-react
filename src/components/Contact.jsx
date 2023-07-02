import React, { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      e.target.submit();
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/62705f5e-1a70-4374-b0bb-bbdf52735b5e"
        className="flex flex-col max-w-[600px] w-full"
        data-aos="fade-in"
        data-aos-offset="300"
        data-aos-duration="1500"
        data-aos-delay="200"
        onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">Contact</p>
          <p className="py-4 text-gray-300">Submit the form below or send an e-mail to armengaud.roch@live.fr</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          rows="8"
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="hover:bg-pink-600 hover:border-pink-600 z-10 flex items-center px-4 py-3 mx-auto mt-8 text-white border-2" type="submit">
          Contact me
        </button>
      </form>
    </div>
  );
};
