import React, { useEffect, useState } from "react";
import { faHamburger, faSignIn, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal"; // Import komponen Modal
import "../components/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
            className="block lg:hidden  absolute right-4 top-[10px] hamburger-menu text-2xl opacity-75 hover:opacity-100 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {isOpen && (
            <nav
              id="nav-menu"
              className="absolute shadow-md rounded-lg max-w-[150px] w-[150px] transition-all top-14 left-56 duration-500 ease-in-out  border border-sky-500 z-[9999] h-[150px]"
            >
              <ul className="block mt-6 px-4 text-center">
              <li className="group text-sky-200 px-4 font-bold uppercase text-lg group-hover:text-white hover:text-white transition-all ease-in-out duration-300">
                  <button className="">
                    <span className="mr-2 ">LOGIN</span>
                    <FontAwesomeIcon icon={faSignIn} />
                  </button>
                </li>

                <li className="group text-sky-200 px-4 font-bold uppercase text-lg group-hover:text-white hover:text-white transition-all ease-in-out duration-300 mt-2">
                  Home
                </li>

                <li className="group text-sky-200 px-4 font-bold uppercase mb-1 text-lg group-hover:text-white mt-2">
                  <button className="uppercase hover:text-white transition-all ease-in-out duration-300" onClick={toggleModal}>Tentang</button>
                </li>
              </ul>
            </nav>
          )}
        </div>

        {/* Render Modal component if showModal is true */}
        {showModal && <Modal toggleModal={toggleModal} />}
      </header>
    </>
  );
};

export default Header;
