import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodAndDrinkListItem from './FoodAndDrinkListItem';

const FoodAndDrinkList = () => {
  const [foodAndDrinkList, setFoodAndDrinkList] = useState([]);
  const [filteredFoodAndDrinkList, setFilteredFoodAndDrinkList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Alcoholic'); // Default filter type

  useEffect(() => {
    const fetchFoodAndDrinkData = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filterType}`);
        const drinkData = response.data.drinks;
        setFoodAndDrinkList(drinkData);
        setFilteredFoodAndDrinkList(drinkData);
        console.log(drinkData);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <p className='text-base mb-2 -mt-2 font-semibold'>Nikmati berbagai menu fresh drink terbaik kami</p>
      <div className="flex justify-between h-[32px] mb-4">
        <input
          type="text"
          placeholder="Cari menu..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="block px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <div className='flex items-center mt-2 mb-2 justify-center'>
          <button onClick={() => handleFilterChange('Alcoholic')} className={`w-[70px]  py-1 rounded-md ${filterType === 'Alcoholic' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'}`}><span className='text-xs'>Alcoholic</span></button>
          <button onClick={() => handleFilterChange('Non_Alcoholic')} className={`w-[50px] ml-2 h-[45px] rounded-md ${filterType === 'Non_Alcoholic' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'}`}> <span className='text-xs text-wrap -top-1'>Non-Alc</span> </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <FoodAndDrinkListItem key={item.idDrink} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.min(numPages, 5) }, (_, index) => (
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
