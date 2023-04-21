import React from "react";
import { Link } from "react-router-dom";
import HeadPhonesCategory from "../assets/category-1.jpg";
import PhoneCategory from "../assets/category-2.jpg";
import WatchCategory from "../assets/category-3.jpg";
import ChairCategory from "../assets/category-4.jpg";
import BedCategory from "../assets/category-5.jpg";
import SofaCategory from "../assets/category-6.jpg";

const Category = () => {
  return (
    <div className="container mx-auto px-auto pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
        <div className="relative group rounded-sm overflow-hidden">
          <img src={HeadPhonesCategory} className="w-full" />
          <Link
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
          >
            Headphones
          </Link>
        </div>
        <div className="relative group rounded-sm overflow-hidden">
          <img src={PhoneCategory} className="w-full" />
          <Link
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
          >
            Phones
          </Link>
        </div>
        <div className="relative group rounded-sm overflow-hidden">
          <img src={WatchCategory} className="w-full" />
          <Link
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
          >
            Watches
          </Link>
        </div>
        <div className="relative group rounded-sm overflow-hidden">
          <img src={ChairCategory} className="w-full" />
          <Link
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
          >
            Chairs
          </Link>
        </div>
        <div className="relative group rounded-sm overflow-hidden">
          <img src={BedCategory} className="w-full" />
          <Link
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
          >
            Beds
          </Link>
        </div>
        <div className="relative group rounded-sm overflow-hidden">
          <img src={SofaCategory} className="w-full" />
          <Link
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
          >
            Sofa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
