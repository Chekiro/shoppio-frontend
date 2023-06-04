import React from "react";
import Breadcrum from "../components/Breadcrum";
import { useContext, useState } from "react";
import Product from "../components/Product";
import { DataContext } from "../App";
import { FaTimes } from "react-icons/fa";

const Shop = () => {
  const { data } = useContext(DataContext);
  const sortedData = [...data];
  const categoryData = [...data];
  const [sorting, setSorting] = useState("default");
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const uniqueCategories = categoryData.reduce((acc, obj) => {
    if (!acc.some((item) => item.category === obj.category)) {
      const count = categoryData.filter(
        (item) => item.category === obj.category
      ).length;
      const name = obj.category.toLowerCase();
      acc.push({ category: obj.category, count, name });
    }
    return acc;
  }, []);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredCategories = sortedData.filter((obj) =>
    selectedCategories.includes(obj.category)
  );

  return (
    <>
      <Breadcrum name="Shop" />
      <div className="container mx-auto px-auto grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        <div className="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
          <div className="divide-gray-200 divide-y space-y-5 relative">
            <div className="relative">
              <div className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
                <FaTimes />
              </div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                {uniqueCategories.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      checked={selectedCategories.includes(item.category)}
                      onChange={() => handleCategoryChange(item.category)}
                      type="checkbox"
                      id={item.name}
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor={item.name}
                      className="text-gray-600 ml-3 cursor-pointer "
                    >
                      {item.category.charAt(0).toUpperCase() +
                        item.category.substring(1).toLowerCase()}
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">
                      ({item.count})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="max"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="ml-5 mb-4 flex items-center justify-between">
            <button className="bg-sky-400 border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-sky-400 transition lg:hidden text-sm mr-3 focus:outline-none">
              Filter
            </button>
            <select
              value={sorting}
              onChange={handleSortingChange}
              className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-sky-400 focus:border-sky-400"
            >
              <option value="default">Default sorting</option>
              <option value="priceLow">Price low-high</option>
              <option value="priceHigh">Price high-low</option>
              <option value="latestProduct">Latest product</option>
              <option value="mostRating">Most Rating</option>
            </select>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
            {filteredCategories.length > 0
              ? filteredCategories.map((item) => (
                  <Product key={item.id} data={item} />
                ))
              : sortedData.map((item) => <Product key={item.id} data={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
