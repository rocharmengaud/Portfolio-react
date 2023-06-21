import React, { useState } from 'react';
import { InfoModal } from './InfoModal';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const Carousel = ({ workItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  const prevSlide = () => {
    const isFirstImg = currentIndex === 0;
    const newIndex = isFirstImg ? workItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastImg = currentIndex === workItems.length - 1;
    const newIndex = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToItem = (itemIndex) => {
    setCurrentIndex(itemIndex);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="sm:max-w-[600px] max-w-[300px] sm:h-[600px] h-[500px] w-full relative mx-auto flex flex-col justify-center items-center">
        <div
          style={{ backgroundImage: `url(${workItems[currentIndex].img})` }}
          className="rounded-2xl w-full h-full bg-left-top bg-cover shadow-lg shadow-[#040c16] relative flex justify-center items-center duration-500"
        >
          <div className="sm:gap-12 flex flex-col items-center gap-4">
            <h1 className="sm:text-4xl text-2xl font-bold text-pink-600">{workItems[currentIndex].name}</h1>
            <div className="sm:gap-6 flex justify-center gap-2">
              <a href={workItems[currentIndex].demoURL}>
                <button className="sm:px-8 sm:py-4 hover:bg-blue-400 hover:border-blue-500 px-3 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded">
                  Demo
                </button>
              </a>
              <a href={workItems[currentIndex].codeURL}>
                <button className="sm:px-8 sm:py-4 hover:bg-blue-400 hover:border-blue-500 px-3 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded">
                  Code
                </button>
              </a>
              <button
                onClick={toggleModal}
                className="sm:px-8 sm:py-4 hover:bg-blue-400 hover:border-blue-500 px-3 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded"
              >
                Infos
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[50%] left-0 sm:left-2 rounded-full sm:p-2 p-1 bg-black/10 text-white cursor-pointer hover:text-pink-600">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="absolute top-[50%] right-0 sm:right-2 rounded-full sm:p-2 p-1 bg-black/10 text-white cursor-pointer hover:text-pink-600">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="bottom-8 absolute flex justify-center w-full">
          {workItems.map((item, index) => (
            <div
              key={index}
              className={`text-2xl cursor-pointer ${currentIndex === index ? 'text-white' : 'text-gray-500'}`}
              onClick={() => goToItem(index)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {modal && <InfoModal modal={modal} toggleModal={toggleModal} stacks={workItems[currentIndex].stacks} />}
    </>
  );
};
