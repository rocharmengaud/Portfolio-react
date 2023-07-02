import React, { useEffect, useState } from 'react';
import { InfoModal } from './InfoModal';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const Carousel = ({ workItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="sm:max-w-[600px] max-w-[300px] sm:h-[600px] h-[400px] w-full relative mx-auto flex flex-col justify-center items-center">
        <h1 className="sm:text-4xl text-2xl font-bold text-gray-300">{workItems[currentIndex].name}</h1>
        <div
          style={{ backgroundImage: `url(${isMobile ? workItems[currentIndex].mobileImg : workItems[currentIndex].img})`, filter: 'blur(1px)' }}
          className="rounded-2xl w-full h-full bg-left-top bg-cover shadow-lg shadow-[#040c16] relative flex justify-center items-center duration-500 my-4"
        ></div>
        <div className="sm:gap-12 flex flex-col items-center gap-4 absolute top-[50%]">
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

        <div className="absolute top-[50%] -left-6 sm:left-2 rounded-full sm:p-2 p-1 bg-black/50 text-white cursor-pointer hover:opacity-80">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="absolute top-[50%] -right-6 sm:right-2 rounded-full sm:p-2 p-1 bg-black/50 text-white cursor-pointer hover:opacity-80">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="flex justify-center w-full">
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
