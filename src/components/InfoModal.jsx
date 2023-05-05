export const InfoModal = ({ modal, toggleModal, stacks }) => {
  return (
    <>
      {modal && (
        <div onClick={toggleModal} className="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full">
          <div className="bg-[#0a192f] fixed top-0 bottom-0 left-0 right-0 w-full h-full">
            <div className="absolute top-[30%] left-[50%] -translate-x-1/2 leading-[1.4] bg-white px-40 py-40 rounded-md">
              <h2 className="text-xl font-bold text-gray-700">Stacks used for this project :</h2>
              <p className="py-6 text-center text-gray-700">{stacks}</p>
              <button className="absolute top-[10px] right-[10px] px-2 py-2 bg-pink-600 rounded-md hover:opacity-90" onClick={toggleModal}>
                <span className="text-black">&#x2716;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
