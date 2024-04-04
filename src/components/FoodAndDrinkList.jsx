import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/FoodAndDrinkList.css';

const FoodAndDrinkList = () => {
  const [foodAndDrinkList, setFoodAndDrinkList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Change the number of items per page as needed
  const [pageMargin] = useState(5); // Change the page margin as needed

  useEffect(() => {
    const fetchFoodAndDrinkData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        const drinkData = response.data.drinks;
        setFoodAndDrinkList(drinkData);
        console.log(drinkData);
      } catch (error) {
        console.error('Error fetching food and drink data:', error);
      }
    };

    fetchFoodAndDrinkData();
  }, []);

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodAndDrinkList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const numPages = Math.ceil(foodAndDrinkList.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <p className='mb-2 -mt-3 font-semibold'>nikmati berbagai menu fresh drink terbaik kami</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 shadow-lg ">
        {currentItems.map((item) => (
          <div key={item.idDrink} className="bg-white rounded-lg shadow-md p-4 text-black outline-dotted outline-sky-600">
            <img src={item.strDrinkThumb} alt={item.strDrink} className="item-image w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-bold mb-2">{item.strDrink}</h2>
            <p className="text-black">{item.strCategory}</p>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.min(numPages, pageMargin) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className="mx-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm md:text-base text-black font-bold">
            {index + 1}
          </button>
        ))}
        {numPages > pageMargin && (
          <button onClick={() => paginate(pageMargin + 1)} className="mx-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm md:text-base text-black font-bold">
            &raquo;
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodAndDrinkList;
