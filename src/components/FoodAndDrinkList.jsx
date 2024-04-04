// src/components/FoodAndDrinkList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodAndDrinkList = () => {
  const [foodAndDrinkList, setFoodAndDrinkList] = useState([]);

  useEffect(() => {
    const fetchFoodAndDrinkData = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        const foodData = response.data.meals;
        setFoodAndDrinkList(foodData);
        console.log(foodData);
      } catch (error) {
        console.error('Error fetching food and drink data:', error);
      }
    };

    fetchFoodAndDrinkData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {foodAndDrinkList.map((item) => (
          <div key={item.idMeal} className="bg-white rounded-lg shadow-md p-4 text-black">
            <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-bold mb-2">{item.strMeal}</h2>
            <p className="text-gray-600">{item.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodAndDrinkList;
