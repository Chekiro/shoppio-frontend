import React from "react";
import Watch from "../assets/category-3.jpg";
import { FaSearch, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BestDeals = () => {
  return (
    <div className="container mx-auto px-auto pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Beast Deals
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        <div className="group rounded bg-white shadow overflow-hidden">
          <div className="relative">
            <img src={Watch} className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
                <FaSearch />
              </Link>
              <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
                <FaHeart />
              </Link>
            </div>
            <div className="pt-4 pb-3 px-4">
              <Link>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-sky-400 transition">
                  Rolex Submariner
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-roboto font-semibold">
                  $2900.00
                </p>
                <p className="text-sm text-gray-400 font-roboto line-through">
                  $5000.00
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(789)</div>
              </div>
            </div>
          </div>
          <Link className="block w-full py-1 text-center text-white bg-sky-400 border-2 border-sky-400 rounded-b hover:bg-transparent hover:text-black transition">
            Add to Cart
          </Link>
        </div>
        <div className="group rounded bg-white shadow overflow-hidden">
          <div className="relative">
            <img src={Watch} className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
                <FaSearch />
              </Link>
              <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
                <FaHeart />
              </Link>
            </div>
            <div className="pt-4 pb-3 px-4">
              <Link>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-sky-400 transition">
                  Rolex Submariner
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-roboto font-semibold">
                  $2900.00
                </p>
                <p className="text-sm text-gray-400 font-roboto line-through">
                  $5000.00
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(789)</div>
              </div>
            </div>
          </div>
          <Link className="block w-full py-1 text-center text-white bg-sky-400 border-2 border-sky-400 rounded-b hover:bg-transparent hover:text-black transition">
            Add to Cart
          </Link>
        </div>
        <div className="group rounded bg-white shadow overflow-hidden">
          <div className="relative">
            <img src={Watch} className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
                <FaSearch />
              </Link>
              <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
                <FaHeart />
              </Link>
            </div>
            <div className="pt-4 pb-3 px-4">
              <Link>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-sky-400 transition">
                  Rolex Submariner
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-roboto font-semibold">
                  $2900.00
                </p>
                <p className="text-sm text-gray-400 font-roboto line-through">
                  $5000.00
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(789)</div>
              </div>
            </div>
          </div>
          <Link className="block w-full py-1 text-center text-white bg-sky-400 border-2 border-sky-400 rounded-b hover:bg-transparent hover:text-black transition">
            Add to Cart
          </Link>
        </div>
        <div className="group rounded bg-white shadow overflow-hidden">
          <div className="relative">
            <img src={Watch} className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
                <FaSearch />
              </Link>
              <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
                <FaHeart />
              </Link>
            </div>
            <div className="pt-4 pb-3 px-4">
              <Link>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-sky-400 transition">
                  Rolex Submariner
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-roboto font-semibold">
                  $2900.00
                </p>
                <p className="text-sm text-gray-400 font-roboto line-through">
                  $5000.00
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(789)</div>
              </div>
            </div>
          </div>
          <Link className="block w-full py-1 text-center text-white bg-sky-400 border-2 border-sky-400 rounded-b hover:bg-transparent hover:text-black transition">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
