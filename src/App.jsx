import React, { useState } from 'react';
import './App.css';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Slide from './components/Slide';
import FoodAndDrinkList from './components/FoodAndDrinkList';


const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [showModalPesanan, setShowModalPesanan] = useState(false); // State untuk menunjukkan apakah modal pesanan ditampilkan

  const openModalPesanan = () => {
    setShowModalPesanan(true); // Set state menjadi true ketika ingin menampilkan modal
  };

  const closeModalPesanan = () => {
    setShowModalPesanan(false); // Set state menjadi false ketika ingin menyembunyikan modal
  };

  return (
    <>
      <div>
        <Header />
        <Slide />
        <FoodAndDrinkList
        />
      </div>
      <div></div>
      <div>  
        <Footer />
      </div>
    </>
  );
};

export default App;
