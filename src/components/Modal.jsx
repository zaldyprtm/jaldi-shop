import React from "react";

const Modal = ({ toggleModal }) => {
  const handleCloseModal = () => {
    toggleModal(); // Memanggil fungsi toggleModal yang diterima sebagai prop
  };

  return (
    <>
      <div className="fixed top-0 mx-auto w-[400px] h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 bg-transparent">
        <div className="bg-white p-8 w-[350px] rounded-3xl shadow-md backdrop-blur-xs">
          <h2 className="text-xl uppercase text-black font-bold mb-4">Tentang kedai kami</h2>
          <p className="text-gray-700">Halo Folks.....☕</p>
          <p className="text-gray-700">Selamat menikmati menu di kedai kami</p>
          <p className="text-gray-700">disini kami menyediakan berbagai macam menu fresh drink yang segar.</p>
          <p className="text-gray-700">jangan lupa order menu kami yaa....😎</p>
          
          <button
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg"
            onClick={handleCloseModal} // Memanggil handleCloseModal saat tombol "Close" ditekan
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
