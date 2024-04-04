import React, { useState } from 'react';
import './App.css';
import './index.css';
import './components/FoodAndDrinkList'
import Footer from './components/Footer';
import Header from './components/Header'
import Slide from './components/Slide';
import FoodAndDrinkList from './components/FoodAndDrinkList';


const App = () => {


  return (
    <>
      <div>
        <Header />
        <Slide />
        <FoodAndDrinkList />
      </div>
       <div>
    
     </div>

     <Footer />
      
    </>
  );
};

export default App;
