import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import GameCat from "../assets/gam_cat.svg";
import BedCat from "../assets/bed_cat.svg";
import ChairCat from "../assets/chair_cat.svg";
import SofaCat from "../assets/sofa_cat.svg";
import MobileCat from "../assets/mobile_cat.svg";
import WatchCat from "../assets/watch_cat.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container mx-auto px-auto">
        <div className="flex">
          <div className="px-8 py-4 bg-sky-400 flex items-center cursor-pointer group relative">
            <span className="text-white">
              <FaBars className="font-black" />
            </span>
            <span className="capitalize ml-2 text-white">All Categories</span>
            <div className="absolute left-0 top-full w-full divide-gray-300 divide-dashed divide-y bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
              <Link className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                <img src={GameCat} className="w-5 h-5 object-contain " />
                <span className="ml-6 text-gray-600 text-sm">HeadPhones</span>
              </Link>
              <Link className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                <img src={MobileCat} className="w-5 h-5 object-contain" />
                <span className="ml-6 text-gray-600 text-sm">Phones</span>
              </Link>
              <Link className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                <img src={WatchCat} className="w-5 h-5 object-contain " />
                <span className="ml-6 text-gray-600 text-sm">Watches</span>
              </Link>
              <Link className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                <img src={BedCat} className="w-5 h-5 object-contain " />
                <span className="ml-6 text-gray-600 text-sm">Beds</span>
              </Link>
              <Link className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                <img src={ChairCat} className="w-5 h-5 object-contain" />
                <span className="ml-6 text-gray-600 text-sm">Chairs</span>
              </Link>
              <Link className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                <img src={SofaCat} className="w-5 h-5 object-contain" />
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 text-base capitalize">
              <Link
                to={"/"}
                className="text-gray-200 hover:text-sky-400 transition"
              >
                Home
              </Link>
              <Link
                to={"/"}
                className="text-gray-200 hover:text-sky-400 transition"
              >
                Shop
              </Link>
              <Link
                to={"/"}
                className="text-gray-200 hover:text-sky-400 transition"
              >
                About Us
              </Link>
              <Link
                to={"/"}
                className="text-gray-200 hover:text-sky-400 transition"
              >
                Best Deals
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-base capitalize mr-4">
              <Link
                to={"/login"}
                className="ml-auto justify-self-end text-gray-200 hover:hover:text-sky-400 transition"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="ml-auto justify-self-end text-gray-200 hover:hover:text-sky-400 transition"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
