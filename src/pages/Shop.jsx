import React from "react";
import Breadcrum from "../components/Breadcrum";
import SidebarShop from "../components/SidebarShop";
import { useContext, useState } from "react";
import Product from "../components/Product";
import { DataContext } from "../App";

const Shop = () => {
  const data = useContext(DataContext);
  const sortedData = [...data];
  const [sorting, setSorting] = useState("default");

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  if (sorting === "latestProduct") {
    sortedData.sort((a, b) => b.id - a.id);
  }
  if (sorting === "priceHigh") {
    sortedData.sort((a, b) => b.discount - a.discount);
  }
  if (sorting === "priceLow") {
    sortedData.sort((a, b) => a.discount - b.discount);
  }
  if (sorting === "mostRating") {
    sortedData.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <Breadcrum name="Shop" />
      <div className="container mx-auto px-auto grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        <SidebarShop />
        <div className="col-span-3">
          <div className="mb-4 flex items-center">
            <button className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-sky-400 transition lg:hidden text-sm mr-3 focus:outline-none">
              Filter
            </button>
            <select
              value={sorting}
              onChange={handleSortingChange}
              className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            >
              <option value="default">Default sorting</option>
              <option value="priceLow">Price low-high</option>
              <option value="priceHigh">Price high-low</option>
              <option value="latestProduct">Latest product</option>
              <option value="mostRating">Most Rating</option>
            </select>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
            {sortedData.map((item) => (
              <Product key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
