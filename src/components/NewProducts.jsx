import React, { useContext } from "react";
import { DataContext } from "../App";
import Product from "./Product";

const NewProducts = () => {
  const data = useContext(DataContext);
  const populatData = data.slice(0, 8);

  return (
    <div className="container mx-auto px-auto pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        News Products
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {populatData.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
