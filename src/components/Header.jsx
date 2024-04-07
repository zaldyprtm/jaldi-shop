import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal"; // Import komponen Modal
import "../components/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showPesan, setShowPesan] = useState(false);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!event.target.classList.contains("hamburger-menu")) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutClick);
    return () => {
      window.removeEventListener("click", handleOutClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const togglePesananModal = () => {
    setShowPesan(!showPesan);
  };

  return (
    <>
      <header className="bg-indigo-500 h-12 rounded-b-lg bg-transparent border border-sky-800">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between relative">
            <h1 className="uppercase font-bold text-xl text-emerald-200 hover:text-white transition ease-in-out duration-300 absolute top-[2px]">
              ZAL DRINKS <span> <FontAwesomeIcon icon={faStore} /> </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center px-4 text-white">
          <button
            className="block absolute right-4 top-[10px] hamburger-menu text-2xl opacity-75 hover:opacity-100 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {isOpen && (
            <nav
              id="nav-menu"
              className="absolute shadow-md rounded-lg max-w-[150px] w-[150px] transition-all top-14 left-56 duration-500 ease-in-out  border border-sky-500 z-[9999] h-[150px] lg:w-[250px] md:left-[900px]"
            >
              <ul className="block mt-6 px-4 text-center">
                <li className="group text-sky-200 px-4 font-bold uppercase text-lg group-hover:text-white hover:text-white transition-all ease-in-out duration-300 mt-2">
                  Home
                </li>
                
                <li className="group text-sky-200 px-4 font-bold uppercase mb-1 text-lg group-hover:text-white mt-2">
                  <button className="uppercase hover:text-white transition-all ease-in-out duration-300" onClick={togglePesananModal}>Pesanan</button>
                </li>

                <li className="group text-sky-200 px-4 font-bold uppercase mb-1 text-lg group-hover:text-white mt-2">
                  <button className="uppercase hover:text-white transition-all ease-in-out duration-300" onClick={toggleModal}>Tentang</button>
                </li>
              </ul>
            </nav>
          )}
        </div>

        {showModal && (
          <Modal toggleModal={toggleModal}>
            <div className="mt-2">
              <h2 className="text-lg font-semibold mb-2">Keranjang Belanja</h2>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </Modal>
        )}
        {/* {showPesan && (
          <Modal togglePesananModal={togglePesananModal} >
                          <div className="mt-2">
              <h2 className="text-lg font-semibold mb-2">Keranjang Belanja</h2>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>

          </Modal>
        )} */}

        {/* Add to Cart Buttons */}
        <div className="absolute top-0 right-0 mr-4 mt-2">
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
