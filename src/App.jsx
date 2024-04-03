import React, { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Barang from './components/Barang';
import Footer from './components/Footer';

const App = () => {


  return (
    <>
      <div>
        <Header />
        
      </div>
       <div>
       <Barang />
     </div>

     <Footer />
        
 
      
      {/* Contoh button untuk login */}
      
    </>
  );
};

export default App;
