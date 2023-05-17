import React, { useContext } from "react";
import { DataContext } from "../App";
import Product from "./Product";

const BestDeals = () => {
  const data = useContext(DataContext);
  const newData = [...data];

  function HighestRating(objectsArray) {
    const sortedArray = objectsArray.sort((a, b) => b.rating - a.rating);
    const topFourObjects = sortedArray.slice(0, 4);
    return topFourObjects;
  }
  const highestRatio = HighestRating(newData);

  return (
    <div className="container mx-auto px-auto pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Beast Deals
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {highestRatio.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
