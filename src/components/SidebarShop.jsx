import React from "react";
import { FaTimes } from "react-icons/fa";
import { DataContext } from "../App";
import { useContext } from "react";
const SidebarShop = () => {
  const data = useContext(DataContext);

  const uniqueCategories = data.reduce((acc, obj) => {
    if (!acc.some((item) => item.category === obj.category)) {
      const count = data.filter(
        (item) => item.category === obj.category
      ).length;
      const name = obj.category.toLowerCase();
      acc.push({ category: obj.category, count, name });
    }
    return acc;
  }, []);

  return (
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
  );
};

export default SidebarShop;
