import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodAndDrinkList = () => {
  const [foodAndDrinkList, setFoodAndDrinkList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Change the number of items per page as needed

  useEffect(() => {
    const fetchFoodAndDrinkData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
        const drinkData = response.data.drinks;
        setFoodAndDrinkList(drinkData);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <div key={item.idDrink} className="bg-white rounded-lg shadow-md p-4 text-black">
            <img src={item.strDrinkThumb} alt={item.strDrink} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-bold mb-2">{item.strDrink}</h2>
            <p className="text-gray-600">{item.strCategory}</p>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <ul className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(foodAndDrinkList.length / itemsPerPage) }, (_, index) => (
          <li key={index} className="mx-2">
            <button onClick={() => paginate(index + 1)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md">
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodAndDrinkList;
