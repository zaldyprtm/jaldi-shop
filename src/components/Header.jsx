import React, { useEffect, useRef, useState } from "react";
import { faHamburger, faSignIn, faStore, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/Header.css";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsSearchOpen(false)
        }
        if (!event.target.classList.contains("hamburger-menu")) {
            setIsOpen(false)
        }
    }
    window.addEventListener("click", handleOutClick)
    return () => {
        window.removeEventListener("click", handleOutClick)
    }
    
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery(""); // Clear search query when opening search
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Implement search logic here
  };

  return (
    <>
      <header className="bg-indigo-500 h-12 rounded-b-lg bg-transparent border border-sky-800">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between relative">
            <h1 className="uppercase font-bold text-md text-emerald-200 hover:text-white transition ease-in-out duration-300 absolute top-[2px]">
              fake store <span> <FontAwesomeIcon icon={faStore} /> </span>
            </h1>
            <div className="flex items-center absolute top-[3.1px] left-[310px]" ref={searchRef}>
              <button
                className="text-white focus:outline-sky-400 mr-2"
                onClick={toggleSearch}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
              {isSearchOpen && (
              <div className={`search-input ${isSearchOpen ? "open" : ""}`}>
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-slate-300 rounded-md px-2 text-black w-36 right-[30px] top-[0.8px] absolute focus:outline-1 outline-sky-500"
              />
            </div>
              )}
            </div>
          </div>

          <div className="flex items-center px-4 text-white">
            <button className="block lg:hidden absolute right-4 top-[10px] hamburger-menu" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faHamburger} />
            </button>

            {isOpen && (
              <nav id="nav-menu" className="absolute shadow-md rounded-lg max-w-[150px] w-[150px] transition-all top-14 left-56 duration-500 ease-in-out bg-transparent border border-sky-500 z-[9999]">
                <ul className="block ">
                  <li className="group text-sky-200 px-4 font-bold uppercase text-sm group-hover:text-white">Home</li>
                  <li className="group text-sky-200 px-4 font-bold uppercase text-sm group-hover:text-white">
                    <button className="mt-1"><span className="mr-2">LOGIN</span><FontAwesomeIcon icon={faSignIn} /></button>
                  </li>
                  <li className="group text-sky-200 px-4 font-bold uppercase mb-1 text-sm group-hover:text-white mt-1">
                    <span>Tentang</span>
                  </li>
                </ul>
              </nav>
            )}

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
