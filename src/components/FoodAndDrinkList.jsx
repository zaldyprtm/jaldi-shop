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
  const [filterType, setFilterType] = useState('ordinary'); // Default filter type
  const [cartItems, setCartItems] = useState([]); // State to store cart items

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

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
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
        {numPages > 5 && (
          <button onClick={() => paginate(6)} className="mx-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm md:text-base text-black font-bold">
            &raquo;
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodAndDrinkList;
