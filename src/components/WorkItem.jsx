import { useState } from 'react';
import { InfoModal } from './InfoModal';

// THIS COMPONENT IS NOT USED ANYMORE

// IT WAS A PLACEHOLDER FOR THE CAROUSEL DURING DEVELOPMENT

export const WorkItem = ({ img, codeURL, demoURL, name, stacks }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div
      /* The reason backticks are needed here instead of regular quotes is because the style property is a JavaScript object, 
      and the backgroundImage property needs to be written as a CSS-style string with a URL value. */
      // The linear gradient is here to directly control the opacity of the background image without affecting other elements within the component.
      style={{
        backgroundImage: `url(${img})`,
      }}
      /* the class 'content-div' is a custom property set in index.css */
      className="shadow-lg shadow-[#040c16] group container rounded-md content-div flex items-center justify-center"
    >
      {/* Hover effects */}
      <div className="group-hover:opacity-100 sm:flex-col sm:gap-8 sm:opacity-0 flex items-center gap-2">
        <span className="sm:text-2xl text-md sm:text-white sm:font-bold font-extrabold tracking-wider text-pink-600">{name}</span>
        <div className="flex">
          <a href={demoURL}>
            <button className="sm:px-2 sm:py-2 px-1 py-[2px] m-2 sm:text-lg text-md font-bold text-center text-gray-700 bg-white rounded-lg hover:opacity-[85%]">
              Demo
            </button>
          </a>
          <a href={codeURL}>
            <button className="sm:px-2 sm:py-2 px-1 py-[2px] m-2 sm:text-lg text-md font-bold text-center text-gray-700 bg-white rounded-lg hover:opacity-[85%]">
              Code
            </button>
          </a>
          <button
            onClick={toggleModal}
            className="sm:px-2 sm:py-2 px-1 py-[2px] m-2 sm:text-lg text-md font-bold text-center text-gray-700 bg-white rounded-lg hover:opacity-[85%]"
          >
            Infos
          </button>
        </div>
      </div>
      {modal && <InfoModal modal={modal} toggleModal={toggleModal} stacks={stacks} />}
    </div>
  );
};
