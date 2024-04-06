import React from 'react';
import '../components/FoodAndDrinkList.css'

const FoodAndDrinkListItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:mx-auto md:w-[400px] text-black item-container ">
      <img src={item.strDrinkThumb} alt={item.strDrink} className="w-full h-40 object-cover rounded-md mb-4 item-image md:w-[200px] md:mx-auto" />
      <h2 className="text-sm md:text-lg font-bold mb-2">{item.strDrink}</h2>
      <p className="text-black">{item.strCategory}</p>
    </div>
  );
};

export default FoodAndDrinkListItem;
