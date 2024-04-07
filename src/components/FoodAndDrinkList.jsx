import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodAndDrinkListItem from './FoodAndDrinkListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const FoodAndDrinkList = () => {
  const [foodAndDrinkList, setFoodAndDrinkList] = useState([]);
  const [filteredFoodAndDrinkList, setFilteredFoodAndDrinkList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('ordinary');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // State to control cart visibility
  const [showModalPesanan, setShowModalPesanan] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const fetchFoodAndDrinkData = async () => {
      try {
        let filter = '';
        if (filterType === 'ordinary') {
          filter = 'Ordinary_Drink';
        } else if (filterType === 'cocktail') {
          filter = 'Cocktail';
        }
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`);
        const drinkData = response.data.drinks;
        setFoodAndDrinkList(drinkData);
        setFilteredFoodAndDrinkList(drinkData);
      } catch (error) {
        console.error('Error fetching food and drink data:', error);
      }
    };

    fetchFoodAndDrinkData();
  }, [filterType]);

  useEffect(() => {
    const filteredList = foodAndDrinkList.filter(item =>
      item.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoodAndDrinkList(filteredList);
  }, [searchTerm, foodAndDrinkList]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoodAndDrinkList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const numPages = Math.ceil(filteredFoodAndDrinkList.length / itemsPerPage);

  const handleSearch = (query) => {
    setSearchTerm(query);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Here you can implement the logic for checkout process, e.g., redirecting to a checkout page,
    // sending the cart items to a payment gateway, etc.
    console.log("Checkout", cartItems);
    // For demonstration, let's clear the cart after checkout
    setCartItems([]);
  };

  const openModal = () => {
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  
  const openModalPesanan = () => {
    setShowModalPesanan(true);
  };
  
  const closeModalPesanan = () => {
    setShowModalPesanan(false);
  };
  
  const FoodAndDrinkList = ({ cartItems, setCartItems, openModalPesanan }) => {
    // ...
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <p className='text-base mb-2 -mt-2 font-semibold'>Nikmati berbagai menu fresh drink terbaik kami</p>
      <div className="flex justify-between h-[40px] mb-4">
        <input
          type="text"
          placeholder="Cari menu..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="block px-4 w-[140px] py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 md:w-[350px]"
        />
        <div className='flex items-center mr-1 mt-2 mb-2 '>
          <button onClick={() => handleFilterChange('ordinary')} className={`w-[100px] py-1 rounded-md ${filterType === 'ordinary' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'}`}><span className='text-xs'>Ordinary Drink</span></button>
          <button onClick={() => handleFilterChange('cocktail')} className={`w-[100px] h-[30px] ml-2 rounded-md ${filterType === 'cocktail' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'}`}> <span className='text-xs  -top-1'>Cocktail</span> </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {currentItems.map((item) => (
          <div key={item.idDrink} className="relative">
            <FoodAndDrinkListItem item={item} />
            <button
              className="absolute top-0 right-0 m-2 px-2 py-1 bg-indigo-500 text-white rounded-md"
              onClick={() => addToCart(item)}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.min(numPages, 4) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className="mx-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm md:text-base text-black font-bold">
            {index + 1}
          </button>
        ))}
{currentPage < numPages && (
  <button onClick={() => paginate(currentPage + 1)} className="mx-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm md:text-base text-black font-bold">
    &raquo;
  </button>
)}

      </div>

      {showModal && (
  <div className="fixed inset-0 z-50 backdrop-filter backdrop-blur-sm overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg ">
      <h2 className="text-xl text-black font-bold mb-4">Pesanan Anda</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="mb-2 text-black">
           <img src={item.strDrinkThumb} alt={item.strDrink} className='w-[30px] rounded-full' />
            <span className='text-md font-semibold'>{item.strDrink}</span>
          
            <button className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded-md" onClick={() => removeItem(index)}>Remove</button>

          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-4" onClick={handleCheckout}>Checkout</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>Close</button>
      </div>
    </div>
  </div>
)}

      {cartItems.length > 0 && (
        <div className="mt-4 text-center ">
       <button onClick={openModal} className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"> Pesanan Anda ({cartItems.length})</button>

          {showCart && (
            <div className="mt-2 backdrop-filter backdrop-blur-sm inset-0 absolute">
              <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="mb-1">{item.strDrink}</li>
                ))}
              </ul>
              <button onClick={handleCheckout} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Checkout</button>
            </div>
          )}
        </div>
      )}
      {showModalPesanan && (
  <Mod closeModal={closeModalPesanan}>
    <div className="mt-2">
      <h2 className="text-xl text-black font-bold mb-4">Pesanan Anda</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="mb-2 text-black">
            <img
              src={item.strDrinkThumb}
              alt={item.strDrink}
              className="w-[30px] rounded-full"
            />
            <span className="text-md font-semibold">{item.strDrink}</span>

            <button
              className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded-md"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-4"
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={closeModalPesanan}
        >
          Close
        </button>
      </div>
    </div>
  </Mod>
)}

    </div>

  );
};

export default FoodAndDrinkList;
