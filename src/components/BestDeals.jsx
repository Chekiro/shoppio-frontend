import React from "react";
import Product from "./Product";
import data from "../data/data";



const BestDeals = () => {


  function topFourObjectsWithHighestRating(objectsArray) {
    // Sortuj tablicę obiektów po polu rating, od największego do najmniejszego.
    const sortedArray = objectsArray.sort((a, b) => b.rating - a.rating);
    
    // Twórz nową tablicę i przypisz do niej pierwsze cztery obiekty z posortowanej tablicy.
    const topFourObjects = sortedArray.slice(0, 4);
    
    // Zwróć nową tablicę z czterema obiektami o największym polu rating.
    return topFourObjects;
  }

  const highestRatio = topFourObjectsWithHighestRating(data)
  console.log(highestRatio);

  return (
    <div className="container mx-auto px-auto pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Beast Deals
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
      {highestRatio.map((item)=>(
          <Product key={item.id} data={item} />
        ))}
        
      </div>
    </div>
  );
};

export default BestDeals;
