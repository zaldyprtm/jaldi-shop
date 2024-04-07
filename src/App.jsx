import React, { useState } from 'react';
import './App.css';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Slide from './components/Slide';
import FoodAndDrinkList from './components/FoodAndDrinkList';

const App = () => {
  const [userName, setUserName] = useState(""); // State untuk menyimpan nama pengguna
  const [inputName, setInputName] = useState(""); // State untuk menyimpan input nama sementara

  // Fungsi untuk menangani perubahan pada input nama
  const handleNameChange = (event) => {
    setInputName(event.target.value); // Mengupdate state inputName
  };

  // Fungsi untuk menangani submit nama
  const handleSubmit = () => {
    setUserName(inputName.trim()); // Mengupdate state userName dengan nama yang diinput
  };

  return (
    <>
      <div>
        <Header />
        <Slide />
        {/* Form untuk input nama */}
        {!userName && (
          <div className="mt-4 px-4">
            <label htmlFor="userName" className="block mb-2">Haloo selamat datang di kedai kami😎 sebelum memesan pastikan masukan nama kamu yaa...😁</label>
            <input
              type="text"
              id="userName"
              value={inputName}
              onChange={handleNameChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
            {/* Tombol submit */}
            <button onClick={handleSubmit} className="px-4 py-2 bg-indigo-500 text-white rounded-md mt-2 hover:bg-indigo-600">Submit Nama</button>
          </div>
        )}
        {/* Pesan selamat datang setelah nama di-submit */}
        {userName && <p className='mt-4 px-4 font-semibold '>Halo, {userName}! 😎, yuk berbelanja di kedai kami dan nikmati berbagai menu pilihan.</p>}
        <FoodAndDrinkList />
      </div>
      <div></div>
      <div>  
        <Footer />
      </div>
    </>
  );
};

export default App;
